

import { useHistory} from "react-router-dom"
import React from 'react'
import  { useState } from "react";
import './ForgotPassword'


import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
  Box,
  Flex,
  IconButton,
  useColorMode,
  Heading,
  Text,
  Link,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Checkbox,
  Button,
  FormErrorMessage,

  Select,

} from '@chakra-ui/react'
function Login() {
const VARIANT_COLOR = 'teal';


  //  const { register, handleSubmit, formState: { errors } } = useForm(); 

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = event => {
    event.preventDefault();
    alert(`Username: ${username} & Password: ${password}`);
  };

  return (

    <><Flex minHeight='80vh' width='full' align='center' justifyContent='center'>
    <Box
      borderWidth={1}
      px={4}
      width='full'
      maxWidth='500px'
      borderRadius={4}
      textAlign='center'
      boxShadow='lg'
    >
      <Box p={4}>
        <Box textAlign='center' height='70px'>
          <Heading>Login</Heading>
          {/* { <Text>
    Or <Link color={`${VARIANT_COLOR}.500`}> trial</Link>
  </Text> } */}
        </Box>
        <Box my={8} textAlign='left'>
          <form onSubmit={handleSubmit}>

            <FormControl isRequired>
              <FormLabel>Username</FormLabel>
              <Input type='email' placeholder='Enter your username' />
              <div className="container mt-2">

              </div>
            </FormControl>


            <FormControl isRequired mt={4}>
              <FormLabel>Password</FormLabel>
              <Input type='password' placeholder='Enter your password' 
              onChange={event => setPassword(event.currentTarget.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>User type</FormLabel>
            </FormControl>

            <Select placeholder='Select category' mt={4}>
              <option value='option1'>Admin</option>
              <option value='option2'>Lecturer</option>
              <option value='option3'>Student</option>
            </Select>

            <Stack isInline justifyContent='space-between' mt={4}>
              <Box>
                <Checkbox>Remember Me</Checkbox>
              </Box>
              <Box>
                <Link href='/ForgotPassword'color={`${VARIANT_COLOR}.400` }>Forgot your password?</Link>
              </Box>
            </Stack>

            <Button variantColor="teal" width='full' mt={4} >Sign In</Button>
          </form>
        </Box>
      </Box>
    </Box>
  </Flex></>




  )
}




export default Login;