import React from 'react'
import { useAuth } from '../context/AuthContext'

// const LoginForm = ({ isSignedIn, toogleSignIn }) => {
//   return (
//     <div style={{marginTop: "100px"}}>
//         <h1>Login Form</h1>

//         <button onClick={toogleSignIn}>
//             { isSignedIn ? "Log Out" : "Log In" }
//         </button>
//     </div>
//   )
// }

const LoginForm = () => {
    const { isSignedIn, toogleSignIn } = useAuth()
    return (
      <div style={{marginTop: "100px"}}>
          <h1>Login Form</h1>
          
          <button onClick={toogleSignIn}>
              { isSignedIn ? "Log Out" : "Log In" }
          </button>
      </div>
    )
  }

export default LoginForm