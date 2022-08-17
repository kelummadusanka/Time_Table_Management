import "./App.css";
import React from "react";
import Login from "./Components/Login/Login";
import LecDashboard from "./Components/Lecturer/LecDashboard/LecDashboard";
import StudentDashboard from "./Components/Student/StudentDashboard/StudentDashboard";
import AdminPanel from "./Components/Admin/AdminPanel";
import Nav from "./Components/Nav/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="main-container">
      <div className="NavBar-content"><Nav/></div>
      <div className="content">

      <div className="horizontal-raw">
        horizontal raw goes to here
      </div>
      <div className="main-content">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/LecDashboard" element={<LecDashboard />} />
          <Route path="/StudentDashboard" element={<StudentDashboard />} />
          <Route path="/AdminDashboard/*" element={<AdminPanel />} />
        </Routes>
      </BrowserRouter>
      </div>
      </div>
    </div>
  );
}

export default App;
