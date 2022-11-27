import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import './navbar.css'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
        toast.success("Log out successfull")
    }
    const menu = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        {
            user?.uid ?
                <>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li><Link onClick={handleLogOut}>Sign out</Link></li>
                </> :
                <li><Link to="/login">Login</Link></li>
        }



    </>
    return (
        <div className='lg:p-6 nav'>
            <div className="flex justify-between navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label htmlFor='menu' tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 smmenu">
                            {
                                menu
                            }
                        </ul>
                    </div>
                    <Link to='/' className="text-2xl font-bold normal-case text-sky-400">Bus selling BD</Link>
                </div>
                <div className="hidden navbar-center lg:flex">
                    <ul className="p-0 font-semibold menu menu-horizontal lgmenu">
                        {
                            menu
                        }
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;