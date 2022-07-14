import './Login.css'
import { useState } from 'react'
import {FiEyeOff, FiAlertCircle} from 'react-icons/fi'
import { login } from '../../redux/action/user'
import { useDispatch } from 'react-redux'
import { Dispatch } from 'redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { NavigateFunction } from 'react-router-dom'

const Login:React.FC = () =>{
    const navigate:NavigateFunction = useNavigate()
    const dispatch:Dispatch = useDispatch()
    const [passwordInputType, setPasswordInputType] = useState<string>('password')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const user = useSelector((state:any) => state.user)
    let styleInputErr:{border: string} = user.message ? {border: '1.5px solid #E73F3F'} : {border: ''}
    const handleLoginClick = () =>{
        dispatch(login(email, password, navigate))
    }
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
                        <input value = {email} onChange = {(e)=>setEmail(e.target.value)} style = {styleInputErr} className = "login-page__login-box-username-input" type = 'email' placeholder='Tên đăng nhập'/>
                    </div>
                    <div className = "login-page__login-box-password">
                        <p className = "login-page__login-box--password-label">Mật khẩu *</p>
                        <FiEyeOff onClick = {()=> setPasswordInputType(passwordInputType === 'text' ? 'password' : 'text')} size = {17} className='login-page__login-box--password-show'/>
                        <input value={password} onChange = {(e)=>setPassword(e.target.value)} style={styleInputErr} className = "login-page__login-box-password-input" type = {passwordInputType} placeholder='Mật khẩu'/>
                    </div>
                    <p className = "login-page__login-box--forgot-password">{user.message ? <FiAlertCircle size = {20}  style = {{verticalAlign: '-5px', color: '#e73f3f'}}/> : ''}{user.message? ' Sai tên đăng nhập hoặc mật khẩu' :'Quên mật khẩu?'}</p>
                </div>
                <button onClick = {()=>handleLoginClick()} className = "login-page--sign-in-btn"><span>Đăng nhập</span></button>
                {user.message && <p className = "login-page--forgot-password">Quên mật khẩu?</p>}
            </div>
        </div>
    )
}

export default Login