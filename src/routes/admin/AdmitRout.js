import React, { useContext, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useAdmin from '../../hook/useAdmin';
import Loading from '../../shared/loading/Loading';

const AdminRout = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isloading] = useAdmin(user?.email)

    const location = useLocation();

    if (loading || isloading) {
        return <Loading></Loading>
    }

    if (user && isAdmin) {
        return children;
    }
    return (
        <Navigate to="/login" state={{ from: location }} replace></Navigate>
    );
};

export default AdminRout;