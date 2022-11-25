import React from 'react';

const DetailsOfCategory = ({ product }) => {
    const { name, image, location, originalprice, posttime, resaleprice, sellername, varified, yearsofuse } = product;
    return (
        <div>
            <div className="card lg:card-side shadow-xl mb-10 lg:mx-20">
                <figure><img src={image} alt="Album" className='w-64' /></figure>
                <div className="card-body">
                    <h2 className="card-title text-sky-500">{name}</h2>
                    <p>Location : {location}</p>
                    <p>Price : {resaleprice}</p>
                    <p>Original price : {originalprice}</p>
                    <p>Used :{yearsofuse} Years</p>
                    <p>Post time : {posttime}</p>
                    <p className='text-black font-semibold'>Seller name : {sellername}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Book now!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsOfCategory;