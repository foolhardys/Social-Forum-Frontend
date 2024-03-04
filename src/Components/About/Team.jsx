import image from './pic-1.jpg'

const Team = () => {
    return (
        <section className="flex md:flex-row flex-col max-w-[1080px] p-4 gap-4 my-[25px]">
            <div className='w-7/12'>
                <h1 className="lg:text-[60px] md:text-[45px] text-[55px] leading-tight font-serif my-10">Nagarjunapu Radhakrishna Chary</h1>
                <h2 className="lg:text-[45px] md:text-[30px] text-[30px] leading-tight font-serif my-10">Treasurer , TSSTF</h2>
                <p className="lg:text-[20px] md:text-[16px] text-[18px] mb-10">
                    Address  : ZPHS PULUKURTHY, District Hanumakonda
                    Contact  : 9490124531
                </p>
            </div>
            <div className='w-5/12 flex items-center'>
                <img src={image} alt="image" className='rounded-md shadow-lg' />
            </div>
        </section>
    )
}

export default Team