import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthConText } from '../provider/Authprovider';

const useCart = () => {
    const {user} = useContext(AuthConText);

    const { refetch, data: cart=[]} = useQuery({
        queryKey: ['cart',user?.email],
        queryFn: async () =>{
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
            return res.json()
        }
      })

      return [cart,refetch];
};

export default useCart;