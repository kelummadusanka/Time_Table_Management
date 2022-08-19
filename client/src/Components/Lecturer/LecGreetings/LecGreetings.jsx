import React from 'react';
import './LecGreetings.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import profile1 from './profile1.png';



function LecGreetings() {
  return (     
    <div>

        <p class="gr1">Hello Mr. Lecturer, Good Morning!</p>
        <img src={profile1} alt="profile image" className='grimg1'/>
        <br></br>
   

   
    </div>
    
  )
}

export default LecGreetings