import './CreateNumber.css'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CreateCard from './CreateCard'
import { createNumber } from '../../redux/action/number'
import { useDispatch } from 'react-redux'
import { Dispatch } from 'redux'


const CreateNumber:React.FC = () =>{
    const dispatch:Dispatch = useDispatch()
    const navigate = useNavigate()
    const [optionBox, setOptionBox] = useState<boolean>(false)
    const [option, setOption] = useState<string>('eye')
    const serviceName:{[key: string]: string} = {
        'eye': 'Khám mắt',
        'pregnance': 'Khám sản - Phụ khoa',
        'nose': 'Khám tai mũi họng',
        'heart': 'Khám tim',
        'teeth': 'Khám răng hàm mặt'
    }
    return (
        <div className = "create-number page-css">
            <h1 className = "page--title">Quản lý cấp số</h1>
            <div className = "create-number__box page-box">
                <h1 className = 'create-number__box--title'>Cấp số mới</h1>
                <p className = "create-number__box--choose">Dịch vụ khách hàng lựa chọn</p>
                <div className = "create-number-box__option-box" onClick = {()=>setOptionBox(!optionBox)}>
                    <p>{`${serviceName[option]}`}</p>
                    {!optionBox && <AiFillCaretDown size = {20} style = {{color: '#FF7506'}}/>}
                    {optionBox && <AiFillCaretUp size = {20} style = {{color: '#FF7506'}}/>}
                    {optionBox && <div className='create-number-box__option-box--option'>
                        <ul>
                            <li onClick = {()=>setOption('eye')}>Khám mắt</li>
                            <li onClick = {()=>setOption('pregnance')}>Khám sản - Phụ khoa</li>
                            <li onClick = {()=>setOption('nose')}>Khám tai mũi họng</li>
                            <li onClick = {()=>setOption('heart')}>Khám tim</li>
                            <li onClick = {()=>setOption('teeth')}>Khám răng hàm mặt</li>
                        </ul>
                    </div>}
                    {optionBox && <div className = "create-number__box--scrollbar">
                        
                    </div>}
                </div>
                <div className = "create-option-box__button">
                    <div className = "create-option-box__button-close" onClick = {()=>navigate('/number/listNumber')}>
                        <span>Huỷ bỏ</span>
                    </div>
                    <div className = "create-option-box__button-save" onClick = {()=>dispatch(createNumber(option))}>
                        <span>In số</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateNumber