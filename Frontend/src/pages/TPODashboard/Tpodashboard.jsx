import React, { useState, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";

import Banner from "../partials/Banner";
import Tposidebar from "../partials/Tposidebar";

function Tpodashboard() {
  return (
    <div className="w-full">
      <Tposidebar />

      <div>
        <main className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto p-8">
          <Outlet />
        </main>
        <Banner />
      </div>
    </div>
  );
}

export default Tpodashboard;
