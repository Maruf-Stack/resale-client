import React from 'react';

const Single = ({ category }) => {
    const { name, image } = category;
    return (
        <div>
            <div className="shadow-xl card card-compact w-96 bg-base-100">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="justify-end card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Single;