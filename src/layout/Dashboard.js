import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from '../hook/useAdmin';
import useSeller from '../hook/useSeller';
import Navbar from '../shared/navbar/Navbar'

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="flex flex-col drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="p-4 menu w-80 bg-base-100 text-base-content">

                        {

                            !isSeller & !isAdmin &&
                            <li><Link to='/dashboard'>My orders</Link></li>
                        }
                        {
                            isAdmin && <>
                                <li><Link to='/dashboard/users'>All Buyers</Link></li>
                                <li><Link to='/dashboard/sellers'>All Seller</Link></li>
                            </>

                        }
                        {
                            isSeller &&
                            <>
                                <li><Link to='/dashboard/sellers/myproducts'>My products</Link></li>
                                <li><Link to='/dashboard/sellers/addproducts'>Add Products</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;