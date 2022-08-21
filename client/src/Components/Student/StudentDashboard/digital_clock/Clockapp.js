
import { useState } from 'react';
import './Clockapp.css';
import { Clock } from './Clock';
import { Countdown } from './Countdown';

function Clockapp() {

  const [message, setMessage] = useState(null);

  return (
    <>
      <Clock />
      <Countdown event={e=>setMessage()}/>
      {
        message && (
          <div className='message'>
            {message}
          </div>
        )
      }
    </>
  );
}

export default Clockapp;
