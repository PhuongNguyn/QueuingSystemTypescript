import './Report.css'
import { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { BsDot, BsFillCaretRightFill } from 'react-icons/bs'
import {MdUnfoldMore} from 'react-icons/md'
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import {FaFileDownload} from 'react-icons/fa'
import { Checkbox } from '@mui/material'
import { useDispatch } from 'react-redux'
import { getNumbers } from '../../redux/action/number'
import { useSelector } from 'react-redux'

const Report:React.FC = () =>{
    interface IData{
        count: string,
        service: string,
        grantTime: string,
        status: string,
        source: string,
    }
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [countOption, setCountOption] = useState<boolean>(false)
    const [serviceOption, setServiceOption] = useState<boolean>(false)
    const [grantTimeOption, setGrantTimeOption] = useState<boolean>(false)
    const [statusOption, setStatusOption] = useState<boolean>(false)
    const [sourceOption, setSourceOption] = useState<boolean>(false)
    const [timeFrom, setTimeFrom] = useState<string>('1/1/2022')
    const [timeTo, setTimeTo] = useState<string>('1/1/2022')
    const [calendarFrom, setCalendarFrom] = useState<boolean>(false)
    const [calendarTo, setCalendarTo] = useState<boolean>(false)
    const [currentPage, setCurrentPage] = useState(1)
    const handleChangeValueFrom:(vaule: string) => void = (value:string)=>{
        const date = new Date(value)
        setTimeFrom(`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`)
    }
    const handleChangeValueTo:(vaule: string) => void = (value:string) =>{
        const date = new Date(value)
        setTimeTo(`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`)
    }
    const handleToggleCalendarFrom:()=>void = () =>{
        setCalendarFrom(!calendarFrom)
    }
    const handleToggleCalendarTo:()=>void = () =>{
        setCalendarTo(!calendarTo)
    }

    const serviceNameKey:{[key: string]: string} = {
        'all': 'Tất cả',
        'heart': 'Khám tim',
        'eyes': 'Khám mắt',
        'general': 'Khám tổng quát',
        'earnose': 'Khám tai mũi họng',
        'internal': 'Khám nội',
    }

    const statusName:{[key:string]:string} = {
        'all': 'Tất cả',
        'waiting': 'Đang chờ',
        'used': 'Đã sử dụng',
        'skip': 'Bỏ qua',
    }

    const sourceName:{[key:string]:string} = {
        'all': 'Tất cả',
        'kiosk': 'Kiosk',
        'system': 'Hệ thống',
    }
    
    let numbers:any = useSelector((state:any)=>state.number.numbers)
    const pagesLength:number = numbers.length % 10 == 0 ? numbers.length / 10 : numbers.length / 10 + 1
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
        dispatch(getNumbers())
    },[])
    return (
            <div className = 'report-page page-css'>
              <div className = "service-input__date report-page__input-date">
                    <p className='service-input__date--title'>Chọn thời gian</p>
                    <div className = "service-input__date--wrapper ">
                        <div className = "service-input-date__from report-page-input__date-from" onClick = {()=>handleToggleCalendarFrom()}>
                            <FaRegCalendarAlt style = {{color: '#FF7506', verticalAlign: '10px'}}/>
                            <p>{`${timeFrom}`}</p>
                        </div>
                        <BsFillCaretRightFill size = {10} style = {{color: 'black', marginLeft: '6px', marginRight: '6px'}}/>
                        <div className = "service-input-date__to report-page-input__date-to" onClick = {()=>handleToggleCalendarTo()}>
                            <FaRegCalendarAlt style = {{color: '#FF7506', verticalAlign: '8px'}}/>
                            <p>{`${timeTo}`}</p>
                        </div>
                        {calendarFrom && <div className = "service__calendar report-page-calendar">
                            <Calendar
                                locale="en-GB"
                                onChange={(value:any)=>handleChangeValueFrom(value)}
                            />
                        </div>}
                        {calendarTo && <div className = "service__calendar report-page-calendar">
                            <Calendar
                                locale="en-GB"
                                onChange={(value:any)=>handleChangeValueTo(value)}
                            />
                        </div>}
                    </div>
                </div>
                <div className = 'report-page__table'>
                    <div className = 'list-table report-page__list-table'>
                        <table>
                            <tr>
                                <td width={227}>
                                    <p>Số thứ tự<span><MdUnfoldMore onClick={()=>setCountOption(!countOption)} size = {20} style = {{verticalAlign: '-4px', cursor: 'pointer'}}/></span></p>
                                    {countOption && <div className = 'report-page-list-table__count-option'>
                                        <ul>
                                            <li>Tất cả</li>
                                            <li>2040001</li>
                                            <li>2040002</li>
                                            <li>2040003</li>
                                            <li>2040004</li>
                                            <li>2040005</li>
                                            <li>2040006</li>
                                        </ul>
                                    </div>}
                                    {countOption && <div className='report-page--option-scrollbar'>
                                        
                                    </div>}
                                </td>
                                <td width={234}>
                                    <p>Tên dịch vụ<span><MdUnfoldMore onClick = {()=>setServiceOption(!serviceOption)} size = {20} style = {{verticalAlign: '-4px', cursor: 'pointer'}}/></span></p>
                                    {serviceOption && <div className = 'report-page-list-table__service-option'>
                                        <ul>
                                            <li><p><span>Tất cả</span><Checkbox style = {{color: '#4277FF'}}/></p></li>
                                            <li><p><span>Khám tim mạch</span><Checkbox style = {{color: '#4277FF'}}/></p></li>
                                            <li><p><span>Khám mắt</span><Checkbox style = {{color: '#4277FF'}}/></p></li>
                                            <li><p><span>Khám tổng quát</span><Checkbox style = {{color: '#4277FF'}}/></p></li>
                                            <li><p><span>Khám răng hàm mặt</span><Checkbox style = {{color: '#4277FF'}}/></p></li>
                                        </ul>
                                    </div>}
                                    {serviceOption && <div className = 'report-page--option-scrollbar'></div>}
                                </td>
                                <td width={240}>
                                    <p>Thời gian cấp<span><MdUnfoldMore onClick = {()=>setGrantTimeOption(!grantTimeOption)} size = {20} style = {{verticalAlign: '-4px', cursor: 'pointer'}}/></span></p>
                                    {grantTimeOption && <div className = 'report-page-list-table__grant-time-option'>
                                        <ul>
                                            <li>Tất cả</li>
                                            <li>07:10 01/10/2021</li>
                                            <li>07:15 01/10/2021</li>
                                            <li>07:20 01/10/2021</li>
                                            <li>07:25 01/10/2021</li>
                                            <li>07:30 01/10/2021</li>
                                        </ul>
                                    </div>}
                                    {grantTimeOption && <div className = 'report-page--option-scrollbar'></div>}
                                </td>
                                <td width={218}>
                                    <p>Tình trạng<span><MdUnfoldMore onClick = {()=>setStatusOption(!statusOption)} size = {20} style = {{verticalAlign: '-4px', cursor: 'pointer'}}/></span></p>
                                    {statusOption && <div className = 'report-page-list-table__status-option'>
                                        <ul>
                                            <li>Tất cả</li>
                                            <li>Đang chờ</li>
                                            <li>Đã sử dụng</li>
                                            <li>Bỏ qua</li>
                                        </ul>
                                    </div>}
                                </td>
                                <td width={207}>
                                    <p>Nguồn cấp<span><MdUnfoldMore onClick = {()=>setSourceOption(!sourceOption)} size = {20} style = {{verticalAlign: '-4px', cursor: 'pointer'}}/></span></p>
                                    {sourceOption && <div className = 'report-page-list-table__source-option'>
                                        <ul>
                                            <li>Tất cả</li>
                                            <li>Kiosk</li>
                                            <li>Hệ thống</li>
                                        </ul>
                                    </div>}
                                </td>
                            </tr>
                            {numbers.slice((currentPage - 1) * 10, currentPage * 10).map((item:any) => {
                                 let dotColor = '#4277FF'
                                 if(item.status == 'waiting')
                                     dotColor = '#4277FF'
                                 else if(item.status == 'used')
                                     dotColor = '#7E7D88'
                                 else if(item.status == 'skip')
                                     dotColor = '#E73F3F'
                                return (
                                    <tr>
                                        <td width={227}>{item.no}</td>
                                        <td width={234}>{`${serviceNameKey[item.serviceCode]}`}</td>
                                        <td width={240}>{item.orderTime}</td>
                                        <td width={218}><BsDot size = {30} style = {{color: dotColor, verticalAlign: '-10px'}}/>{`${statusName[item.status]}`}</td>
                                        <td width={207}>{item.source}</td>
                                    </tr>
                                )
                            })}
                        </table>
                    </div>
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
                <div className = "equipment__create report__download">
                    <FaFileDownload size = {25} style = {{color: '#FF9138'}}/>
                    <p>Tải về</p>
                </div>
            </div>
    )
}

export default Report