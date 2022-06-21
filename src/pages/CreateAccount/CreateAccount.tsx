import './CreateAccount.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { AiFillCaretDown,AiFillCaretUp} from 'react-icons/ai'
import {BsEyeSlash, BsEye} from 'react-icons/bs'

const CreateAccount:React.FC = () =>{
    const navigate = useNavigate()
    const [roleOption, setRoleOption] = useState<boolean>(false)
    const [statusOption, setStatusOption] = useState<boolean>(false)
    const [typePassword, setTypePassword] = useState<string>('password')
    const [typePasswordRepeat, setTypePasswordRepeat] = useState<string>('password')

    return (
        <div className = 'create-account-page page-css'>
            <h1 className = 'create-account-page--title page--title'>Quản lí tài khoản</h1>
            <div className = 'create-account-page__box page-box'>
                <h1 className = 'create-account-page__box--title box--title'>Thông tin tài khoản</h1>
                <div className = 'create-acount-page__input'>
                    <div className = 'create-acount-page-input__column1'>
                        <div className = 'create-account-page-input__name'>
                            <p>Họ Tên <span style = {{color: 'red'}}>*</span></p>
                            <input type = 'text' placeholder='Nhập họ và tên'/>
                        </div>
                        <div className = 'create-account-page-input__phone'>
                            <p>Số điện thoại <span style = {{color: 'red'}}>*</span></p>
                            <input type = 'text' placeholder='Nhập số điện thoại'/>
                        </div>
                        <div className = 'create-account-page-input__email'>
                            <p>Email <span style = {{color: 'red'}}>*</span></p>
                            <input type = 'text' placeholder='Nhập số điện thoại'/>
                        </div>
                        <div className = 'create-account-page-input__role'>
                            <p>Vai trò <span style = {{color: 'red'}}>*</span></p>
                            <div className = 'create-account-page-input__role--input' onClick = {()=>setRoleOption(!roleOption)}>
                                <p>Chọn vai trò</p>
                                {!roleOption && <AiFillCaretDown style = {{color: '#FF7506'}}/>}
                                {roleOption &&<AiFillCaretUp style = {{color: '#FF7506'}}/>}
                            </div>
                            {roleOption && <div className = 'create-account-page-input__role--option'>
                                <ul>
                                    <li>Kế toán</li>
                                    <li>Quản lí</li>
                                    <li>Admin</li>
                                </ul>
                            </div>}
                        </div>
                        
                    </div>
                    <div className = 'create-account-page-input__column2'>
                        <div className = 'create-account-page-input__account'>
                            <p>Tên đăng nhập <span style = {{color: 'red'}}>*</span></p>
                            <input type = 'text' placeholder='Nhập tên đăng nhập'/>
                        </div>
                        <div className = 'create-account-page-input__password'>
                            <p>Mật khẩu <span style = {{color: 'red'}}>*</span></p>
                            <input type = {typePassword} placeholder='Nhập mật khẩu'/>
                            {typePassword == 'password' && <BsEyeSlash className = 'create-account-page-input__password--icon' onClick = {()=>setTypePassword('text')}/>}
                            {typePassword == 'text' && <BsEye className = 'create-account-page-input__password--icon' onClick = {()=>setTypePassword('password')}/>}
                        </div>
                        <div className = 'create-account-page-input__password-repeat'>
                            <p>Nhập lại mật khẩu <span style = {{color: 'red'}}>*</span></p>
                            <input type = {typePasswordRepeat} placeholder='Nhập lại mật khẩu'/>
                            {typePasswordRepeat == 'password' && <BsEyeSlash className = 'create-account-page-input__password--icon' onClick = {()=>setTypePasswordRepeat('text')}/>}
                            {typePasswordRepeat == 'text' && <BsEye className = 'create-account-page-input__password--icon' onClick = {()=>setTypePasswordRepeat('password')}/>}
                        </div>
                        <div className = 'create-account-page-input__status'>
                            <p>Tình trạng <span style = {{color: 'red'}}>*</span></p>
                            <div className = 'create-account-page-input__status--input' onClick = {()=>setStatusOption(!statusOption)}>
                                <p>Chọn tình trạng</p>
                                {!statusOption && <AiFillCaretDown style = {{color: '#FF7506'}}/>}
                                {statusOption &&<AiFillCaretUp style = {{color: '#FF7506'}}/>}
                            </div>
                            {statusOption && <div className = 'create-account-page-input__status--option'>
                                <ul>
                                    <li>Hoạt động</li>
                                    <li>Ngưng hoạt động</li>
                                </ul>
                            </div>}
                        </div>
                    </div>
                </div>
                <p className = 'create-account-page--note'><span style = {{color: 'red'}}>*</span> Là trường thông tin bắt buộc</p>
            </div>
            <div className = "create-equipment__button">
                <div className = "create-equipment__button-wrapper">
                    <button onClick = {()=>navigate('/setting/listAccount')} className = "create-equipment__button--close">Huỷ bỏ</button>
                    <button className = "create-equipment__button--save">Thêm</button>
                </div>
            </div>
        </div>
    )
}

export default CreateAccount