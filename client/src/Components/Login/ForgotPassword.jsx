import { chakra, omitThemingProps } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Toast } from "@chakra-ui/react";


function ForgotPassword(){
    const [email,setEmail]=useState('')

    const onChange =e =>{

    }

    const onSubmit =e =>{
        e.preventDefault()
    }
    return(
        <div className="pageContainer">
            <header>
                <p className="pageHeader">Forgot Password</p>
            </header>
            <main>
                <form onSubmit={onSubmit}>
                    <input
                    type='email' 
                    className='emailInput'
                    placeholder='Enter your Email'
                    id='email'
                    value={email}
                    onChange={onChange}

                    />
                </form>
            </main>
        </div>
    )
}

export default ForgotPassword;