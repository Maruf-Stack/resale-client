import React from 'react';

const DetailsOfCategory = ({ product, setBooking }) => {
    const { name, image, location, originalprice, posttime, resaleprice, sellername, varified, yearsofuse } = product;
    return (
        <div>
            <div className="mb-10 shadow-xl card lg:card-side lg:mx-20">
                <figure><img src={image} alt="Album" className='w-64' /></figure>
                <div className="card-body">
                    <h2 className="card-title text-sky-500">{name}</h2>
                    <p>Location : {location}</p>
                    <p>Price : {resaleprice}</p>
                    <p>Original price : {originalprice}</p>
                    <p>Used :{yearsofuse} Years</p>
                    <p>Post time : {posttime}</p>
                    <p className='font-semibold text-black'>Seller name : {sellername}</p>
                    <div className="justify-end card-actions">
                        <label htmlFor="booking" className="text-white btn btn-primary" onClick={() => setBooking(product)}>Book this bus</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsOfCategory;