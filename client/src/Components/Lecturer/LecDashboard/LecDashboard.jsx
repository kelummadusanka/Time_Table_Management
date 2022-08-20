import React from "react";
import './LecDashboard.css';
import LecGreetings from "../LecGreetings/LecGreetings.jsx";
import Lecupcomevents from "../Lecupcomevents/Lecupcomevents.jsx";
import Lecdailysch from "../Lecdailysch/Lecdailysch.jsx";
import Lecweeklysch from "../Lecweeklysch/lecweekly.jsx";
import Lecsch from "../Lecsch/lecsch.jsx";
import Lecschweek from "../Lecschweek/Lecschweek.jsx";
import LecUce from "../LecUce/uce.jsx";


function LecDashboard(){
    return(
        <div>
           
            <LecGreetings />
            <Lecsch/>
            <Lecdailysch />
            <Lecschweek />
            
            <Lecweeklysch />
            <LecUce />
            <Lecupcomevents />
            
         </div>
    )

}
export default LecDashboard;
