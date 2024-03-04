import image from './pic-3.jpg'

const AboutHero = () => {
    return (
        <section className="flex md:flex-row flex-col max-w-[1080px] p-4 gap-4 my-[25px]">
            <div className="w-7/12">
                <h1 className="lg:text-[60px] md:text-[45px] text-[55px] leading-tight font-serif my-10">G.Rathanga Pani Reddy</h1>
                <h2 className="lg:text-[45px] md:text-[30px] text-[30px] leading-tight font-serif my-10">President , TSSTF</h2>
                <p className="lg:text-[20px] md:text-[16px] text-[18px] mb-10">
                    Address  :  ZPHS, Janampet,Mahabub Nagar
                    <br />
                    Contact  : 9705806581
                </p>
            </div>
            <div className="w-5/12 flex items-center">
                <img src={image} alt="image" className='rounded-md shadow-md' />
            </div>
        </section>
    )
}

export default AboutHero