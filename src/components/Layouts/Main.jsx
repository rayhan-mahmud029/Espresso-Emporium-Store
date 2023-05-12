import React from 'react';
import TopNavbar from '../Shared/TopNavbar';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';


const Main = () => {
    return (
        <div>
            {/* NAVBAR */}
            <TopNavbar />

            {/* BODY COMPONENTS */}
            <Outlet />


            {/* FOOTER */}
            <Footer />
        </div>
    );
};

export default Main;