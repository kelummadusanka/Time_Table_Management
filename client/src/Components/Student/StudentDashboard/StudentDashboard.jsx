import { Avatar, Box, Center, Divider, HStack, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import { Image } from '@chakra-ui/react'
import { AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { FaCamera  } from 'react-icons/fa';
import Clockapp from './digital_clock/Clockapp';
import { Route, Routes } from 'react-router-dom';
import Calendar from 'react-calendar'
import StripedRowExample from '../../Lecturer/Lecweeklysch/lecweekly';
import TimeTable1 from './TimeTable';
function StudentDashboard() {
  return (
    <div>
 
      <HStack spacing='24px' height={'auto'}>
        <VStack h={'calc(100vh)'} flex={1} borderBottom='8px' borderLeft='8px' borderBottomRadius={'lg'} borderBottomColor={'green.400'} borderLeftColor={'green.100'} bgGradient='linear(to-b, white, green.200)' >

          <Box padding={10} margin={10}>
          <Avatar size='2.5xl' name='Segun Adebayo' src='https://bit.ly/sage-adebayo'>
            <Box>
            <AvatarBadge boxSize='8.25em' bg='green' ><FaCamera size={'4em'}/></AvatarBadge>
            </Box>
            </Avatar>
          </Box>
          <Box h={'10'}></Box>

          <Box  borderRadius={'3xl'} width={'full'} fontFamily={'serif'} border='2px' textAlign={'center'}  margin='40' h={'10'} fontSize='25px' fontWeight={'semibold'} fontStyle='italic' textColor={'black'}>
            pabasara WMUW
          </Box>
          <Box width={'full'} border='2px' borderRadius={'3xl'} fontFamily={'serif'} textAlign={'center'}  margin='40' h={'10'} fontSize='25px' fontWeight={'semibold'} fontStyle='italic' textColor={'black'}>
            EG/2018/3403
          </Box> 
          <Box width={'full'} border='2px' borderRadius={'3xl'} fontFamily={'serif'} textAlign={'center'}  margin='40' h={'10'} fontSize='25px' fontWeight={'semibold'} fontStyle='italic' textColor={'black'}>
            pabasarauvindu98@gmail.com
          </Box>
          <Box>
            <Clockapp></Clockapp>
          </Box>
          <Box borderBottom='8px' borderLeft='8px' borderBottomRadius={'lg'} borderBottomColor={'blackAlpha.500'} borderLeftColor={'blackAlpha.500'} bgGradient='linear(to-b, white, blackAlpha.200)'>
            <Calendar ></Calendar>
          </Box>
        </VStack>
        <VStack h={'calc(100vh)'} flex={4} borderBottom='8px' borderLeft='8px' borderBottomRadius={'lg'} borderBottomColor={'yellow.400'} borderLeftColor={'yellow.100'} bgGradient='linear(to-b, white, yellow.200)' >
          <Routes>
            <Route>
            </Route>
          </Routes>
          <Box  borderRadius={'3xl'} width={'full'} fontFamily={'serif'} border='8px' borderColor={'yellow'} textAlign={'center'}  margin='5' h={'100'} fontSize='50px' fontWeight={'semibold'} fontStyle='initial' textColor={'black'}>
                2018/08/21 Sunday
          </Box>
          
            <TimeTable1></TimeTable1>
        </VStack>
      </HStack>
      </div>
  )
}

export default StudentDashboard