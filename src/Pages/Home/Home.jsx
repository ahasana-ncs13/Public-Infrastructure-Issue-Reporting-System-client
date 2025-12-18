import React from 'react';
import Banner from './HomeComponent/Banner';
import Features from './HomeComponent/Features';
import HowItWorks from './HomeComponent/HowItWorks';
import Statistics from './HomeComponent/Statistics';
import TrustPrinciples from './HomeComponent/TrustPrinciples';
import LatestIssue from './HomeComponent/LatestIssue';


const Home = () => {
    return (
        <div className='w-11/12 mx-auto pt-16'>
            <Banner></Banner>
            <LatestIssue></LatestIssue>
            <Features></Features>
            <HowItWorks></HowItWorks>
            <Statistics></Statistics>
            <TrustPrinciples></TrustPrinciples>
        </div>
    );
};

export default Home;