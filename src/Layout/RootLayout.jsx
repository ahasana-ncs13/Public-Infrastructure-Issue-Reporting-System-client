import React from 'react';
import Navbar from '../SharedComponent/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../SharedComponent/Footer/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;