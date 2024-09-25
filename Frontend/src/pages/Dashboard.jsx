import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import Banner from "../partials/Banner";

import { useAuth } from "../context/auth.jsx";
import { Navigate } from "react-router-dom";

function Dashboard() {
  const { user } = useAuth();
  console.log(user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          <Outlet />
        </main>
        <Banner />
      </div>
    </div>
  );
}

export default Dashboard;
