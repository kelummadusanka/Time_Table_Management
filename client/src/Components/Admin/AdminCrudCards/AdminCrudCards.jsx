import React from 'react'
import './AdminCrudCards.css'
import AdminCrudCard from '../AdminCrudCard/AdminCrudCard'

const Data =[
  {
    "Image":"https://tse1.mm.bing.net/th?id=OIP.4gStO5va3hDspPBEapeQ4QHaEv&pid=Api&P=0",
    "Header":"Time table Mangement",
    "Text":"| manage all Time table from here!"
  },
  {
    "Image":"F:\Fifth Semester 2021\Software project\Time_Table_Management\client\src\Components\Admin\AdminImages\grand-canyon.jpg",
    "Header":"Lectures Mangement",
    "Text":"| manage Lectures!"
  },
  {
    "Image":"https://images.search.yahoo.com/images/view;_ylt=AwrNY0pstPtia2oq7s6JzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzkwMzI5ZDdlM2M2NDc1ZGMzYWVjNjMyYzcxYmVjNjQ0BGdwb3MDMjQEaXQDYmluZw--?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dstudent%2Bimage%26type%3DE210US885G91649%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D24&w=1750&h=1122&imgurl=cdn.ila-france.com%2Fwp-content%2Fuploads%2F2015%2F02%2Four-students.jpg&rurl=https%3A%2F%2Fwww.ila-france.com%2Ffrench-language-students&size=70.7KB&p=student+image&oid=90329d7e3c6475dc3aec632c71bec644&fr2=piv-web&fr=mcafee&tt=Our+Students+%7C+ILA+French+Language+School+in+France&b=0&ni=21&no=24&ts=&tab=organic&sigr=_LXiiaMnQUUX&sigb=zVr84e9cbMyH&sigi=NoKI23UjeYzR&sigt=Ko3G8HRYac1s&.crumb=a9e6zTmAa5w&fr=mcafee&fr2=piv-web&type=E210US885G91649",
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