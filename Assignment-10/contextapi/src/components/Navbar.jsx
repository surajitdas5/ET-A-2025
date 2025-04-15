import React from 'react'
import { useAuth } from '../context/AuthContext'

// const Navbar = ({ isSignedIn }) => {
//   return (
//     <div>
//         Navbar
//         {
//          isSignedIn &&  <span> - Welcome John </span>
//         }
//     </div>
//   )
// }

const Navbar = () => {
    const { isSignedIn } = useAuth()
    return (
      <div>
          Navbar
          {
           isSignedIn &&  <span> - Welcome John </span>
          }
      </div>
    )
  }

export default Navbar