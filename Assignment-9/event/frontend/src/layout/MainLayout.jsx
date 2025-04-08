import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <>
        <Navbar />
        <div className="container my-3">
            <Outlet />
        </div>
    </>
  )
}

export default MainLayout