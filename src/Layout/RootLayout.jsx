import React from 'react';
import Navbar from '../SharedComponent/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../SharedComponent/Footer/Footer';
import useAuth from '../Hooks/useAuth';
import Loading from '../SharedComponent/Loader/Loading';

const RootLayout = () => {
    const {loading}=useAuth()
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;