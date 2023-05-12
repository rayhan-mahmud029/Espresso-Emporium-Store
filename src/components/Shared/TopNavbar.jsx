import React from 'react';
import logo from '../../assets/logo1.png'
import navBg from '../../assets/navBg.jpg'

const TopNavbar = () => {
    return (
        <div className='relative h-16'>
            <img src={navBg} alt="Background" className='w-full h-16 object-cover'/>
            <div className='flex gap-3 absolute top-0 items-center justify-center w-full mt-2'>
                <img src={logo} alt="logo" className='w-10'/>
                <h1 className='nav-title'>Espresso Emporium</h1>
            </div>
        </div>
    );
};

export default TopNavbar;