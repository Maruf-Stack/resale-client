import React from 'react';

const Modal = ({ booking }) => {
    const { name } = booking
    return (
        <>
            <input type="checkbox" id="booking" className="modal-toggle" />
            <div className="modal">
                <div className="relative modal-box">
                    <label htmlFor="booking" className="absolute btn btn-sm btn-circle right-2 top-2">✕</label>
                    <h3 className="mb-2 text-lg font-bold">{name}</h3>
                    <form action="" className='grid grid-cols-1 gap-2'>
                        <input type="text" placeholder="Type here" className="w-full input input-bordered input-primary" />
                        <input type="text" placeholder="Type here" className="w-full input input-bordered input-primary" />
                        <input type="text" placeholder="Type here" className="w-full input input-bordered input-primary" />
                        <input type="text" placeholder="Type here" className="w-full input input-bordered input-primary" />
                        <input type="text" placeholder="Type here" className="w-full input input-bordered input-primary" />
                        <input type="text" placeholder="Type here" className="w-full input input-bordered input-primary" />
                        <input type="submit" className="w-full btn btn-primary" />

                    </form>
                </div>
            </div>
        </>
    );
};

export default Modal;