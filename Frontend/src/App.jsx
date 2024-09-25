import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/style.css";

import "./charts/ChartjsConfig";

// Import pages
import Dashboard from "./pages/Dashboard";
import LoginForm from "./pages/LoginForm/LoginForm";
import HomePage from "../src/pages/HomePage/HomePage";
import JobPost from "../src/pages/JobPost/JobPost";
import JobGrid from "./pages/JobGrid/JobGrid";
import { DashboardHomePage } from "../src/pages/HomePage/DashboardHomePage";
import CompanyDesc from "./pages/CompanyDesc/CompanyDesc";
import TableData from "./pages/TableData/TableData";
import Studentinfo from "./pages/StudentDashboard/Studentinfo";
import Teacherinfo from "./components/TeacherInfo";
import PasswordChange from "./components/PasswordChange";
import AppliedJobsGrid from "./pages/AppliedJobs/AppliedJobs"
import { useAuth } from "./context/auth";
import { api } from "./client/api";
import { useAuthorize } from "./hooks/useAuthorize";
function App() {
  const { login } = useAuth();
  const location = useLocation();
  const { isAuthorize } = useAuthorize();
  async function fetcher() {
    const response = await api.get("/api/v1/user/self");
    if (response.data) {
      login(response.data);
    }
  }

  useEffect(() => {
    fetcher()
  }, [])

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/login" element={<LoginForm />} />

        <Route exact path="/dashboard" element={<Dashboard />}>
          <Route
            exact
            path="/dashboard/visionvoult"
            element={<DashboardHomePage />}
          />
          <Route exact path="/dashboard/job-post" element={<JobPost />} />
          <Route exact path="/dashboard/activejobs" element={<JobGrid />} />
          <Route
            path="/dashboard/activejobs/:id"
            element={<CompanyDesc />}
          />
          <Route exact path="/dashboard/studentdata" element={<TableData />} />
          <Route exact path="/dashboard/settings/account" element={isAuthorize ? <Teacherinfo /> : <Studentinfo />} />
          <Route exact path="/dashboard/settings/account/password" element={<PasswordChange />} />
          <Route exact path="/dashboard/settings/appliedjobs" element={<AppliedJobsGrid />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
