import './ResetPassword.css'
import { useState } from 'react'
import { FiEyeOff } from 'react-icons/fi'

const ResetPassword:React.FC = () =>{
    const [passwordInputType, setPasswordInputType] = useState<string>('password')
    const [passwordRepeatInputType, setPasswordRepeatInputType] = useState<string>('password')

    return (
        <div className = "reset-password">
            <img src='/images/frame.png' alt='forgot-password-banner' id = "forgot-password-banner"/>
            <h1 className = "reset-password--title">Đặt lại mật khẩu mới</h1>
            <div className = "reset-password__box">
                    <div className = "reset-password__box-password">
                        <p className = "reset-password__box-password-label">Mật khẩu</p>
                        <FiEyeOff onClick = {()=> setPasswordInputType(passwordInputType === 'text' ? 'password' : 'text')} size = {17} className='password-repeat__box--password-show'/>
                        <input className = "reset-password__box-password-input" type = {passwordInputType} />
                    </div>
                    <div className = "reset-password__box-password-repeat">
                        <p className = "repeat-password__box--password-repeat-label">Nhập lại mật khẩu</p>
                        <FiEyeOff onClick = {()=> setPasswordRepeatInputType(passwordRepeatInputType === 'text' ? 'password' : 'text')} size = {17} className='password-repeat__box--password-repeat-show'/>
                        <input className = "reset-password__box-password-repeat-input" type = {passwordRepeatInputType} />
                    </div>
            </div>
            <button className = "reset-password__button-accept"><span>Xác nhận</span></button>
        </div>
    )
}

export default ResetPassword