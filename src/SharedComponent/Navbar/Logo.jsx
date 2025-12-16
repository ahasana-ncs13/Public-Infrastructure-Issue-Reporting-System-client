import React from 'react';
import { Link } from 'react-router';

const Logo = () => {
    return (
        <div>
             <Link to='/' className="btn btn-ghost md:text-2xl text-sm text-secondary font-bold">
             CivicFix
          </Link>
        </div>
    );
};

export default Logo;