// import React from 'react';
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';


const useCart = () => {
    const { user } = useContext(AuthContext);
    // 78.8 start
    const token = localStorage.getItem('access-token');
    // nica fetch er modde header and authorization kora hoica
    // 78.8 end
    const { refetch,data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`,{
                headers:{
                authorization:`bearer ${token}`
            }})
            return res.json();
        },
    })
    return [cart,refetch]
};

export default useCart;