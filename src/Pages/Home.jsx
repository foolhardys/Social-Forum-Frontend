import HomeHero from "../Components/Home/HomeHero"
import FeaturedBlogs from "../Components/Home/FeaturedBlogs"
import Announcements from "../Components/Announcements/Announcements"

const Home = () => {
  return (
    <section className='min-h-screen flex items-center flex-col'>
      <HomeHero/>
      <Announcements/>
      <FeaturedBlogs/>
    </section>
  )
}

export default Home