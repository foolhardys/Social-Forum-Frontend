import { NavLinks, SocialLinks } from "../../Utils/Constant"
import { Link, NavLink } from "react-router-dom"
import logo from './SocialForum.png'
import logo2 from './zorway_logo.png'
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
            <div className="text-white flex-1 flex items-center justify-center flex-col">
                <img src={logo} alt="" className="h-[170px]" />
                <p className="text-white my-8 font-[600]">Telangana Social Studies Teachers Forum</p>
            </div>
            <ul className="flex-1 md:px-12 px-3 py-4 flex flex-col items-start justify-center">
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
            <ul className="flex-1 md:px-12 px-3 py-4 flex flex-col items-start justify-center">
                <h1 className="text-gray-100 font-[700] mb-[30px] text-[16px]">Social</h1>
                <div className="flex flex-col">
                    {SocialLinks.map((sociallink) => {
                        const { id, name, url } = sociallink
                        return (
                            <li key={id} className='capitalize'>
                                <a to={url} className='text-gray-400 font-semibold p-2 transition text-[12px] mt-2 hover:text-gray-300 rounded-md'> {name} </a>
                            </li>
                        )
                    })}
                </div>
            </ul>
            <div className="text-white flex-1 flex flex-col items-center justify-start p-5">
                <img src={logo2} alt="" className="h-[150px]" />
                <h1 className="text-white font-[600]">Website and Designs By : <a href="https://zorway.in/" className="underline font-[700]">Zorway</a> </h1>
                <p className="text-white font-[400] text-left">Contact us: </p>
                <p className="text-white font-[400]">Phone: +919100545426 <br /> Whatsapp: +918770741112 <br /> Email: contact@zorway.in</p>
            </div>
        </footer>
    )
}

export default Footer