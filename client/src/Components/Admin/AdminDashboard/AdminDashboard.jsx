import React from 'react'
import AdminCrudCards from '../AdminCrudCards/AdminCrudCards'
import { Heading } from '@chakra-ui/react'
import AdminUpcommingItem from '../AdminUpComEvents/AdminUpcommingItem'

function AdminDashboard() {
  return (
    <div>
      <div><AdminCrudCards/></div>
      <Heading size='lg' fontSize='50px' mt={10}>Upcomming Events </Heading>
      <AdminUpcommingItem/>

    </div>

  )
}

export default AdminDashboard