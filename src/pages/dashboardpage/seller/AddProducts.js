import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const AddProducts = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();


    const handleAddProducts = (data) => {




    }

    return (
        <div className='w-96 p-7'>
            <h2 className="text-4xl">Add A Doctor</h2>
            <form onSubmit={handleSubmit(handleAddProducts)}>
                <div className="w-full max-w-xs form-control">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="w-full max-w-xs input input-bordered" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="w-full max-w-xs form-control">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="email" {...register("email", {
                        required: true
                    })} className="w-full max-w-xs input input-bordered" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                <div className="w-full max-w-xs form-control">
                    <label className="label"> <span className="label-text">Specialty</span></label>
                    <select
                        {...register('specialty')}
                        className="w-full max-w-xs select input-bordered">
                        {/* {
                            specialties.map(specialty => <option
                                key={specialty._id}
                                value={specialty.name}
                            >{specialty.name}</option>)
                        } */}


                    </select>
                </div>
                <div className="w-full max-w-xs form-control">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="w-full max-w-xs input input-bordered" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                <input className='w-full mt-4 btn btn-primary' value="Add Product" type="submit" />
            </form>
        </div>
    );
};


export default AddProducts;