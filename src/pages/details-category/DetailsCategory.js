import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Modal from '../modal/Modal';
import DetailsOfCategory from './DetailsOfCategory';

const DetailsCategory = () => {
    const category = useLoaderData();
    const [booking, setBooking] = useState(null)
    const { products } = category;
    return (
        <div>
            <div>
                <h2 className='text-2xl font-semibold text-center lg:text-4xl lg:mb-20 mb-7 text-sky-400'>Available Bus</h2>
                {
                    products.map((product, i) => <DetailsOfCategory key={i + 1} product={product} setBooking={setBooking}></DetailsOfCategory>)
                }
            </div>
            <Modal></Modal>
        </div>
    );
};

export default DetailsCategory;