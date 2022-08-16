import React from 'react'
import './AdminCrudCards.css'
import AdminCrudCard from '../AdminCrudCard/AdminCrudCard'

const Data =[
  {
    "Image":"F:\Fifth Semester 2021\Software project\Time_Table_Management\client\src\Components\Admin\AdminImages\grand-canyon.jpg",
    "Header":"Time table Mangement",
    "Text":"| manage all Time table from here!"
  },
  {
    "Image":"F:\Fifth Semester 2021\Software project\Time_Table_Management\client\src\Components\Admin\AdminImages\grand-canyon.jpg",
    "Header":"Lectures Mangement",
    "Text":"| manage Lectures!"
  },
  {
    "Image":"F:\Fifth Semester 2021\Software project\Time_Table_Management\client\src\Components\Admin\AdminImages\grand-canyon.jpg",
    "Header":"Student Mangement",
    "Text":"| manage Students!"
  }
]

function AdminCrudCards() {
  return (
    <div className='CardsContainer'>
      {Data.map((Card,key) =>{

        return(
        <AdminCrudCard key={key} Text={Card.Text} Header = {Card.Header} Image = {Card.Image}/>)

      })}
           
      </div>
  )
}

export default AdminCrudCards