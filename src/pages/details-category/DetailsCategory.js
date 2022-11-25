import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DetailsOfCategory from './DetailsOfCategory';

const DetailsCategory = () => {
    const category = useLoaderData();
    const { products } = category;
    return (
        <div>
            {
                products.map((product, i) => <DetailsOfCategory key={i + 1} product={product}></DetailsOfCategory>)
            }
        </div>
    );
};

export default DetailsCategory;