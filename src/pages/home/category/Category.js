import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import Loading from '../../../shared/loading/Loading';
import Single from './Single';

const Category = () => {
    const [catagories, setCatagories] = useState([])
    const { loading } = useContext(AuthContext)
    useEffect(() => {
        fetch('https://resale-server-nine.vercel.app/categories')
            .then(res => res.json())
            .then(data => {
                if (loading) {
                    <Loading></Loading>
                }
                setCatagories(data)
            })
    }, [loading])
    return (
        <div className='mt-20'>
            <div>
                <h2 className='text-4xl font-bold text-center text-sky-400'>Select your brand</h2>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 mt-9'>
                {
                    catagories.map((category, i) => <Single category={category} key={i + 1}></Single>)
                }
            </div>
        </div>
    );
};

export default Category;