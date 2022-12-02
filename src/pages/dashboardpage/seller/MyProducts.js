import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';
import Loading from '../../../shared/loading/Loading';

const MyProducts = () => {
    const { user } = useContext(AuthContext)
    // const [deleteProduct, setDeleteProduct] = useState(null)
    const { data: myproducts, isLoading, refetch } = useQuery({
        queryKey: ['myproducts'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://resale-server-nine.vercel.app/myproducts/${user.email}`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json()
                return data
            } finally {

            }
        }
    })
    const handleDeleteProduct = product => {
        fetch(`https://resale-server-nine.vercel.app/myproducts/${product._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(result => {
                if (result.deletedCount > 0) {
                    toast.success(`${product.name}deleted successfully`)
                    refetch()
                }

            })
    }
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2>My products{myproducts?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full table-zebra">

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Names</th>
                            <th>Salete status</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Delete</th>
                            <th>Advertise</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myproducts.map((myproduct, i) => <tr key={i + 1}>

                                <th>{i + 1}</th>
                                <td><div className='avatar'>
                                    <div className='w-12 h-12 mask mask-squircle'>
                                        <img src="/tailwind-css-component-profile-2@56w.png" alt="product" />
                                    </div>
                                </div></td>
                                <td>{myproduct.name}</td>
                                <td>available</td>
                                <td>{myproduct.price}</td>
                                <td>{myproduct.category}</td>
                                <td><button onClick={() => handleDeleteProduct(myproduct)} className='btn btn-error btn-sm'>delete</button></td>
                                <td><button className='btn btn-warning btn-sm'>Advertise</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;