import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const Users = () => {
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    });
    // const makeAdmit = id => {
    //     fetch(`http://localhost:5000/users/admin/${id}`, {
    //         method: 'PUT',
    //         headers: {
    //             authorization: `bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             if (data.modifiedCount > 0) {
    //                 toast.success('Make admin successful.')
    //                 refetch();
    //             }
    //         })
    // }
    return (
        <div>
            <h2 className='mb-4 text-4xl font-semibold'>All users</h2>
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
                                return user?.role === 'user' &&
                                    <tr key={i + 1}>
                                        <th>{i + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        {/* <td>{user?.role !== 'admin' && <button onClick={() => makeAdmit(user._id)} className='px-5 btn btn-success'>Make admin</button>}</td> */}
                                        <td><button className='px-5 btn btn-error'>Delete</button></td>
                                    </tr>
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users;