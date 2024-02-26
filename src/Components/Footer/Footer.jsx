import { NavLinks, SocialLinks } from "../../Utils/Constant"
import { Link } from "react-router-dom"


const Footer = () => {
    return (
        <footer className="flex w-full bg-black/95 md:flex-row flex-col min-h-[300px]">
            <div className="text-white border-r-2 border-gray-200/80 flex-1 p-2">
                Logo + Name + description
            </div>
            <ul className="flex-1 md:px-12 px-3 py-4">
            <h1 className="text-gray-100 font-[700] mb-[30px] text-[16px]">Explore!!</h1>
                {NavLinks.map((navlink) => {
                    const { id, text, url } = navlink
                    return (
                        <li key={id} className='capitalize'>
                            <Link to={url} className='text-gray-400 font-semibold p-2 transition text-[12px] mt-2 hover:text-gray-300 rounded-md'> {text} </Link>
                        </li>
                    )
                })}
            </ul>
            <ul className="md:px-12 px-3 py-4 flex-1">
            <h1 className="text-gray-100 font-[700] mb-[30px] text-[16px]">Social</h1>
                {SocialLinks.map((sociallink) => {
                    const { id, name, url} = sociallink
                    return (
                        <li key={id} className='capitalize'>
                            <a to={url} className='text-gray-400 font-semibold p-2 transition text-[12px] mt-2 hover:text-gray-300 rounded-md'> {name} </a>
                        </li>
                    )
                })}
            </ul>
            <div className="text-white border-l-2 border-gray-200/80 flex-1 p-2">
                designed and developed by zorway
            </div>
        </footer>
    )
}

export default Footer