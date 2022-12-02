import { data } from 'autoprefixer';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';

const Modal = ({ booking, product, setBooking }) => {
    const { user } = useContext(AuthContext)
    const { resaleprice } = product
    const { name } = booking;

    const handleBooking = event => {
        event.preventDefault()
        const form = event.target;
        const userName = form.userName.value;
        const email = form.email.value;
        const brandName = form.brandName.value;
        const price = form.price.value;
        const number = form.number.value;
        const location = form.location.value;
        const booking = {
            userName,
            email,
            brandName,
            price,
            number,
            location,
            img: product.image

        }

        fetch('https://resale-server-nine.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                setBooking(null)
                toast.success('Booking successfull')
            })

    }

    return (
        <>
            <input type="checkbox" id="booking" className="modal-toggle" />
            <div className="modal">
                <div className="relative modal-box">
                    <label htmlFor="booking" className="absolute btn btn-sm btn-circle right-2 top-2">✕</label>
                    <h3 className="mb-2 text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} action="" className='grid grid-cols-1 gap-2'>
                        <input name='userName' type="text" placeholder="Type here" readOnly value={user?.displayName} className="w-full input input-bordered input-primary" />
                        <input name='email' type="text" placeholder="Type here" readOnly value={user?.email} className="w-full input input-bordered input-primary" />
                        <input name='brandName' type="text" placeholder="Type here" readOnly value={name} className="w-full input input-bordered input-primary" />
                        <input name='price' type="text" placeholder="Type here" readOnly value={resaleprice} className="w-full input input-bordered input-primary" />
                        <input name='number' type="text" placeholder="phone number" className="w-full input input-bordered input-primary" />
                        <input name='location' type="text" placeholder="meeting location" className="w-full input input-bordered input-primary" />
                        <input type="submit" className="w-full btn btn-primary" />

                    </form>

                </div>
            </div>
        </>
    );
};

export default Modal;