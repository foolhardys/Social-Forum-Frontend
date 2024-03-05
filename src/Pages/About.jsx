import AboutHero from "../Components/About/AboutHero"
import AboutHero2 from "../Components/About/AboutHero2"
import Team from "../Components/About/Team"

const About = () => {
  return (
    <section className='min-h-screen flex items-center flex-col'>
      <AboutHero />
      <Team />
      <AboutHero2 />
    </section>
  )
}

export default About