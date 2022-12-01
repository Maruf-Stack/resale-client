import { data } from 'autoprefixer';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useToken from '../../hook/useToken';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext)
    const [signUpError, setSignUPError] = useState('')
    const navigate = useNavigate();
    const [createdEmail, setCreatedEmail] = useState('')
    const [token] = useToken(createdEmail)

    useEffect(() => {
        if (token) {
            navigate('/')
        }
    }, [navigate, token])

    const handleSignUp = (data) => {
        setSignUPError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                toast.success('User Created Successfully')
                const userInfo = {
                    displayName: data.name
                }

                updateUser(userInfo)
                    .then(() => {
                        saveBuyerInfo(data.name, data.email, data.role, data.password)
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
    }
    const saveBuyerInfo = (name, email, role, password) => {
        const user = { name, email, role, password }

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedEmail(email)

            })

    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl font-semibold text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
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
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters long" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                        })} className="w-full max-w-xs input input-bordered" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <div className='mt-3'>
                        <label htmlFor='role' className='text-sky-500'>Create accout as a :  </label>
                        <select className='w-full max-w-xs select select-primary' name="role" id="role" {...register("role", {

                        })}>
                            <option value="user" className='text-black'>User</option>
                            <option value="seller" className='text-black'>Seller</option>

                        </select>
                    </div>
                    <input className='w-full mt-4 btn btn-primary' value="Sign Up" type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p>Already have an account?<Link className='text-sky-500' to="/login">Please Login</Link></p>
                <div className="divider">OR</div>
                <button className='w-full btn btn-outline btn-primary'><FcGoogle className='mr-1'></FcGoogle> CONTINUE WITH GOOGLE</button>

            </div>
        </div>
    );
};

export default SignUp;