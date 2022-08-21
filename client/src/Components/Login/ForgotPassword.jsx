import { chakra, omitThemingProps } from "@chakra-ui/react";
import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import { Toast } from "@chakra-ui/react";
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
    FormControl,
    FormLabel,
    Input,
    Stack,
    Checkbox,
    Button,
    FormErrorMessage,

    Select,

} from '@chakra-ui/react'

function ForgotPassword() {
    const [email, setEmail] = useState('')

    const onChange = e => {

    }

    const onSubmit = e => {
        e.preventDefault()
    }
    return (
        <Flex minHeight='75vh' width='full' align='center' justifyContent='center'>
        <div className="pageContainer">
            <Box
                borderWidth={1}
                px={40}
                width='230'
                maxWidth='800px'
                height='350'
                borderRadius={1}
                textAlign='left'
                boxShadow='lg'
                
            >
                
                    <Box p={4}>
                        <Box textAlign='center' height='70px'>
                            <Heading>Forgot Password</Heading>
                        </Box>
                    </Box>
                
                <main>
                    <form onSubmit={onSubmit} mt='6'>
                        <FormLabel mt='6'>Email</FormLabel>
                        <input
                            type='email'
                            className='emailInput'
                            placeholder='Enter your Email'
                            id='email'
                            value={email}
                            onChange={onChange}
                        />
                        <div className="container mt-2">
                        </div>


                    </form>
                    <form onSubmit={onSubmit} mt='6'>
                        <FormLabel mt='6'>Password</FormLabel>
                        <input
                            type='password'
                            className='passwordInput'
                            placeholder='Enter your New password'
                            id='password'
                            onChange={onChange}

                        />
                        <div className="container mt-2">
                        </div>
                        <Button variantColor="teal" width='full' mt={4} >Submit</Button>
                        <div mt={4}></div>
                    </form>
                </main>
            </Box>
        </div>
        </Flex>
    )
}

export default ForgotPassword;