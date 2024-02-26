import image from './analysis.png'

const AboutHero = () => {
    return (
        <section className="flex md:flex-row flex-col max-w-[1080px] p-4 gap-4">
            <div className="w-7/12">
                <h1 className="lg:text-[70px] md:text-[45px] text-[55px] leading-tight font-serif my-10">Our Vision</h1>
                <p className="lg:text-[20px] md:text-[16px] text-[18px] mb-10">
                    Welcome to our dedicated team based in the heart of Telangana, committed to shaping young minds through the fascinating realm of social studies. Nestled within the vibrant educational landscape, our team takes pride in providing comprehensive support to students, offering not just quality notes but an immersive learning experience. With a passion for education, we strive to instill a profound understanding of history, geography, and culture, fostering curiosity and critical thinking among our students. Together, we embark on a journey to empower the next generation with the knowledge and skills they need to navigate the complexities of the world around them. Join us as we make social studies an engaging and enriching adventure for every child in the school.
                </p>
            </div>
            <div className="w-5/12 flex items-center">
                <img src={image} alt="image" />
            </div>
        </section>
    )
}

export default AboutHero