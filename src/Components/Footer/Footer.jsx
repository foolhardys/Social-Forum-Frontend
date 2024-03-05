import { NavLinks, SocialLinks } from "../../Utils/Constant"
import { Link, NavLink } from "react-router-dom"
import logo from './logo.jpg'
import { useContext, useEffect, useState } from "react";
import { ActiveLinkContext } from "../../Context/ActiveLinkContext";

// 


const Footer = () => {
    const { activeLinkId, handleLinkClick } = useContext(ActiveLinkContext);
    const [initialActiveLinkId, setInitialActiveLinkId] = useState(activeLinkId);

    useEffect(() => {
        if (window.location.pathname === '/') {
            handleLinkClick(1); // Reset for homepage
            localStorage.removeItem('activeLinkId'); // Clear storage entry
        } else {
            setInitialActiveLinkId(activeLinkId); // Store initial state on other pages
        }
    }, []);
    
    return (
        <footer className="flex w-full bg-black/95 md:flex-row flex-col min-h-[300px]">
            <div className="text-white flex-1">
                <img src={logo} alt="" className="h-[170px]" />
            </div>
            <ul className="flex-1 md:px-12 px-3 py-4">
                <h1 className="text-gray-100 font-[700] mb-[30px] text-[16px]">Explore!!</h1>
                <div className="flex flex-col">
                    {NavLinks.map((navlink) => {
                        const { id, text, url } = navlink
                        return (
                            <NavLink
                                key={id}
                                to={url}
                                className='text-gray-400 font-semibold transition text-[12px] mt-2 hover:text-gray-300 rounded-md'
                                onClick={() => handleLinkClick(id)}>
                                {text}
                            </NavLink>
                        )
                    })}
                </div>
            </ul>
            <ul className="md:px-12 px-3 py-4 flex-1">
                <h1 className="text-gray-100 font-[700] mb-[30px] text-[16px]">Social</h1>
                {SocialLinks.map((sociallink) => {
                    const { id, name, url } = sociallink
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