
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import LoginPage from './pages/LoginPage'
import { AuthProvider } from './context/AuthContext'

function App() {
  // const [ isSignedIn, setIsSignedIn ] = useState(false)

  // const toogleSignIn = () => {
  //   setIsSignedIn(!isSignedIn)
  // }

  return (
    // <>
    //   <Navbar isSignedIn={isSignedIn} />
    //   <LoginPage isSignedIn={isSignedIn} toogleSignIn={toogleSignIn} />
    // </>

    <AuthProvider>
      <Navbar />
      <LoginPage />
    </AuthProvider>
  )
}

export default App
