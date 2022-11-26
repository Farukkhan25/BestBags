import React, { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { getUserRole } from '../api/user';
import Sidebar from '../Components/Dashboard/Sidebar';
import Spinner from '../Components/Spinner/Spinner';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const DashboardLayout = () => {
const { user } = useContext(AuthContext);
const [role, setRole] = useState(null);
    const [loading, setLoading] = useState(true);

       useEffect(() => {
         getUserRole(user?.email)
           .then((data) => {
             setRole(data);
             setLoading(false);
           })
           .catch((er) => {
             setLoading(false);
           });
       }, [user]);
    return (
      <div className="md:flex relative min-h-screen">
        {loading ? (
          <Spinner></Spinner>
        ) : (
        <>
          <div>
            <Sidebar role={role}></Sidebar>
          </div>
          <div className="flex-1 md:ml-64">
            <div className="p-4">
              <Outlet />
            </div>
          </div>
        </>
        )}
      </div>
    );
};

export default DashboardLayout;