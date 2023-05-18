import React from 'react';
import { Link } from 'react-router-dom';
import pdf from '../../Pages/Home/Pdf/pdf.pdf';

const NavBar = () => {
    return (
        <div className=" flex flex-wrap items-center justify-between px-2 py-3 bg-slate-900 mb-3 sticky top-0 z-30">

    <div className="navbar bg-base-100 ">
    <div className="navbar-start">
    <div className="dropdown lg:hidden">
    <label tabindex="0" className="btn btn-ghost btn-circle">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
    </label>
    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

    <li> <Link to="/home">Home</Link></li>
    <li><Link to="/project">Projects</Link></li>
    <li><Link to="/skill">Skills</Link></li>
    <li><Link to="/blog">Blog</Link></li>
    <li><Link to="/About">About me</Link></li>
    <li><a href={pdf} target="_blank" rel="noopener noreferrer" download="PORTFOLIO">download resume</a></li>
    

    </ul>
    </div>
    </div>
    <div className="navbar lg:-ml-28 ">
    <Link to='/home' className="btn btn-ghost normal-case text-3xl">
        <h2>PORTFOLIO</h2>
     </Link>
    </div>
    <div className="navbar-end ">

    <ul className="flex gap-0 flex-col lg:flex-row list-none lg:ml-auto items-center">

    <li className="nav-item hidden lg:block">
                <Link to="/home"
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white lg:text-black md:text-white  hover:opacity-75"
                >

                <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Home</span>
                </Link>
            </li>
            
            <li className="nav-item hidden lg:block">
                <Link to="/project"
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white lg:text-black md:text-white hover:opacity-75 "
                
                
                >
                <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Projects</span>
                </Link>
            </li>
            <li className="nav-item hidden lg:block">
                <Link to="/skill"
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white lg:text-black md:text-white hover:opacity-75 "
                
                
                >
                <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Skills</span>
                </Link>
            </li>
            <li className="nav-item hidden lg:block">
                <Link to="/about"
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white lg:text-black md:text-white hover:opacity-75 "
                
                
                >
                <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2 whitespace-nowrap">About me</span>
                </Link>
            </li>
            <li className="nav-item hidden lg:block">
                <Link to="/contact"
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white lg:text-black md:text-white hover:opacity-75 "
                
                
                >
                <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Contact</span>
                </Link>
            </li>
            <li className="nav-item hidden lg:block">
                <Link to="/blog"
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white lg:text-black md:text-white hover:opacity-75 "
                
                
                >
                <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Blog</span>
                </Link>
            </li>
            <li className="nav-item hidden lg:block px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white lg:text-black md:text-white hover:opacity-75 ">
               
                <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><a href={pdf} download="PORTFOLIO"><span className="ml-2 whitespace-nowrap ">download resume</span></a>
                
            </li>
            
                    

        </ul>
    </div>
    </div>
    </div>
    );
};

export default NavBar;