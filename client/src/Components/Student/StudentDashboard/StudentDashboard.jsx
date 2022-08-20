import { Box, HStack, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import { Image } from '@chakra-ui/react'
function StudentDashboard() {
  return (
    <div>
 
      <HStack spacing='24px' >
        <VStack h={'calc(100vh)'} flex={1} borderBottom='8px' borderLeft='8px' borderBottomRadius={'lg'} borderBottomColor={'green.400'} borderLeftColor={'green.100'} bgGradient='linear(to-b, white, green.200)' >
          <div>
          <Image
            border='8px'
            borderColor={'green.100'}
            borderRadius='full'
            boxSize='350px'
            src='https://bit.ly/dan-abramov'
            alt='Dan Abramov'
            />
          </div>
          <Box width={'full'} textAlign={'center'} border='2px' margin='40' h={'20'} fontSize='50px' fontWeight={'semibold'} fontStyle='italic' textColor={'blackAlpha.500'}>
            Uvindu pabasara
          </Box>
          <Box width={'full'} textAlign={'center'} border='2px' margin='40' h={'20'} fontSize='50px' fontWeight={'semibold'} fontStyle='italic' textColor={'blackAlpha.500'}>
            EG/2018/3403
          </Box>
        </VStack>
        <VStack h={'calc(100vh)'} flex={4} bg={'blue.600'}></VStack>
      </HStack>
      <HStack height={200} bg={'brown'}>
        </HStack>
      </div>
  )
}

export default StudentDashboard