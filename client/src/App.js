import './App.css';
import React from 'react';
import Login from './Components/Login/Login';
import LecDashboard from './Components/Lecturer/LecDashboard/LecDashboard';
import StudentDashboard from './Components/Student/StudentDashboard/StudentDashboard';
import AdminDashboard from './Components/Admin/AdminDashboard/AdminDashboard';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}>
        <Route path="LecDashboard" element={<LecDashboard />} />
        <Route path="StudentDashboard" element={<StudentDashboard />} />
        <Route path="AdminDashboard" element={<AdminDashboard />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
