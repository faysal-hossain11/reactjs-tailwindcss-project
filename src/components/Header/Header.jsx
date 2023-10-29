import React, { useState } from 'react';
import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';
import { GrLanguage } from "react-icons/gr";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <div className=''>
            <nav className=' flex justify-between shadow-md items-center md:px-24 py-2 px-5  bg-white  fixed top-0 left-0 right-0'>
                <div className='flex items-center gap-14'>
                    <div>
                        <Link to='/'><img src={Logo} className='' /></Link>
                    </div>
                    {/* menu for desktop */}
                    
                        <ul className='md:flex gap-8 hidden'>
                            <li className='text-[18px] font-semibold hover:text-secondary transition-all text-primary'>
                                <Link to='/overview'>Overview</Link>
                            </li>
                            <li className='text-[18px] font-semibold hover:text-secondary transition-all text-primary'>
                                <Link to='/feature'>Feature</Link>
                            </li>
                            <li className='text-[18px] font-semibold hover:text-secondary transition-all text-primary'>
                                <Link to='/about'>About</Link>
                            </li>
                            <li className='text-[18px] font-semibold hover:text-secondary transition-all text-primary'>
                                <Link to='/pricing'>Pricing</Link>
                            </li>
                        </ul>
                   
                    
                </div>
                {/* menu just for mobile */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-white focus:outline-none focus:text-gray-300 transition-all duration-200'>
                        {
                            isMenuOpen ? (<HiX className='w-6 h-6 text-primary' />) : (<HiMenu className='w-6 h-6 text-primary' />)
                        }
                    </button>
                </div>
                <div className='hidden lg:flex flex gap-6'>
                    <a href='/' className='flex items-center gap-3'><GrLanguage /> Language</a>
                    <button className='bg-secondary px-5 py-2 text-white font-bold rounded-md hover:bg-primary transition-all duration-300'>Sign up</button>
                </div>
            </nav>
            <ul className={`md:hidden space-y-4 py-8 pt-24  bg-primary text-white px-5 ${isMenuOpen ? "block fixed top-0 left-0 right-0" : "hidden"}`}>
                <li className='text-[18px] font-semibold hover:text-secondary transition-all text-white'>
                    <Link to='/overview'>Overview</Link>
                </li>
                <li className='text-[18px] font-semibold hover:text-secondary transition-all text-white'>
                    <Link to='/feature'>Feature</Link>
                </li>
                <li className='text-[18px] font-semibold hover:text-secondary transition-all text-white'>
                    <Link to='/about'>About</Link>
                </li>
                <li className='text-[18px] font-semibold hover:text-secondary transition-all text-white'>
                    <Link to='/pricing'>Pricing</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;