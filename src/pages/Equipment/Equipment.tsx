import './Equipment.css'
import {AiFillCaretDown, AiFillCaretUp, AiOutlineCaretRight, AiOutlineCaretLeft} from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import React, { useEffect, useState } from 'react'
import { BsDot, BsFillPlusSquareFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Dispatch } from 'redux'
import { getEquipment } from '../../redux/action/equipment'
import { useSelector } from 'react-redux'
import IEquipment from '../../interfaces/equipment'
import equipmentSelector from '../../redux/selector/equipmentSelector'


const Equipment:React.FC = () => {
    const dispatch:Dispatch = useDispatch()
    const navigate = useNavigate()
    const [activeStatus, setActiveStatus] = useState<boolean>(false)
    const [connectStatus, setConnectStatus] = useState<boolean>(false)
    const [activeStatusType, setActiveStatusType] = useState<string>('all')
    const [connectStatusType, setConnectStatusType] = useState<string>('all')
    const [readMoreService, setReadMoreService] = useState<string[]>([])
    const [currentPage, setCurrenPage] = useState<number>(1)
    const [keyword, setKeyword] = useState<string>('')

   
    
    
    const activeStatusName:{[key:string] : string} = {
        'all': 'Tất cả',
        'active': 'Hoạt động',
        'nonactive': 'Ngưng hoạt động',
    }

    const connectStatusName:{[key:string] : string} = {
        'all': 'Tất cả',
        'active': 'Kết nối',
        'nonactive': 'Mất kết nối',
    }
    let data:IEquipment[] = useSelector((state:any) => state.equipment)
    data = equipmentSelector(activeStatusType, connectStatusType, keyword ,data)
    const itemPerPage:number = 9
    const pagesLength:number = data.length % 9 == 0 ? data.length / 9 : data.length / 9 + 1
    let pages:number[] = []
    for(let i:number = 1; i <= pagesLength; i++){
        pages.push(i)
    }
    
    const handleClickSmallService: (code: string) => void = (code:string) =>{
        setReadMoreService(readMoreService.filter((item)=>item!=code))
    }

    const handleDetailClick: () => void = () => {
        navigate('equipmentDetail')
    }

    const handleClickReadmore: (code: string) => void = (code:string) =>{
       setReadMoreService([...readMoreService, code])
    }

    const handleEditClick:() => void = () =>{
        navigate('editEquipment')
    }

    const handleLeftPageClick:(e:React.SyntheticEvent)=>void = (e:React.SyntheticEvent) =>{
        if(currentPage == 1){
            e.preventDefault()
        }else{
            setCurrenPage(currentPage - 1)
        }
    }

    const handleRightPageClick:(e:React.SyntheticEvent)=>void = (e:React.SyntheticEvent) =>{
        if(currentPage == pages[pages.length - 1]){
            e.preventDefault()
        }else{
            setCurrenPage(currentPage + 1)
        }
    }

    useEffect(()=>{
        dispatch(getEquipment())
    },[])
    
    return (
        <div className = "equipment">
            <h1 className = "equipment--title page--title">Danh sách thiết bị</h1>
            <div className = "equipment__select-input">
                <div className = "equipment-select-input__status">
                    <div className = "equipment-select-input-status__active-status">
                        <p>Trạng thái hoạt động</p>
                        <div className = "equipment-select-input-status-active-status__input" onClick = {()=>setActiveStatus(!activeStatus)}>
                            <span>{activeStatusName[`${activeStatusType}`]}</span>
                            {!activeStatus && <AiFillCaretDown style = {{color: '#FF7506'}}/>}
                            {activeStatus && <AiFillCaretUp style = {{color: '#FF7506'}}/>}
                        </div>
                        {activeStatus && <div className = "active-status__option">
                            <ul>
                                    <li onClick = {()=>setActiveStatusType('all')}>
                                        <span>Tất cả</span>
                                    </li>
                                    <li onClick = {()=>setActiveStatusType('active')}>
                                        <span>Hoạt động</span>
                                    </li>
                                    <li onClick = {()=>setActiveStatusType('nonactive')}>
                                        <span>Ngưng hoạt động</span>
                                    </li>
                            </ul>
                        </div>
                        }
                    </div>
                    <div className = "equipment-select-input-status__connect-status">
                        <p>Trạng thái kết nối</p>
                        <div className = "equipment-select-input-status-connect-status__input" onClick = {()=>setConnectStatus(!connectStatus)}>
                            <span>{`${connectStatusName[connectStatusType]}`}</span>
                            {!connectStatus && <AiFillCaretDown style = {{color: '#FF7506'}}/>}
                            {connectStatus && <AiFillCaretUp style = {{color: '#FF7506'}}/>}
                        </div>
                        {connectStatus && <div className = "connect-status__option">
                            <ul>
                                <li onClick = {()=>setConnectStatusType('all')}>
                                    <span>Tất cả</span>
                                </li>
                                <li onClick = {()=>setConnectStatusType('active')}>
                                    <span>Kết nối</span>
                                </li>
                                <li onClick = {()=>setConnectStatusType('nonactive')}>
                                    <span>Mất kết nối</span>
                                </li>
                            </ul>
                        </div>}
                    </div>
                </div>
                <div className = "equipment-select-input__keyword">
                    <p>Từ khoá</p>
                    <div className = "equipment-select-input-keyword__input">
                        <input value = {keyword} onChange = {(e)=>setKeyword(e.target.value)} type = "text" placeholder='Nhập từ khoá'/>
                        <FiSearch size={22} className='equipment-select-input-keyword__input--icon'/>
                    </div>
                </div>
            </div>
            <div className = "equipment__table">
                <div className = "list-table">
                    <table>
                        <tr>
                            <td width={104}>Mã thiết bị</td>
                            <td width={100}>Tên thiết bị</td>
                            <td width={139}>Địa chỉ IP</td>
                            <td width={178}>Trạng thái hoạt động</td>
                            <td width={153}>Trạng thái kết nối</td>
                            <td width={260}>Dịch vụ sử dụng</td>
                            <td width={82}></td>
                            <td width={100}></td>
                        </tr>
                        {data.slice((currentPage - 1)*9, currentPage * 9).map((item:any) => 
                            <tr>
                                <td width={104}>{item.code}</td>
                                <td width={100}>{item.name}</td>
                                <td width={139}>{item.ipAddress}</td>
                                <td  width={172}><BsDot size = {25} style = {!item.actionStatus ? {color: '#EC3740', verticalAlign: '-8px'} : {color: '#34CD26', verticalAlign: '-8px'}}/>{item.actionStatus ? 'Hoạt động' : 'Ngưng hoạt động'}</td>
                                <td width={145}><BsDot style = {!item.connectStatus ? {color: '#EC3740', verticalAlign: '-8px'} : {color: '#34CD26', verticalAlign: '-8px'}} size = {25}/>{item.connectStatus ? 'Kết nối': 'Mất kết nối'}</td>
                                <td style={{position:'relative'}} width={268}>
                                    {readMoreService.includes(item.code) && <p onClick = {()=>handleClickSmallService(item.code)} className = "equipment-table--service-hidden">{item.service}</p>}
                                    <p className = "equipment-table--service">{item.service}
                                    </p>
                                    <p onClick = {()=>handleClickReadmore(item.code)} className = "equipment-table--readmore">Xem thêm</p>
                                </td>
                                <td width={82}><span onClick = {()=>handleDetailClick()} className = "equiment-table--detail">Chi tiết</span></td>
                                <td width={106}><span onClick = {()=>handleEditClick()} className = "equiment-table--update">Cập nhật</span></td>
                            </tr>    
                        )} 
                    </table>
                </div>
                <div className = "dividePage">
                    <ul>
                        <li onClick = {(e)=>handleLeftPageClick(e)}><AiOutlineCaretLeft style = {{verticalAlign: '-2.5px'}}/></li>
                        {pages.map((page)=>
                            <li onClick = {()=>setCurrenPage(page)} style = {currentPage == page ? {backgroundColor: '#FF7506', color: 'white'}: {}}>{page}</li>
                        )}
                        <li onClick = {(e)=>handleRightPageClick(e)}><AiOutlineCaretRight style = {{verticalAlign: '-2.5px'}}/></li>
                    </ul>
                </div>
            </div>
            <div className = "equipment__create" onClick = {()=>navigate('createEquipment')}>
                <BsFillPlusSquareFill size = {25} style = {{color: '#FF9138'}}/>
                <p>Thêm thiết bị</p>
            </div>
        </div>
    )
}

export default Equipment
