import './MainLayout.css'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'

const MainLayout:React.FC = () =>{
    return (
        <div className = "main-layout">
            <div className = "main-layout-wrapper">
                <div className = "main-layout-navbar">
                    <Navbar/>
                </div>
                <div className = "main-layout-main-content">
                    <Header/>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default MainLayout