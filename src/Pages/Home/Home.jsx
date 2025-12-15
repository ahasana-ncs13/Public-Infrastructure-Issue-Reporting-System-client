import React from 'react';
import Navbar from '../../SharedComponent/Navbar/Navbar';
import Banner from './HomeComponent/Banner';
import Features from './HomeComponent/Features';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Banner></Banner>
            <Features></Features>
        </div>
    );
};

export default Home;