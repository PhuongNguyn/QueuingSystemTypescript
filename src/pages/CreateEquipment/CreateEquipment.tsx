import './CreateEquipment.css'
import { useState } from 'react'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const CreateEquipment:React.FC = () =>{
    const navigate = useNavigate()
    const [service, selectService] = useState<string>('')
    const [selectServiceBox, setSelectServiceBox] = useState<boolean>(false)
    const serviceName:{[key: string] : string} = {
        'kiosk': 'Kiosk',
        'displayCounter': 'Display Counter'
    }
    return (
        <div className = "create-equipment page-css">
            <h1 className = "create-equipment--title page--title">Quản lí thiết bị</h1>
            <div className = "create-equipment__box page-box">
                <h1 className = "create-equipment__box--title box--title">Thông tin thiết bị</h1>
                <div className = "create-equipment-box__input">
                    <div className = "create-equipment-box-input__column1">
                        <div className = "create-equipment-box-input__equipment-code">
                            <p>Mã thiết bị: <span>*</span></p>
                            <input type = "text" placeholder='Nhập mã thiết bị'/>
                        </div>
                        <div className = "create-equipment-box-input__equipment-name">
                            <p>Tên thiết bị: <span>*</span></p>
                            <input type = "text" placeholder='Nhập tên thiết bị'/>
                        </div>
                        <div className = "create-equipment-box-input__equipment-address">
                            <p>Địa chỉ IP: <span>*</span></p>
                            <input type = "text" placeholder='Nhập địa chỉ IP'/>
                        </div>
                    </div>
                    <div className = "create-equipment-box-input__column2">
                        <div className = "create-equipment-box-input__equipment-type" onClick = {()=>setSelectServiceBox(!selectServiceBox)} style = {{cursor: 'pointer'}}>
                            <p>Loại thiết bị: <span>*</span></p>
                            <div className = "create-equipment-box-input__equipment-type--input">
                                <p>{!service ? 'Chọn loại thiết bị':`${serviceName[`${service}`]}`}</p>
                                {!selectServiceBox && <AiFillCaretDown style = {{color: '#FF7506', verticalAlign: '-4px'}}/>}
                                {selectServiceBox && <AiFillCaretUp style = {{color: '#FF7506', verticalAlign: '-4px'}}/>}
                            </div>
                            {selectServiceBox && <div className = "create-equipment-box-input__equipment-type--option">
                                <ul>
                                    <li onClick = {()=>{selectService('kiosk')}}>Kiosk</li>
                                    <li onClick = {()=>{selectService('displayCounter')}}>Display Counter</li>
                                </ul>
                            </div>}
                        </div>
                        <div className = "create-equipment-box-input__equipment-account">
                            <p>Tên đăng nhập: <span>*</span></p>
                            <input type = "text" placeholder='Nhập mã thiết bị'/>
                        </div>
                        <div className = "create-equipment-box-input__equipment-password">
                            <p>Mật khẩu: <span>*</span></p>
                            <input type = "password" placeholder='Nhập mật khẩu'/>
                        </div>
                    </div>
                </div>
                <div className = "create-equipment-box__input-service">
                    <p>Dịch vụ sử dụng: <span>*</span></p>
                    <input type = "text" placeholder='Nhập dịch vụ sử dụng'/>
                </div>
                <p className = "create-equipment-box--note"><span style={{color: 'red'}}>*</span> Là trường thông tin bắt buộc</p>
            </div>
            <div className = "create-equipment__button">
                <div className = "create-equipment__button-wrapper">
                    <button onClick = {()=>navigate('/equipment/listEquipment')} className = "create-equipment__button--close">Huỷ bỏ</button>
                    <button className = "create-equipment__button--save">Thêm thiết bị</button>
                </div>
            </div>
        </div>
    )
}

export default CreateEquipment