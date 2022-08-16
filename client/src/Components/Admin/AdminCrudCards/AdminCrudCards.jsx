import React from 'react'
import './AdminCrudCards.css'
import AdminCrudCard from '../AdminCrudCard/AdminCrudCard'

function AdminCrudCards() {
  return (
    <div className='CardsContainer'>
      
      <AdminCrudCard/>
      <AdminCrudCard/>
      <AdminCrudCard/> 
      <AdminCrudCard/>       
      </div>
  )
}

export default AdminCrudCards