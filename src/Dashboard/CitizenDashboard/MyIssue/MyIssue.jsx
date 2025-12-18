import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxios from '../../../Hooks/useAxios';
import useAuth from '../../../Hooks/useAuth';

const MyIssue = () => {
    const {user}=useAuth()
    const axiosInstance = useAxios()
    const {data : myIssue=[]}=useQuery({
        queryKey:["my-issue"],
        queryFn:async() => {
            const res = await axiosInstance.get(`/myissue?email=${user.email}`)
            return res.data
        }
    })

    return (
        <div>
            {myIssue.length}
        </div>
    );
};

export default MyIssue;