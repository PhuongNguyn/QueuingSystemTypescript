import './EditService.css'
import { useNavigate } from 'react-router-dom'
import { Checkbox } from '@mui/material'
import { useState } from 'react'

const EditService:React.FC = () => {
    const navigate = useNavigate() 
    const [from, setFrom] = useState<string>('0001')
    const [to, setTo] = useState<string>('9999')
    const [prefix, setPrefix] = useState<string>('0001')
    const [surfix, setSurfix] = useState<string>('0001')
    return (
        <div className = "edit-service page-css">
            <h1 className = "page--title">Quản lí dịch vụ</h1>
            <div className = "edit-service__box page-box">
                <h1 className = "box--title">Thông tin dịch vụ</h1>
                <div className = "edit-service__input">
                    <div className = "edit-service-input__column1">
                        <div className = "edit-service-input__service-code">
                            <p>Mã dịch vụ <span style = {{color: 'red'}}>*</span></p>
                            <input type = "text" placeholder='Nhập mã dịch vụ'/>
                        </div>
                        <div className = "edit-service-input__service-name">
                            <p>Tên dịch vụ <span style = {{color: 'red'}}>*</span></p>
                            <input type = "text" placeholder='Nhập tên dịch vụ'/>
                            
                        </div>
                    </div>
                    <div className = "edit-service-input__column2">
                        <div className = "edit-service-input__service-description">
                            <p>Mô tả <span style = {{color: 'red'}}>*</span></p>
                            <textarea placeholder='Mô tả dịch vụ'/>
                        </div>
                    </div>
                </div>
                <div className = "edit-service__number-rule">
                    <h1 className = "edit-service__number--title box--title">Quy tắc cấp số</h1>
                    <div className = "edit-service-number-rule__input">
                        <div className='edit-service-number-rule__input--from-to'>
                            <p><Checkbox style = {{fontWeight: 400, verticalAlign: '-6px', color: '#4277FF'}}/>Tăng tự động từ: <input type = "text" value={from}/> đến <input type = "text" value={to}/></p>
                        </div>
                        <div className='edit-service-number-rule__input--prefix'>
                            <p><Checkbox style = {{fontWeight: 400, verticalAlign: '-6px', color: '#4277FF'}}/>Prefix: <input type = "text" style = {{marginLeft: '87px'}} value={prefix}/></p>
                        </div>
                        <div className='edit-service-number-rule__input--prefix'>
                            <p><Checkbox style = {{fontWeight: 400, verticalAlign: '-6px', color: '#4277FF'}}/>Surfix: <input type = "text" style = {{marginLeft: '87px'}} value = {surfix}/></p>
                        </div>
                        <div className='edit-service-number-rule__input--reset'>
                            <p><Checkbox style = {{fontWeight: 400, verticalAlign: '-6px', color: '#4277FF'}}/>Reset mỗi ngày</p>
                        </div>
                    </div>
                </div>
                <p className = "edit-equipment-box--note"><span style={{color: 'red'}}>*</span> Là trường thông tin bắt buộc</p>
            </div>
            <div className = "edit-service__button button-save-and-close">
                <div className = "edit-service__button-wrapper button-save-and-close-wrapper">
                    <button onClick = {()=>navigate('/service/listService')} className = "edit-equipment__button--close button-close">Huỷ bỏ</button>
                    <button className = "edit-service__button--save button-save">Cập nhật</button>
                </div>
            </div>
        </div>
    )
}

export default EditService