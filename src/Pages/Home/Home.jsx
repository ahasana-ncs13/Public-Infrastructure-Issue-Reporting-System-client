import React from 'react';
import Banner from './HomeComponent/Banner';
import Features from './HomeComponent/Features';
import HowItWorks from './HomeComponent/HowItWorks';
import Statistics from './HomeComponent/Statistics';
import TrustPrinciples from './HomeComponent/TrustPrinciples';
import LatestIssue from './HomeComponent/LatestIssue';
import ProblemCategories from './HomeComponent/ProblemCategories';
import WhyThisPlatformMatters from './HomeComponent/WhyThisPlatformMatters';
import UserTestimonials from './HomeComponent/UserTestimonials';
import AuthorityPartners from './HomeComponent/AuthorityPartners';
import FAQ from './HomeComponent/FAQ';
import CTA from './HomeComponent/CTA';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto pt-16 space-y-20'>
            <Banner />
            <ProblemCategories />
            <Features />
            <HowItWorks />
            <WhyThisPlatformMatters />
            <LatestIssue />
            <Statistics />
            <UserTestimonials />
            <AuthorityPartners />
            <TrustPrinciples />
            <FAQ />  
            <CTA/>
            
        </div>
    );
};

export default Home;
