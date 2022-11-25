import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DetailsOfCategory from './DetailsOfCategory';

const DetailsCategory = () => {
    const category = useLoaderData();
    const { products } = category;
    return (
        <div>
            <h2 className='lg:text-4xl text-2xl lg:mb-20 mb-7 text-sky-400 font-semibold text-center'>Available Bus</h2>
            {
                products.map((product, i) => <DetailsOfCategory key={i + 1} product={product}></DetailsOfCategory>)
            }
        </div>
    );
};

export default DetailsCategory;