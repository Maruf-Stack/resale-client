import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';
import useToken from '../../hook/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext)
    const { google } = useContext(AuthContext)
    const [loginError, setLoginError] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [token] = useToken(userEmail)
    const location = useLocation()
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();


    useEffect(() => {
        const from = location.state?.from?.pathname || '/';
        if (token) {
            navigate(from, { replace: true });
        }
    }, [location.state?.from?.pathname, navigate, token])

    const handleLogin = data => {
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                setUserEmail(data.email)
                toast.success("Log in success")

            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });
    }
    const googleLogin = () => {
        google(googleProvider)
            .then(result => {
                const name = result.user.displayName;
                const email = result.user.email;
                const role = "user";
                const user = {
                    name, email, role
                }
                saveBuyerInfo(user)
                toast.success("Successfully log in")
                navigate('/')
            })
            .catch(error => {
                console.error(error)
                toast.error("Failed")
            })
    }
    const saveBuyerInfo = (user) => {
        const email = user.email

        fetch('https://resale-server-nine.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setUserEmail(email)

            })

    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl font-semibold text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="w-full max-w-xs form-control">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="w-full max-w-xs input input-bordered" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="w-full max-w-xs form-control">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="w-full max-w-xs input input-bordered" />
                        <label className="label"> <span className="label-text">Forget Password?</span></label>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='w-full btn btn-primary' value="Login" type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p>New to Doctors Portal <Link className='text-sky-500' to="/signup">Create new Account</Link></p>
                <div className="divider">OR</div>
                <button className='w-full btn btn-outline btn-primary' onClick={googleLogin}><FcGoogle className='mr-1'></FcGoogle>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;