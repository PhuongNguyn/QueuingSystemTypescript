import './LoginLayout.css'
import { Outlet } from 'react-router-dom';


const LoginLayout:React.FC = () =>{
    return (
        <div className = "login-layout">
            <img src='/images/Logo-alta.png' alt = "logo-alta" id = "logo-alta-login"/>
            <div className = "login-layout__banner">
                
            </div> 
            <Outlet/>
        </div>
    )
}

export default LoginLayout;