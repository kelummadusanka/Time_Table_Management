import React from 'react'
import './AdminCrudCard.css'
import Rome from '../AdminImages/rome.jpg'




function AdminCrudCard(Card) {
  return (
    <div className="grid-item">
        <div className="card">
          <img className="card-img" src={Card.Image} alt="Rome" />
          <div className="card-content">
            <h1 className="card-header">{Card.Header}</h1>
            <p className='card-text'>{Card.Text}</p>
          </div>
        </div>
        </div>
  )
}

export default AdminCrudCard