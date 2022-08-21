import React from 'react';
import './TimeTable.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

function TimeTable1() {
  return (
    <Table striped align='center' class="dst1">
      <thead className='dsth1' align='center'>
        <tr align='center' height='30px'>
          <th width='200px'>Time</th>
          <th width='200px'>Event</th>
        </tr>
      </thead>
      <tbody>
        <tr align='center' className='dstr1'>
          <td>8.30am - 9.30am</td>
          <td>N/A</td>
        </tr>
        <tr align='center' className='dstr2'>
          <td>9.30am - 10.30am</td>
          <td>N/A</td>
        </tr>
        <tr align='center' className='dstr1'>
          <td>10.30am - 11.30am</td>
          <td>N/A</td>
        </tr>
        <tr align='center' className='dstr2'>
          <td>11.30am -12.30pm</td>
          <td>N/A</td>
        </tr>
        <tr align='center' className='dstr1'>
          <td>12.30pm - 1.30pm</td>
          <td>N/A</td>
        </tr>
        <tr align='center' className='dstr2'>
          <td>1.30pm - 2.30pm</td>
          <td>N/A</td>
        </tr>
        <tr align='center' className='dstr1'>
          <td>2.30pm - 3.30pm</td>
          <td>N/A</td>
        </tr>
        
       
      </tbody>
    </Table>
  );
}

export default TimeTable1;