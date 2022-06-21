import './Login.css'
import { useState } from 'react'
import {FiEyeOff, FiAlertCircle} from 'react-icons/fi'

const Login:React.FC = () =>{
    const [passwordInputType, setPasswordInputType] = useState<string>('password')
    const [err, setErr] = useState<string>('a')
    let styleInputErr:{border: string} = err ? {border: '1.5px solid #E73F3F'} : {border: ''}
    return (
        <div className = "login-page">
            <div className = "login-page__banner">
                <img src='/images/login-banner.png' alt='login-banner' id = "login-banner"/>
                <div className = "login-page__title">
                    <h1 className = "login-page__title--small">Hệ thống</h1>
                    <h1 className = "login-page__title--big">QUẢN LÝ XẾP HÀNG</h1>
                </div>
                <div className = "login-page__login-box">
                    <div className = "login-page__login-box-username">
                        <p className = "login-page__login-box--username-label">Tên đăng nhập *</p>
                        <input style = {styleInputErr} className = "login-page__login-box-username-input" type = 'text' placeholder='Tên đăng nhập'/>
                    </div>
                    <div className = "login-page__login-box-password">
                        <p className = "login-page__login-box--password-label">Mật khẩu *</p>
                        <FiEyeOff onClick = {()=> setPasswordInputType(passwordInputType === 'text' ? 'password' : 'text')} size = {17} className='login-page__login-box--password-show'/>
                        <input style={styleInputErr} className = "login-page__login-box-password-input" type = {passwordInputType} placeholder='Mật khẩu'/>
                    </div>
                    <p className = "login-page__login-box--forgot-password">{err ? <FiAlertCircle size = {20}  style = {{verticalAlign: '-5px', color: '#e73f3f'}}/> : ''}{err? ' Sai tên đăng nhập hoặc mật khẩu' :'Quên mật khẩu?'}</p>
                </div>
                <button className = "login-page--sign-in-btn"><span>Đăng nhập</span></button>
                {err && <p className = "login-page--forgot-password">Quên mật khẩu?</p>}
            </div>
        </div>
    )
}

export default Login