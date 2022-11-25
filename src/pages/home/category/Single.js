import React from 'react';
import { Link } from 'react-router-dom';

const Single = ({ category }) => {
    const { name, image, _id } = category;
    return (
        <div>
            <div className="mx-auto shadow-xl card card-compact w-96">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="justify-start card-actions">
                        <Link to={`/categories/${_id}`}><button className="btn btn-primary">Buy Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Single;