import HomeHero from "../Components/Home/HomeHero"
import FeaturedBlogs from "../Components/Home/FeaturedBlogs"

const Home = () => {
  return (
    <section className='min-h-screen flex items-center flex-col'>
      <HomeHero/>
      <FeaturedBlogs/>
    </section>
  )
}

export default Home