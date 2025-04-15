import axios from 'axios'
import React, { useRef, useState } from 'react'
import { API } from '../util/constants'

const SignUp = () => {

    const [message, setMessage] = useState(null)
    const [loading, setLoading] = useState(false)

    const nameRaf = useRef()
    const mobileRaf = useRef()
    const emailRaf = useRef()
    const passwordRaf = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        let name = nameRaf.current.value
        let mobile = mobileRaf.current.value
        let email = emailRaf.current.value
        let password = passwordRaf.current.value

        try {
            let user = await axios.post(`${API}/users`, {name, mobile, email, password})
            setMessage("Account Created")
            nameRaf.current.value = ""
            mobileRaf.current.value = ""
            emailRaf.current.value = ""
            passwordRaf.current.value = ""
        } catch (error) {
            if(error.status == 400){
                setMessage("Check email and mobile, and try again")
            } else {
                setMessage("Something Wrong")
            }
        }
        setLoading(false)
    }

  return (
    <div className='row'>
        <div className="col-md-6 mx-auto">
            <div className="card">
                <div className="card-header">
                    <h3>Create an Account</h3>
                    <p>{message}</p>
                </div>
                <div className="card-body">
                    <form method="post" onSubmit={handleSubmit}>
                        <input ref={nameRaf} type='text' className='form-control mb-2' placeholder='Name' required /> 
                        <input ref={mobileRaf} type='text' className='form-control mb-2' placeholder='Mobile' required /> 
                        <input ref={emailRaf} type='email' className='form-control mb-2' placeholder='Email' required /> 
                        <input ref={passwordRaf} type='password' className='form-control mb-2' placeholder='Password' required /> 
                        {
                            !loading && <input type='submit' value="Sign Up" className='btn btn-primary' />
                        }
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp