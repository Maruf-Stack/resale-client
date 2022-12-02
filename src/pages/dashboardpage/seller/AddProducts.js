
// import { data } from 'autoprefixer';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
// import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const AddProducts = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const imgHostingKey = '486c62cd4804620f99bf01432d3e9e6d';
    const [image, setimg] = useState('')
    const handleAddProducts = data => {

        const img = data.img[0]
        const formdata = new FormData();
        formdata.append('img', img)
        const url = `https://api.imgbb.com/1/upload?key=${imgHostingKey}`;
        fetch(url, {
            method: 'POST',
            body: formdata
        })
            .then(res => res.json())
            .then(imgdata => {
                setimg(imgdata)
            })

        const name = data?.name;
        const price = data?.price;
        const condition = data?.condition;
        const phoneNumber = data?.phoneNumber;
        const location = data?.location;
        const category = data?.category;
        const describtion = data?.describtion;
        const used = data?.used;
        const email = user.email;
        const productDetail = {
            email,
            image,
            name,
            price,
            condition,
            phoneNumber,
            location,
            category,
            describtion,
            used,
        }
        fetch('https://resale-server-nine.vercel.app/myproducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(productDetail)
        })
            .then(res => res.json())
            .then(result => {
                toast.success('Product added')
                navigate('/dashboard/sellers/myproducts')
            })
    }

    return (
        <div className='w-96 p-7'>
            <h2 className="text-4xl font-semibold">Add a product</h2>
            <form onSubmit={handleSubmit(handleAddProducts)}>
                <div className="w-full max-w-xs form-control">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="w-full max-w-xs input input-bordered" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>

                <div className="w-full max-w-xs form-control">
                    <label className="label"> <span className="label-text">Price</span></label>
                    <input type="text" {...register("price", {
                        required: true
                    })} className="w-full max-w-xs input input-bordered" />
                </div>
                <div className="w-full max-w-xs form-control">
                    <label className="label"> <span className="label-text">Condition</span></label>
                    <input type="text" {...register("condition", {
                        required: true
                    })} className="w-full max-w-xs input input-bordered" />
                </div>
                <div className="w-full max-w-xs form-control">
                    <label className="label"> <span className="label-text">Phone number</span></label>
                    <input type="text" {...register("phone-number", {
                        required: true
                    })} className="w-full max-w-xs input input-bordered" />
                </div>
                <div className="w-full max-w-xs form-control">
                    <label className="label"> <span className="label-text">Location</span></label>
                    <input type="text" {...register("location", {
                        required: true
                    })} className="w-full max-w-xs input input-bordered" />
                </div>
                <div className="w-full max-w-xs form-control">
                    <label className="label"> <span className="label-text">Product category</span></label>
                    <input type="text" value='Bus' readOnly {...register("category", {
                        required: true
                    })} className="w-full max-w-xs input input-bordered" />
                </div>
                <div className="w-full max-w-xs form-control">
                    <label className="label"> <span className="label-text">Describtion</span></label>
                    <textarea name="" id="" cols="30" rows="5" {...register('describtion', { required: true })}></textarea>

                </div>
                <div className="w-full max-w-xs form-control">
                    <label className="label"> <span className="label-text">Year of use</span></label>
                    <input type="text" {...register("used", {
                        required: true
                    })} className="w-full max-w-xs input input-bordered" />
                </div>

                <div className="w-full max-w-xs form-control">
                    <label className="label"> <span className="label-text">Image of product</span></label>
                    <input type="file" {...register("img", {
                        required: "Name is Required"
                    })} className="w-full max-w-xs input input-bordered" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                <input className='w-full mt-4 btn btn-primary' value="Add Product" type="submit" />
            </form>
        </div>
    );
};


export default AddProducts;