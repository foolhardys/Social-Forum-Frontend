import { QuizCategories } from "../Utils/Constant"

const Quiz = () => {
  return (
    <section className="min-h-screen bg-purple-200 p-4 flex flex-col items-center justify-center">
      <h1 className="text-[35px] font-[700]">Take a Quiz!!!</h1>
      <div className="flex md:justify-between justify-center md:flex-row flex-col w-full lg:w-[1080px] min-h-screen items-center">
        <div className="md:w-1/3 w-full md:h-screen  p-5">
          <h2 className="text-[20px] font-[700]">Class</h2>
          <div className="flex md:flex-col flex-row flex-wrap max-h-[400px] my-[30px] gap-4">
            {
              QuizCategories.map((category) => {
                return (
                  <div key={category.id} className="flex items-center p-1 gap-2">
                    <input type="checkbox" name="category" id="category" className="p-2" key={category.id} value={category.category} />
                    <label htmlFor="category" className="text-[18px]">{category.category }</label>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="md:w-2/3 w-full border-2 border-black min-h-screen bg-violet-200"></div>
      </div>
    </section>
  )
}

export default Quiz