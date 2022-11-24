import React from 'react';
import './banner.css'

const Banner = () => {
    return (
        <div className='flex flex-row items-center justify-center banner'>
            <div>
                <h3 className='text-4xl font-bold text-white'>Welcome to <span>,</span></h3>
                <h3 className='text-4xl font-bold text-white'>Bus selling BD</h3>
            </div>
        </div>
    );
};

export default Banner;