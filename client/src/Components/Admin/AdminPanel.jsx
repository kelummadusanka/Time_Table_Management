import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import LectMngmt from "./LectMngmt/LectMngmt";

function AdminPanel() {
  return (
        <Routes>
          <Route exact path="/" element={<AdminDashboard />} />
          <Route path="/LectMngmt" element={<LectMngmt />} />
        </Routes>

  );
}

export default AdminPanel;
