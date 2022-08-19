import { Box, HStack, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import { Image } from '@chakra-ui/react'
function StudentDashboard() {
  return (
    <div>
 
      <HStack spacing='24px' >
        <VStack h={'calc(100vh)'} bg={'yellow'} flex={1} bgGradient={[
    'linear(t-b, white.1000, yellow.30)',
  ]} >
          <div>
          <Image
            borderRadius='full'
            boxSize='150px'
            src='https://bit.ly/dan-abramov'
            alt='Dan Abramov'
            />
          </div>
        </VStack>
        <VStack h={'calc(100vh)'} flex={4} bg={'blue.600'}></VStack>
      </HStack>
      <HStack height={200} bg={'brown'}>
        </HStack>
      </div>
  )
}

export default StudentDashboard