import React from 'react';
import footerBg from '../../assets/footerBg.jpg'

const Footer = () => {
    return (
        <div>
            <div className='relative h-10'>
                <img src={footerBg} alt="Background" className='w-full h-10 object-cover' />
                <div className='flex gap-3 absolute top-0 items-center justify-center w-full mt-2'>
                    <h1 className='nav-title text-xl'>Copyright Espresso Emporium ! All Rights Reserved</h1>
                </div>
            </div>
        </div>
    );
};

export default Footer;