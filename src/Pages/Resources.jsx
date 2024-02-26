import { useEffect, useState } from "react"
import { Filters } from "../Utils/Constant"
import axios from "axios"
import Loading from "./Loading"
import { Link } from "react-router-dom"

const baseUrl = import.meta.env.VITE_API_URL + '/getResource'

const Resources = () => {

  const [selectedFilters, setSelectedFilters] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [filteredItems, setFilteredItems] = useState([])
  const [items, setItems] = useState([])
  const tempuser = localStorage.getItem('user')
  const user = JSON.parse(tempuser)

  // const handleFilterButtonClick = (selectedCategory) => {
  //   if (selectedFilters.includes(selectedCategory)) {
  //     let filters = selectedFilters.filter((el) => el !== selectedCategory);
  //     setSelectedFilters(filters);
  //   } else {
  //     setSelectedFilters([...selectedFilters, selectedCategory]);
  //   }
  // };

  // const filterItems = () => {
  //   if (selectedFilters.length > 0) {
  //     let tempItems = selectedFilters.map((selectedCategory) => {
  //       let temp = items.filter((item) => item.category === selectedCategory);
  //       return temp;
  //     });
  //     setFilteredItems(tempItems.flat());
  //   } else {
  //     setFilteredItems([...items]);
  //   }
  // };

  const handleFilterButtonClick = (selectedCategory) => {
    // Ensure only one category is selected at a time
    setSelectedFilters([selectedCategory]);
  };

  const filterItems = () => {
    const selectedCategory = selectedFilters[0]; // Access the single selected category

    if (selectedCategory) {
      const filteredItems = items.filter((item) => item.category === selectedCategory);
      setFilteredItems(filteredItems);
    } else {
      // No category selected, so show all items
      setFilteredItems([...items]);
    }
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const res = await axios.get(baseUrl)
        const data = res.data.data
        console.log(data);
        setFilteredItems(data)
        setItems(data)
        setIsLoading(false)
      } catch (error) {
        setError(error)
      }

    }
    fetchData()
  }, [])

  useEffect(() => {
    filterItems()
  }, [selectedFilters])




  return (
    <section className="min-h-screen bg-purple-200 p-4 flex flex-col items-center justify-center">
      <h1 className="text-[35px] font-[700]">Resources</h1>
      <div className="flex md:justify-between justify-center md:flex-row flex-col w-full lg:w-[1020px] min-h-screen items-center">
        <div className="md:w-1/3 w-full md:h-screen  p-5">
          <h2 className="text-[20px] font-[700]">Categories</h2>
          <div className="flex md:flex-col flex-row flex-wrap max-h-[400px] my-[30px] gap-4">
            {Filters.map((category, index) => {
              return (
                <button
                  className={` p-2 rounded-md  hover:bg-purple-100 hover:text-black ${selectedFilters?.includes(category) ? "bg-purple-100 border-purple-100 text-black hover:bg-purple-300" : "text-white bg-purple-600"
                    }`}
                  onClick={() => handleFilterButtonClick(category)}
                  key={index}>{category}</button>
              )
            })}
            {
              user?.accountType === 'Admin' ? (<Link to='/createResource' className="p-2 rounded-md bg-blue-800 hover:bg-blue-500 text-center text-white font-[500]">Add resource</Link>) : <></>
            }
          </div>
        </div>
        {
          isLoading ? <Loading /> : (
            <div className="md:w-2/3 w-full min-h-screen bg-purple-200 flex md:flex-row md:flex-wrap flex-col gap-2">
              {filteredItems.map((item, idx) => (
                <div key={`items-${idx}`} className="md:w-[300px] w-full border-2 border-black p-1 h-[250px]">
                  <img src={item.resourseUrl} className="w-full h-full" alt="" />
                  <a href={item.resourseUrl} target="_blank" className="text-blue-700">Pdf</a>
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          )
        }
      </div>
    </section>
  )
}

export default Resources