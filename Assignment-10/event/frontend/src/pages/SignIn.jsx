import axios from 'axios'
import React, { useState } from 'react'
import { API } from '../util/constants'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
    const { login } = useAuth()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async(e) => {
        e.preventDefault()
        setLoading(true)
        setMessage("")
        try {
            console.log(email, password)
            let data = await axios.post(`${API}/users/login`, {email, password})
            console.log(data)
            login(data.data)
            setEmail("")
            setPassword("")
            navigate("/")
        } catch (error) {
            setMessage("Invalid Credentials")
        }
        setLoading(false)
    }

    return (
        <div className="row">
            <div className="col-md-6 mx-auto">
                <div className="card">
                    <div className="card-header">
                        <h3>Login In Here</h3>
                        <p>{message}</p>
                    </div>
                    <div className="card-body">
                        <form method="post" onSubmit={handleSubmit}>
                            <input
                                type="email"
                                className="form-control mb-2"
                                placeholder="Email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                            <input
                                type="password"
                                className="form-control mb-2"
                                placeholder="Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                            {!loading && (
                                <input
                                    type="submit"
                                    value="Sign In"
                                    className="btn btn-primary"
                                />
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn
