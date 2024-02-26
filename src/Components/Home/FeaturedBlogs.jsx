import { Link } from "react-router-dom"

const FeaturedBlogs = () => {
    return (
        <section className="max-w-[1080px] p-4 items-start flex flex-col">
            <h1 className="lg:text-[70px] md:text-[45px] text-[50px] leading-tight font-serif my-10 text-left">Featured Blogs</h1>
            <Link to='/blogs' className="bg-purple-700 rounded-md shadow-md p-2 text-lg text-white hover:bg-purple-500 transition">Explore all blogs</Link>
        </section>
    )
}

export default FeaturedBlogs