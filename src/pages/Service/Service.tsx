import './Service.css'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import {FaRegCalendarAlt} from 'react-icons/fa'
import {BsFillCaretRightFill} from 'react-icons/bs'
import { useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import Calendar from 'react-calendar'
import {AiOutlineCaretRight, AiOutlineCaretLeft} from 'react-icons/ai'
import {BsDot, BsFillPlusSquareFill} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'
import { getServices } from '../../redux/action/service'
import IServices from '../../interfaces/service'
import { useSelector } from 'react-redux'
import serviceSelector from '../../redux/selector/serviceSelector'

const Service:React.FC = () =>{

    const navigate = useNavigate()
    const dispatch:Dispatch = useDispatch()
    const [activeStatus, selectActiveStatus] = useState<string>('all')
    const [toggleActiveStatus, setToggleActiveStatus] = useState<boolean>(false)
    const [timeFrom, setTimeFrom] = useState<string>('1/1/2022')
    const [timeTo, setTimeTo] = useState<string>('1/1/2022')
    const [calendarFrom, setCalendarFrom] = useState<boolean>(false)
    const [calendarTo, setCalendarTo] = useState<boolean>(false)
    const [currentPage, setCurrentPage] = useState(1)
    const activeStatusName:{[key:string]: string} = {
        'all': 'Tất cả',
        'active': 'Hoạt động',
        'notactive': 'Ngưng hoạt động',
    }
    const [keyword, setKeyword] = useState<string>('')
    const handleChangeValueFrom:(value: string) => void = (value:string)=>{
        const date = new Date(value)
        setTimeFrom(`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`)
    }
    const handleChangeValueTo:(value: string) => void = (value:string) =>{
        const date = new Date(value)
        setTimeTo(`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`)
    }
    const handleToggleCalendarFrom:()=>void = () =>{
        setCalendarFrom(!calendarFrom)
    }
    const handleToggleCalendarTo:()=>void = ()=>{
        setCalendarTo(!calendarTo)
    }

   

    const handleDetailService:()=> void = () =>{
        navigate('serviceDetail')
    }

    const handleEditService:()=> void = () =>{
        navigate('editService')
    }

    let services:IServices[] = useSelector((state:any) => state.service)
    services = serviceSelector(keyword, activeStatus, services)
    const itemPerPage:number = 9
    const pagesLength:number = services.length % 9 == 0 ? services.length / 9 : services.length / 9 + 1
    let pages:number[] = []
    for(let i:number = 1; i <= pagesLength; i++){
        pages.push(i)
    }
    const handleLeftPageClick:(e:React.SyntheticEvent)=>void = (e:React.SyntheticEvent) =>{
        if(currentPage == 1){
            e.preventDefault()
        }else{
            setCurrentPage(currentPage - 1)
        }
    }

    const handleRightPageClick:(e:React.SyntheticEvent)=>void = (e:React.SyntheticEvent) =>{
        if(currentPage == pages[pages.length - 1]){
            e.preventDefault()
        }else{
            setCurrentPage(currentPage + 1)
        }
    }
    useEffect(()=>{
        dispatch(getServices())
    },[])
    return (
        <div className = "service page-css">
            <h1 className = "service--title page--title">Quản lí dịch vụ</h1>
            <div className = "service__input">
                <div className = "service-input__active-status">
                    <p>Trạng thái hoạt động</p>
                    <div className = "service-input-active-status__select" onClick = {()=>setToggleActiveStatus(!toggleActiveStatus)}>
                        <p>{`${activeStatusName[activeStatus]}`}</p>
                        {!toggleActiveStatus && <AiFillCaretDown style = {{color: '#FF7506'}}/>}
                        {toggleActiveStatus && <AiFillCaretUp style = {{color: '#FF7506'}}/>}
                    </div>
                    {toggleActiveStatus && <div className = "service-input-active-status__option">
                        <ul>
                            <li onClick = {()=>selectActiveStatus('all')}>Tất cả</li>
                            <li onClick = {()=>selectActiveStatus('active')}>Hoạt động</li>
                            <li onClick = {()=>selectActiveStatus('notactive')}>Ngưng hoạt động</li>
                        </ul>
                    </div>}
                </div>
                <div className = "service-input__date">
                    <p className='service-input__date--title'>Chọn thời gian</p>
                    <div className = "service-input__date--wrapper">
                        <div className = "service-input-date__from" onClick = {()=>handleToggleCalendarFrom()}>
                            <FaRegCalendarAlt style = {{color: '#FF7506', verticalAlign: '3px'}}/>
                            <p>{`${timeFrom}`}</p>
                        </div>
                        <BsFillCaretRightFill size = {10} style = {{color: 'black', marginLeft: '6px', marginRight: '6px'}}/>
                        <div className = "service-input-date__to" onClick = {()=>handleToggleCalendarTo()}>
                            <FaRegCalendarAlt style = {{color: '#FF7506'}}/>
                            <p>{`${timeTo}`}</p>
                        </div>
                        {calendarFrom && <div className = "service__calendar">
                            <Calendar
                                locale="en-GB"
                                onChange={(value:any)=>handleChangeValueFrom(value)}
                            />
                        </div>}
                        {calendarTo && <div className = "service__calendar">
                            <Calendar
                                locale="en-GB"
                                onChange={(value:any)=>handleChangeValueTo(value)}
                            />
                        </div>}
                    </div>
                </div>
                <div className = "service-input__keyword">
                    <p className = "service-input__keyword--title">Từ khoá</p>
                    <input value = {keyword} onChange = {(e) => setKeyword(e.target.value)} type = "text" placeholder='Nhập từ khoá' />
                    <BiSearch size = {20} className = "service-input__keyword--search-icon"/>
                </div>
            </div>
            <div className = "serviec-table">
                <div className = "list-table">
                    <table>
                        <tr>
                            <td width={150}>Mã dịch vụ</td>
                            <td width={226}>Tên dịch vụ</td>
                            <td width={232}>Mô tả</td>
                            <td width={255}>Trạng thái hoạt động</td>
                            <td width={127}></td>
                            <td width={140}></td>
                        </tr>
                        {
                            services.slice((currentPage - 1)*9, currentPage * 9).map((item) => 
                                <tr>
                                    <td width={150}>{item.code}</td>
                                    <td width={226}>{item.name}</td>
                                    <td width={232}>{item.description}</td>
                                    <td width={255}><BsDot style = {!item.actionStatus ? {color: '#EC3740', verticalAlign: '-8px'} : {color: '#34CD26', verticalAlign: '-10px'}} size = {30}/>{item.actionStatus ? 'Hoạt động': 'Ngưng hoạt động'}</td>
                                    <td width={82}><span onClick = {()=>{handleDetailService()}} className = "equiment-table--detail">Chi tiết</span></td>
                                    <td width={106}><span onClick = {()=>{handleEditService()}} className = "equiment-table--update">Cập nhật</span></td>
                                </tr>
                            )
                        }
                    </table>
                </div>
                <div className = "dividePage">
                    <ul>
                        <li onClick = {(e)=>handleLeftPageClick(e)}><AiOutlineCaretLeft style = {{verticalAlign: '-2.5px'}}/></li>
                        {pages.map((page)=>
                            <li onClick = {()=>setCurrentPage(page)} style = {currentPage == page ? {backgroundColor: '#FF7506', color: 'white'}: {}}>{page}</li>
                        )}
                        <li onClick = {(e)=>handleRightPageClick(e)}><AiOutlineCaretRight style = {{verticalAlign: '-2.5px'}}/></li>
                    </ul>
                </div>
            </div>
            <div className = "equipment__create" onClick = {()=>navigate('createService')}>
                <BsFillPlusSquareFill size = {25} style = {{color: '#FF9138'}}/>
                <p>Thêm dịch vụ</p>
            </div>
        </div>
    )
}

export default Service