import './NumberDetail.css'
import { BsDot } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import {TbArrowBackUp} from 'react-icons/tb'

const NumberDetail:React.FC = () => {
    const navigate = useNavigate()

    let status:string = 'waiting'
    let dotColor:string = '#4277FF'
    if(status == 'waiting')
        dotColor = '#4277FF'
    else if(status == 'used')
        dotColor = '#7E7D88'
    else if(status == 'skip')
        dotColor = '#E73F3F'
    return (
        <div className='number-detail page-css'>
            <h1 className = 'number-detail--title page--title'>Quản lí cấp số</h1>
            <div className = 'number-detail__box page-box'>
                <h1 className='number-detail__box--title box--title'>Thông tin cấp số</h1>
                <div className = 'number-detail-box__content'>
                    <div className = 'number-detail-box-content__column1'>
                        <p>Họ tên: <span style = {{marginLeft: '73px'}}>Nguyễn Thị Dung</span></p>
                        <p>Tên dịch vụ: <span style = {{marginLeft: '39px'}}>Khám tim mạch</span></p>
                        <p>Số thứ tự: <span style = {{marginLeft: '55px'}}>2001201</span></p>
                        <p>Thời gian cấp: <span style = {{marginLeft: '24px'}}>14:35 - 7/11/2021</span></p>
                        <p>Hạn sử dụng: <span style = {{marginLeft: '29px'}}>18:00 - 7/11/2021</span></p>
                    </div>
                    <div className = 'number-detail-box-content__column2'>
                        <p>Nguồn cấp: <span style = {{marginLeft: '40px'}}>Kiosk</span></p>
                        <p>Trạng thái: <span style = {{marginLeft: '32px'}}><BsDot size = {30} style = {{verticalAlign: '-10px', color: dotColor}}/>Đang chờ</span></p>
                        <p>Số điện thoại: <span style = {{marginLeft: '24px'}}>0948523623</span></p>
                        <p>Địa chỉ email: <span style = {{marginLeft: '25px'}}>nguyendung@gmail.com</span></p>
                    </div>
                </div>
            </div>
            <div className = "equipment__create number-detail__back" onClick = {()=>navigate('/number/listNumber')}>
                <TbArrowBackUp size = {23} style = {{backgroundColor: '#FF9138', borderRadius: '6px', color: 'white'}}/>
                <p>Quay lại</p>
            </div>
        </div>
    )
}

export default NumberDetail