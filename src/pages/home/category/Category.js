import React, { useEffect, useState } from 'react';
import Single from './Single';

const Category = () => {
    const [catagories, setCatagories] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCatagories(data))
    }, [])
    return (
        <div className='mt-20'>
            <div>
                <h2 className='text-4xl font-bold text-center text-sky-400'>Select your brand</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 mt-9'>
                {
                    catagories.map(category => <Single category={category}></Single>)
                }
            </div>
        </div>
    );
};

export default Category;