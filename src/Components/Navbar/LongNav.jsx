import { NavLinks } from "../../Utils/Constant";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsPersonFill } from "react-icons/bs";

const LongNav = () => {

    const [active, setActive] = useState(1)


    return (
        <div className='w-full p-4 lg:flex justify-evenly items-center bg-purple-100/90 gap-4 h-[70px] hidden'>
            <Link to='/' className='text-center lg:text-[30px] text-[25px] font-[800] p-1 text-purple-700 font-display' onClick={()=> setActive(1)} >
                Social Forum
            </Link>
            <ul className='min-w-[680px] lg:flex justify-between capitalize p-2'>
                {NavLinks.map((navlink) => {
                    const { id, text, url } = navlink

                    return (
                        <NavLink to={url} key={id} className={id === active ? 'text-purple-900 font-[600] p-1 lg:text-[16px] transition text-[20px] mx-1 mt-2 hover:text-gray-800 border-b-[3px] border-b-purple-900' : 'text-purple-900 font-[600] p-1 lg:text-[16px] transition text-[20px] mx-1 mt-2 hover:text-gray-800 hover:border-b-[3px] hover:border-b-purple-900'} onClick={() => setActive(id)}>
                            {text}
                        </NavLink>
                    )
                })}
            </ul>
            <Link to='/login' className='text-center border-2 rounded-full border-purple-900 lg:text-[30px] text-[25px] font-[600] p-1 text-purple-900 font-display bg-purple-200' >
                <BsPersonFill />
            </Link>
        </div>
    )
}

export default LongNav