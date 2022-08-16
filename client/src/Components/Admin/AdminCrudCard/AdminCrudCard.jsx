import React from 'react'
import './AdminCrudCard.css'
import Rome from '../AdminImages/rome.jpg'

function AdminCrudCard() {
  return (
    <div className="grid-item">
        <div className="card">
          <img className="card-img" src={Rome} alt="Rome" />
          <div className="card-content">
            <h1 className="card-header">Time Table Management</h1>
            <p className='card-text'>| manage all Time table from here!</p>
          </div>
        </div>
        </div>
  )
}

export default AdminCrudCard