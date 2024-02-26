import AboutHero from "../Components/About/AboutHero"
import Team from "../Components/About/Team"

const About = () => {
  return (
    <section className='min-h-screen flex items-center flex-col'>
      <AboutHero />
      <Team />
    </section>
  )
}

export default About