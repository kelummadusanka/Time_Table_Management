import React from 'react'
import './AdminUpcommingBubble.css'
function AdminUpcommingBubble(props) {
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
                    delete icon
                   </td>
                 </tr>
            
             
           </tbody>
         </table>
       </div>
  )
}

export default AdminUpcommingBubble