import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const data = async () => {
    try{
        const response = await axios.get(import.meta.env.VITE_APP_URL_NAVLINK);
        return response.data;
    }catch(error){
        throw error
    }
}

const queryKey = ['NavQueryKey'];
export const navLink = () => {
  return useQuery({
    queryKey: queryKey,
    queryFn : data,
    cacheTime: 5000,
    staleTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: 'always',
    // refetchInterval: 2000,
    refetchIntervalInBackground: true,
  })
}
