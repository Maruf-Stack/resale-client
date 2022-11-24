import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center red'>Login</h2>
                <form >
                    <div className="w-full max-w-xs form-control">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text"

                            className="w-full max-w-xs input input-bordered" />

                    </div>
                    <div className="w-full max-w-xs form-control">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"

                            className="w-full max-w-xs input input-bordered" />
                        <label className="label"> <span className="label-text">Forget Password?</span></label>

                    </div>
                    <input className='w-full btn btn-accent' value="Login" type="submit" />
                    <div>

                    </div>
                </form>
                <p>Dont have an account? <Link className='text-secondary' to="/signup">Create a new Account</Link></p>
                <div className="divider">OR</div>
                <button className='w-full btn btn-outline'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;