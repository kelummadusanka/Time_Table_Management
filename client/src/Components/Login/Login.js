


import React from 'react'



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
  FormErrorMessage
} from '@chakra-ui/react'

const VARIANT_COLOR = 'teal';


const Login = () => {
  //  const { register, handleSubmit, formState: { errors } } = useForm(); 
    
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
      <Box textAlign='center'>
    <Heading>Login</Heading>
    {/* <Text>
      Or <Link color={`${VARIANT_COLOR}.500`}> trial</Link>
    </Text> */}
  </Box>
  <Box my={8} textAlign='left'>
    <form>

      <FormControl>
        <FormLabel>Username</FormLabel>
        <Input type='email' placeholder='Enter your username' />
        <div className="container mt-2">
      
    </div>
      </FormControl>
      <FormErrorMessage>(formik.errors.username)</FormErrorMessage>

      <FormControl mt={4}>
        <FormLabel>Password</FormLabel>
        <Input type='password' placeholder='Enter your password' />
      </FormControl>
      

      <Stack isInline justifyContent='space-between' mt={4}>
          <Box>
            <Checkbox>Remember Me</Checkbox>
          </Box>
          <Box>
            <Link color={`${VARIANT_COLOR}.400`}>Forgot your password?</Link>
          </Box>
      </Stack>

      <Button variantColor={VARIANT_COLOR}  width='full' mt={4}>Sign In</Button>
    </form>
  </Box>
      </Box>
    </Box>
  </Flex></>

  
  
  
  )
}




 export default Login;