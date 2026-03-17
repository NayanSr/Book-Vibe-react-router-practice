import { Outlet } from "react-router"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Header/Navbar"

const Root = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col min-h-screen">
        <Navbar/>
        <span className="flex-1 bg-gray-300"><Outlet/></span>
        <Footer/>
    </div>
  )
}

export default Root