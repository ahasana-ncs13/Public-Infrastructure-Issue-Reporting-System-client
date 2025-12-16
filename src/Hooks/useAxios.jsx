import axios from 'axios';
import React from 'react';

const axioInstance = axios.create({
  baseURL: 'http://localhost:3000',
});

const useAxios = () => {
    return axioInstance
};

export default useAxios;