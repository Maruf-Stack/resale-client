import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const Users = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://resale-server-nine.vercel.app/users');
            const data = await res.json();
            return data;
        }
    });
    const handleDeleteUsers = user => {
        fetch(`https://resale-server-nine.vercel.app/user/${user._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(result => {
                if (result.deletedCount > 0) {
                    toast.success(`${user.name} deleted successfully`)
                    refetch()
                }

            })
    }
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

                                        <td><button onClick={() => handleDeleteUsers(user)} className='px-5 btn btn-error'>Delete</button></td>
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