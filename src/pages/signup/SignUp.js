import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form >
                    <div className="w-full max-w-xs form-control">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" className="w-full max-w-xs input input-bordered" />

                    </div>
                    <div className="w-full max-w-xs form-control">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" className="w-full max-w-xs input input-bordered" />

                    </div>
                    <div className="w-full max-w-xs form-control">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" className="w-full max-w-xs input input-bordered" />

                    </div>
                    <input className='w-full mt-4 btn btn-accent' value="Sign Up" type="submit" />

                </form>
                <p>Already have an account? <Link className='text-secondary' to="/login">Please Login</Link></p>
                <div className="divider">OR</div>
                <button className='w-full btn btn-outline'>CONTINUE WITH GOOGLE</button>

            </div>
        </div>
    );
};

export default SignUp;