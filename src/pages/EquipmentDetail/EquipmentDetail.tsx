import './EquipmentDetail.css'
import {HiPencil} from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

const EquipmentDetail:React.FC = () =>{
    const navigate = useNavigate()
    return (
        <div className = "equipment-detail page-css">
            <h1 className = "equipment-detail--title page--title">Quản lí thiết bị</h1>
            <div className = "equipment-detail__box">
                <h1 className = "equipment-detail__box--title box--title">Thông tin thiết bị</h1>
                <div className = "equipment-detail-box__content">
                    <div className = "equipment-detail-box-content__column1">
                        <p>Mã thiết bị: <span style = {{marginLeft: '24px'}}>KIO_01</span></p>
                        <p>Tên thiết bị: <span >Kiosk</span></p>
                        <p>Địa chỉ IP: <span style = {{marginLeft: '34px'}}>KIO_01</span></p>
                    </div>
                    <div className = "equipment-detail-box-content__column2">
                        <p>Loại thiết bị: <span style = {{marginLeft: '42px'}}>Kiosk</span></p>
                        <p>Tên đăng nhập: <span>Linhkyo011</span></p>
                        <p>Mật khẩu: <span style = {{marginLeft: '62px'}}>CMS</span></p>
                    </div>
                </div>
                <div className = "eqipment-detail__service">
                    <p className='eqipment-detail__service--title'>Dịch vụ sử dụng:</p>
                    <p className='eqipment-detail__service--content'> Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát</p>
                </div>
                <div className = "equipment__edit" onClick = {()=>navigate('/equipment/listEquipment/editEquipment')}>
                    <HiPencil size = {23} style = {{backgroundColor: '#FF9138', borderRadius: '6px', color: 'white'}}/>
                    <p>Cập nhật thiết bị</p>
            </div>
            </div>
        </div>
    )
}

export default EquipmentDetail