import React from 'react';
import { useQuery } from '@tanstack/react-query';


const Allseller = () => {
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    });

    return (
        <div>
            <h2 className='mb-4 text-4xl font-semibold'>All Seller</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th></th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => {
                                return user?.role === 'seller' &&
                                    <tr key={i + 1}>
                                        <th>{i + 1}</th>
                                        <td>{user?.name}</td>
                                        <td>{user?.email}</td>
                                        {/* <td>{user?.role !== 'admin' && <button onClick={() => makeAdmit(user._id)} className='px-5 btn btn-success'>Make admin</button>}</td> */}
                                        <td><button className='px-5 btn btn-error'>Delete</button></td>
                                    </tr>
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allseller;