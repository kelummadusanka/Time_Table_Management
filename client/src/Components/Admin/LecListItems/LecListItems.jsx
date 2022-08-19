import React from 'react'
import './LecListItems.css'

const Lectures = [
  {
    "RegNo" : "RUH200",
    "LecName" : "Dr.Senavirathne Chatura",
    "Deparatment" : "Dr. Electrical and inforamtion",
    "Phone" : "+94719625632",
    "Email" : "senavirathnechatura@ruh.eng.ac.lk",

  },
  {
    "RegNo" : "RUH1205",
    "LecName" : "Dr.Senavirathne Chatura",
    "Deparatment" : "Dr. Electrical and inforamtion",
    "Phone" : "+94719625632",
    "Email" : "senavirathnechatura@ruh.eng.ac.lk",

  },
  {
    "RegNo" : "RUH1205",
    "LecName" : "Dr.Senavirathne Chatura",
    "Deparatment" : "Dr. Electrical and inforamtion",
    "Phone" : "+94719625632",
    "Email" : "senavirathnechatura@ruh.eng.ac.lk",

  },
  {
    "RegNo" : "RUH1205",
    "LecName" : "Dr.Senavirathne Chatura",
    "Deparatment" : "Dr. Electrical and inforamtion",
    "Phone" : "+94719625632",
    "Email" : "senavirathnechatura@ruh.eng.ac.lk",

  },
]


function LecListItems({SearchString}) {
  return (
    
    <table className="Lec-table">
    <thead>
      <tr>
        <th>Reg. No.</th>
        <th>Name</th>
        <th>Department</th>
        <th>Phone Number</th>
        <th>Email</th>
        <th>Icon</th>
      </tr>
    </thead>

    <tbody>
      {Lectures.filter((item) => {
        if (SearchString == "") {
          return item;
        } else if (
          item.Email.toString().toLowerCase().match(SearchString) ||
          item.Phone.toString().toLowerCase().match(SearchString) ||
          item.LecName.toString().toLowerCase().match(SearchString) ||
          item.Deparatment.toString().toLowerCase().match(SearchString) ||
          item.RegNo.toString().toLowerCase().match(SearchString)
        ) {
          return item;
        }
      }).map((Lecture, key) => {
        return (
          <tr key={key}>
            <td>{Lecture.RegNo}</td>
            <td>{Lecture.LecName}</td>
            <td>{Lecture.Deparatment}</td>
            <td>{Lecture.Phone}</td>
            <td>{Lecture.Email}</td>
            <td>Place an icon</td>
          </tr>
        );
      })}
    </tbody>
  </table>
  )
}

export default LecListItems