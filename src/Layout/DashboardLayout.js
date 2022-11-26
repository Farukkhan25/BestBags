import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Dashboard/Sidebar';
import Spinner from '../Components/Spinner/Spinner';

const DashboardLayout = () => {

    const [loading, setLoading] = useState(true);

    return (
      <div className="md:flex relative min-h-screen">
        {/* {loading ? (
          <Spinner></Spinner>
        ) : ( */}
          <>
            <div>
              <Sidebar role=""></Sidebar>
            </div>
            <div className="flex-1 md:ml-64">
              <div className="p-4">
                <Outlet />
              </div>
            </div>
          </>
            )
        {/* } */}
      </div>
    );
};

export default DashboardLayout;