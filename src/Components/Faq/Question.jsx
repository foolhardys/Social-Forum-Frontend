import { FaChevronDown } from "react-icons/fa";

const Question = ({ question, answer, isSelected, onClick }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out">
            <button
                className="w-full text-left p-6 focus:outline-none"
                onClick={onClick}
            >
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold text-gray-800">{question}</h2>
                    <FaChevronDown
                        className={`text-purple-600 transition-transform duration-300 ${
                            isSelected ? 'transform rotate-180' : ''
                        }`}
                    />
                </div>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isSelected ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <p className="p-6 pt-0 text-gray-600">
                    {answer}
                </p>
            </div>
        </div>
    )
}

export default Question