// import React from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import { useState, useEffect } from "react";

// function Login() { 
//     const initialValues = { username: "", email: "", password: "" }; 
//     const [formValues, setFormValues] = useState(initialValues); 
//     const [formErrors, setFormErrors] = useState({}); 
//     const [isSubmit, setIsSubmit] = useState(false); 

//     const handleChange = (e) => { 
//         const { name, value } = e.target; 
//         setFormValues({ ...formValues, [name]: value }); 
//     };
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setFormErrors(validate(formValues)); 
//         setIsSubmit(true); 
//     }; 
//     useEffect(() => { 
//         console.log(formErrors); 
//         if (Object.keys(formErrors).length === 0 && isSubmit) {
//             console.log(formValues); 
//         } 
//     }, [formErrors]); 
//     const validate = (values) => { 
//         const errors = {}; 
//         const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i; 
//         if (!values.username) { 
//             errors.username = "Username is required!"; 
//         } 
//         if (!values.email) { errors.email = "Email is required!"; 
//         } else if (!regex.test(values.email)) {
//             errors.email = "This is not a valid email format!"; } 
//         if (!values.password) { 
//             errors.password = "Password is required"; 
//         } else if (values.password.length < 4) { 
//             errors.password = "Password must be more than 4 characters"; 
//         } else if (values.password.length > 10) { 
//             errors.password = "Password cannot exceed more than 10 characters"; 
//         } 
//         return errors; 
//     }; 
//     return ( 
//     <div className="container"> 
//     {/* {Object.keys(formErrors).length === 0 && isSubmit ?(
//          <div className="ui message success">Signed in successfully</div> 
//          ) : (
//              <pre>{JSON.stringify(formValues, undefined, 2)}</pre> 
//              )
//              }  */}
//              <Form onSubmit={handleSubmit}> 
//              <Form.Group size="lg" controlId="username" >
//              <Form.Label>Username</Form.Label>
//           <Form.Control
//             autoFocus
//             type="username"
//             value={Text}
//             onChange={(e) => setusername(e.target.value)}
//           />
//              </Form.Group>
//              <h1>LOGIN</h1> 
//              <div className="ui divider"></div> 
//              <div className="ui form"> 
//              <div className="field"></div> 
//                 <div>
//                     <label>Username</label>
//                             <input
//                                     type="text"
//                                     name="username"
//                                     placeholder="Username"
//                                     value={formValues.username}
//                                     onChange={handleChange}
//                                 />
//                 </div>
//                 <div>
//                     <label>Password</label>
//                         <input
//                                 type="password"
//                                 name="password"
//                                 placeholder="Password"
//                                 value={formValues.password}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                     <button className="fluid ui button blue">Login</button>
                    
//                 </div>
//             </Form>
//         </div>
//     ); 
// }

// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import "./Login.css";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function validateForm() {
//     return email.length > 0 && password.length > 0;
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//   }

//   return (
//     <div className="Login">
//       <Form onSubmit={handleSubmit}>
//         <Form.Group size="lg" controlId="email">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             autoFocus
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group size="lg" controlId="password">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Form.Group>
//         <Button block="true" size="lg" type="submit" disabled={!validateForm()}>
//           Login
//         </Button>
//       </Form>
//     </div>
//   );
// }


import React from 'react'
import { useForm } from "react-hook-form";
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
  Button
} from '@chakra-ui/react'

const VARIANT_COLOR = 'teal'


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm(); 
  return (
    <><Flex minHeight='100vh' width='full' align='center' justifyContent='center'>
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
        {/* {...register("firstname", { required: true })} */}
      </FormControl>
      

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