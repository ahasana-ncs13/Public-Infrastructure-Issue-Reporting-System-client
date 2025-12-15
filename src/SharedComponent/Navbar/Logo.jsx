import React from 'react';
import { Link } from 'react-router';

const Logo = () => {
    return (
        <div>
             <Link to='/' className="btn btn-ghost md:text-xl text-sm">
          <sup className="md:text-2xl text-sm text-secondary font-bold">
             Public Infrastructure Issue</sup>
             <span className=" -m-25 pt-5">Reporting System</span>
          </Link>
        </div>
    );
};

export default Logo;