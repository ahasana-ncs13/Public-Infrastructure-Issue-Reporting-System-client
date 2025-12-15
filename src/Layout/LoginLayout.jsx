import React from 'react';
import Navbar from '../SharedComponent/Navbar/Navbar';
import { Outlet } from 'react-router';

const LoginLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;