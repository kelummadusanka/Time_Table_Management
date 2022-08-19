import React from 'react'
import './AdminUpcommingBubble.css'
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

function AdminUpcommingBubble() {
  return (
         <div className="MA-History">
         <table className="MA-history-table">
           <tbody>
                 <tr >
                   <td>props.Date</td>
                   <td>props.Time</td>
                   <td>props.Description</td>
                   <td>props.Place</td>
                   <td>props.</td>
                   <td>
                   <FaBeer />
                   </td>
                 </tr>
            
             
           </tbody>
         </table>
       </div>
  )
}

export default AdminUpcommingBubble