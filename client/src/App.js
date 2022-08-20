import "./App.css";
import React from "react";
import Login from "./Components/Login/Login";
import LecDashboard from "./Components/Lecturer/LecDashboard/LecDashboard";
import StudentDashboard from "./Components/Student/StudentDashboard/StudentDashboard";
import AdminPanel from "./Components/Admin/AdminPanel";
import Nav from "./Components/Nav/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Heading } from "@chakra-ui/react";
import {Center,Square,Circle} from "@chakra-ui/react";


function App() {
  return (
    <div className="main-container">
      <div className="NavBar-content"><Nav/></div>
      <div className="content">

      <div className="horizontal-raw">
       
      <Center h='100px' fontSize='35px' color={"teal"} width='full'>
         <b>TIMETABLE MANAGEMENT SYSTEM</b>
         <image box/>
     </Center>
       
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
