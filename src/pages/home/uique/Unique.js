import React from 'react';
import phone from '../../../assets/phone.jpg';
import taka from '../../../assets/taka.webp'
import discount from '../../../assets/discount.jpg'
const Unique = () => {
    return (
        <div className='mt-16'>
            <div className='mb-8 text-center'>
                <h3 className='mb-2 text-4xl font-bold text-sky-400'>Buy one and get one free</h3>
                <p className='font-semibold text-slate-500'>Buy one car from us and you can get any one price of your choice</p>
            </div>
            <div className='grid grid-cols-1 gap-2 lg:grid-cols-3'>
                <img src={phone} alt="phone" className='mx-auto shadow-lg w-96 h-80' />
                <img src={taka} alt="phone" className='mx-auto shadow-lg w-96 h-80' />
                <img src={discount} alt="phone" className='mx-auto shadow-lg w-96 h-80' />

            </div>
        </div>
    );
};

export default Unique;