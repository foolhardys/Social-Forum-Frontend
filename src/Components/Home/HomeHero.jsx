import { Link } from 'react-router-dom'
import image from './research.png'

const HomeHero = () => {
    return (
        <section className="flex md:flex-row flex-col max-w-[1080px] p-4 gap-4">
            <div>
                <h1 className="lg:text-[70px] md:text-[45px] text-[55px] leading-tight font-serif my-10">Discover the Past, Shape the Future</h1>
                <p className="lg:text-[20px] md:text-[16px] text-[18px] mb-10">
                    Embark on a fascinating journey through the realms of social studies. Explore diverse cultures, unravel historical mysteries, and embrace the power of knowledge.
                </p>
                <Link to='/resources' className="bg-purple-700 rounded-md shadow-md p-2 text-lg text-white hover:bg-purple-500 transition">Explore Resources</Link>
            </div>
            <div>
                <img src={image} alt="image" />
            </div>
        </section>
    )
}

export default HomeHero
