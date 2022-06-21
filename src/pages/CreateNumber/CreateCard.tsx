import './CreateCard.css'
import { FaTimes } from 'react-icons/fa'
import { closeCreateNumberCard } from '../../redux/action/number'
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'

const CreateCard:React.FC = () =>{
    const dispatch:Dispatch = useDispatch()
    return (
        <div className = "create-card">
            <div className = "create-card-wrapper">
                <FaTimes onClick = {()=>dispatch(closeCreateNumberCard())} size = {20} className = "create-card--close-icon"/>
                <h1 className = 'create-care--title'>Số thứ tự được cấp</h1>
                <h1 className='create-card--number'>2001201</h1>
                <p className = 'create-card--content'>DV: Khám răng hàm mặt<b>(tại quầy số 1)</b></p>
                <div className ='create-card__time'>
                    <p className='create-card__time--grant'>Thời gian cấp: <span>9:30 11/10/2021</span></p>
                    <p className='create-card__time--expiry'>Hạn sử dụng: <span>17:30 11/10/2021</span></p>
                </div>
            </div>
        </div>
    )
}

export default CreateCard