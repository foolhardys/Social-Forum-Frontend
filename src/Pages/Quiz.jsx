import { useEffect, useState } from "react";
import { QuizCategories } from "../Utils/Constant"
import axios from "axios";
import Loading from './Loading'
import Error from './Error'
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

const quizUrl = import.meta.env.VITE_API_URL + '/getAllQuizes'
const deleteUrl = import.meta.env.VITE_API_URL + '/deleteQuiz'

const Quiz = () => {
  const [selectedFilters, setSelectedFilters] = useState([])
  const [filteredItems, setFilteredItems] = useState([])
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [quizAnswered, setQuizAnswered] = useState(false)
  const tempuser = localStorage.getItem('user')
  const user = JSON.parse(tempuser)

  const fetchData = async () => {
    try {
      setIsLoading(true)
      const res = await axios.get(quizUrl)
      const data = res.data.data
      setFilteredItems(data)
      setItems(data)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      setError(error)
      toast.error(error?.response?.data?.message)
    }
  }

  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  const handleChange = (event, questionId) => {
    setSelectedAnswers({ ...selectedAnswers, [questionId]: event.target.value });
  };

  const calculateScore = () => {
    let score = 0;
    filteredItems.forEach((question) => {
      const correctAnswer = question.correctAnswer;
      const selectedAnswer = selectedAnswers[question._id];

      if (selectedAnswer && selectedAnswer === correctAnswer) {
        score += 1;
      }
    });
    setQuizAnswered(true)
    toast.success(`You have scored ${score} out of ${filteredItems.length}`)
    return score;
  };

  const handleFilterButtonClick = (selectedCategory) => {
    setSelectedFilters([selectedCategory]);
  };

  const filterItems = () => {
    const selectedCategory = selectedFilters[0];
    if (selectedCategory) {
      const filteredItems = items.filter((item) => item.category === selectedCategory);
      const shuffledItems = shuffleArray(filteredItems.slice());
      setFilteredItems(shuffledItems);
    } else {
      setFilteredItems([...items]);
    }
  };

  const deleteQuiz = async (id) => {
    try {
      const token = user.token
      await axios.delete(`${deleteUrl}/${id}`,
        {
          headers: {
            "Authorization": `Bearer ${token}`,
          }
        }
      )
      toast.success('Question deleted')
      fetchData()
    } catch (error) {
      toast.error(error?.response?.data?.message)
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    filterItems()
    setQuizAnswered(false)
  }, [selectedFilters])

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Take a Quiz!</h1>
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Select Class</h2>
          <div className="flex flex-wrap gap-2">
            {QuizCategories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full transition-colors duration-200 ${
                  selectedFilters.includes(category)
                    ? "bg-purple-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-purple-100"
                }`}
                onClick={() => handleFilterButtonClick(category)}
              >
                Class-{category}
              </button>
            ))}
            {user?.accountType === 'Admin' || user?.accountType === 'SuperAdmin' ? (
              <Link to='/createQuestion' className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 flex items-center">
                <FaPlus className="mr-2" /> Add question
              </Link>
            ) : null}
          </div>
        </div>
        <div className="space-y-6">
          {filteredItems.map((item, idx) => (
            <div key={`items-${idx}`} className="bg-white rounded-lg shadow-md p-6">
              <p className="text-lg font-semibold mb-4">({idx + 1}). {item.question}</p>
              <div className="space-y-2">
                {item.options.map((option, optionIdx) => (
                  <div key={optionIdx} className="flex items-center">
                    <input
                      type="radio"
                      id={`${item._id}-${optionIdx}`}
                      name={item._id}
                      value={option}
                      checked={selectedAnswers[item._id] === option}
                      onChange={(e) => handleChange(e, item._id)}
                      className="mr-2"
                    />
                    <label htmlFor={`${item._id}-${optionIdx}`} className="text-gray-700">{option}</label>
                  </div>
                ))}
              </div>
              {quizAnswered && (
                <p className="mt-4 text-green-600 font-semibold">Correct answer: {item.correctAnswer}</p>
              )}
              {(user?.accountType === 'Admin' || user?.accountType === 'SuperAdmin') && (
                <div className="mt-4 flex gap-2">
                  <Link to={`/updateQuiz/${item._id}`} className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition-colors duration-200 flex items-center">
                    <FaEdit className="mr-2" /> Update
                  </Link>
                  <button
                    className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition-colors duration-200 flex items-center"
                    onClick={() => deleteQuiz(item._id)}
                  >
                    <FaTrash className="mr-2" /> Delete
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
        {filteredItems.length > 0 && (
          <button
            className="mt-8 w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold text-lg"
            onClick={calculateScore}
          >
            Check Score
          </button>
        )}
      </div>
    </section>
  )
}

export default Quiz