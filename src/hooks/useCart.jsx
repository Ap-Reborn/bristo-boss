// import React from 'react';
import { useQuery } from '@tanstack/react-query'
// import { useContext } from 'react';
// import { AuthContext } from '../Provider/AuthProvider';
import useAxiosSecure from './useAxiouSecure';
import useAuth from './useAuth';


const useCart = () => {
    const { user,loading } = useAuth();
    // 78.8 start
    // const token = localStorage.getItem('access-token');
   const [axiosSecure] = useAxiosSecure();
     // nica fetch er modde header and authorization kora hoica
    // 78.8 end
    //78.9 start
    // nica await er pse axioussecure bosalam fetch kete
    // http://localhost:5000 kete dea hoica
    /*  ,{
        headers:{
            authorization:`bearer ${token}`
        }} fele dea hoica */
    //78.9 end
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled:!loading,
        // queryFn: async () => {
        //     const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
        //         headers: {
        //             authorization: `bearer ${token}`
        //         }
        //     })
        //     return res.json();
        // },
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`)
           console.log('res from axios',res)
            return res.data;
        },


     
    })
    return [cart, refetch]
};

export default useCart;
