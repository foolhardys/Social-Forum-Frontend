import img from '../assets/SocialForum.png'

const Banner = () => {
    return (
        <div className="min-h-[150px] bg-purple-300 flex justify-center items-center text-purple-950 text-[25px] font-[700] flex-col p-3 md:flex-row gap-4">
            <img src={img} alt="" className='h-[120px]' />
            <p className='text-center'>Telangana Social Studies Teachers Forum</p>
        </div>
    )
}

export default Banner