import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import Loading from '../../../shared/loading/Loading';

const Buyer = () => {
    const { user, loading } = useContext(AuthContext)
    const url = `https://resale-server-nine.vercel.app/bookings?email=${user?.email}`;
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings &&
                            bookings?.map((booking, i) => <tr key={i + 1}>
                                <th>{i + 1}</th>
                                <td>{booking.brandName}</td>
                                <td>{booking.price}</td>
                                <td><button className='px-6 btn btn-info text-slate-700'>Pay</button></td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Buyer;