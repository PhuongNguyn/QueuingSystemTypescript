import './EditEquipment.css'
import { useState } from 'react'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'

const EditEquipment:React.FC = () =>{
    const navigate = useNavigate()
    const [service, selectService] = useState<string>('')
    const [selectServiceBox, setSelectServiceBox] = useState<boolean>(false)
    const [useService, setUseservice] = useState<string[]>([])
    const [serviceOption, setServiceOption] = useState<boolean>(false)
    const serviceName:{[key: string] : string} = {
        'kiosk': 'Kiosk',
        'displayCounter': 'Display Counter'
    }
    const useServiceName:{[key: string] : string} = {
        'general': 'Khám tổng quát',
        'internal':'Khám nội khoa',
        'heart': 'Khám tim mạch',
        'eyes': 'khám mắt',
        'pregnant': 'Khám khoa sản',
        'lung': 'Khám hô hấp',
        'teeth': 'Khám răng hàm mặt'
    }
    const handleDelteService:(name: string) => void = (name:string)=>{
        setUseservice(useService.filter((item) => item != name))
    }

    const handleSelectService:(name: string) => void = (name:string) =>{
        setUseservice([...useService, name])
    }

    const handleSelectAllService:() => void = () =>{

    }
    return (
        <div className = "edit-equipment page-css">
            <h1 className = "edit-equipment--title page--title">Quản lí thiết bị</h1>
            <div className = "edit-equipment__box page-box">
                <h1 className = "edit-equipment__box--title box--title">Thông tin thiết bị</h1>
                <div className = "edit-equipment-box__input">
                    <div className = "edit-equipment-box-input__column1">
                        <div className = "edit-equipment-box-input__equipment-code">
                            <p>Mã thiết bị: <span>*</span></p>
                            <input type = "text" placeholder='Nhập mã thiết bị'/>
                        </div>
                        <div className = "edit-equipment-box-input__equipment-name">
                            <p>Tên thiết bị: <span>*</span></p>
                            <input type = "text" placeholder='Nhập tên thiết bị'/>
                        </div>
                        <div className = "edit-equipment-box-input__equipment-address">
                            <p>Địa chỉ IP: <span>*</span></p>
                            <input type = "text" placeholder='Nhập địa chỉ IP'/>
                        </div>
                    </div>
                    <div className = "edit-equipment-box-input__column2">
                        <div className = "edit-equipment-box-input__equipment-type" onClick = {()=>setSelectServiceBox(!selectServiceBox)} style = {{cursor: 'pointer'}}>
                            <p>Loại thiết bị: <span>*</span></p>
                            <div className = "edit-equipment-box-input__equipment-type--input">
                                <p>{!service ? 'Chọn loại thiết bị':`${serviceName[service]}`}</p>
                                {!selectServiceBox && <AiFillCaretDown style = {{color: '#FF7506', verticalAlign: '-4px'}}/>}
                                {selectServiceBox && <AiFillCaretUp style = {{color: '#FF7506', verticalAlign: '-4px'}}/>}
                            </div>
                            {selectServiceBox && <div className = "edit-equipment-box-input__equipment-type--option">
                                <ul>
                                    <li onClick = {()=>{selectService('kiosk')}}>Kiosk</li>
                                    <li onClick = {()=>{selectService('displayCounter')}}>Display Counter</li>
                                </ul>
                            </div>}
                        </div>
                        <div className = "edit-equipment-box-input__equipment-account">
                            <p>Tên đăng nhập: <span>*</span></p>
                            <input type = "text" placeholder='Nhập mã thiết bị'/>
                        </div>
                        <div className = "edit-equipment-box-input__equipment-password">
                            <p>Mật khẩu: <span>*</span></p>
                            <input type = "password" placeholder='Nhập mật khẩu'/>
                        </div>
                    </div>
                </div>
                <div className = "edit-equipment-box__input-service" onClick = {()=>setServiceOption(!serviceOption)}>
                    <p>Dịch vụ sử dụng: <span>*</span></p>
                    <div className = "edit-equipment-box-input-service__useService">
                        <div className = "edit-equipment-box-input-service__useService-wrapper">
                            {useService.map((item) =>
                                <div className ="edit-equipment-box-input-service__useService-wrapper--item">
                                    <p>{`${useServiceName[item]}`}</p>
                                    <FaTimes size = {15} style = {{color: 'white', cursor: 'pointer'}} onClick = {()=>handleDelteService(item)}/>
                                </div>
                            )}
                        </div>
                        {serviceOption && <div className = "edit-equipment-box-input-service__option">
                            <ul>
                                <li onClick = {()=>handleSelectAllService()}>Tất cả</li>
                                <li onClick = {()=>handleSelectService('teeth')}>Khám răng hàm mặt</li>
                                <li onClick = {()=>handleSelectService('lung')}>Khám tai mũi họng</li>
                                <li onClick = {()=>handleSelectService('heart')}>Khám tim mạch</li>
                                <li onClick = {()=>handleSelectService('internal')}>Khám nội khoa</li>
                            </ul>
                        </div>}
                    </div>
                </div>
                <p className = "edit-equipment-box--note"><span style={{color: 'red'}}>*</span> Là trường thông tin bắt buộc</p>
            </div>
            <div className = "edit-equipment__button">
                <div className = "edit-equipment__button-wrapper">
                    <button onClick = {()=>navigate('/equipment/listEquipment')} className = "edit-equipment__button--close">Huỷ bỏ</button>
                    <button className = "edit-equipment__button--save">Cập nhật</button>
                </div>
            </div>
        </div>
    )
}
export default EditEquipment