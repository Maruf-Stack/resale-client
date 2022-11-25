import React from 'react';
import './banner.css'

const Banner = () => {
    return (
        <div className='flex flex-row items-center justify-center banner'>
            <div>
                <div> <h3 className='text-3xl font-bold text-white lg:text-5xl'>Welcome to<span className='text-sky-400'>,</span></h3>
                    <h3 className='text-3xl font-bold text-white lg:text-5xl'>Bus selling BD</h3></div>
                <div className='mt-5'>
                    <p className='text-x text-slate-300'>
                        This is our bus reselling website.Here you can sell your old bus and<br></br> buy a new bus.You can purchase many kinds of bus from us.We<br></br> are giving warranty of each bus.If there is any kinds of problems<br></br> contact with our teams.<br></br>
                        <span className='font-semibold text-sky-400'>HAPPY CLIENTS</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;