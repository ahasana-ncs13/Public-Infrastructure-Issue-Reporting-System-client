import React from 'react';
import Loading from '../SharedComponent/Loader/Loading';
import useAuth from '../Hooks/useAuth';
import { Navigate } from 'react-router';

const PrivateRoutes = ({children}) => {
    const {user,loading}=useAuth()
    if(loading){
        return <Loading></Loading>
    }
    if(user){
        return children
    }
    return <Navigate to='/loginlayout/login'></Navigate>
};

export default PrivateRoutes;