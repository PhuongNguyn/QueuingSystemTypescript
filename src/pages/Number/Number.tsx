import './Number.css'
import { AiFillCaretDown, AiFillCaretUp, AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { BsFillCaretRightFill } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { BsFillPlusSquareFill } from 'react-icons/bs'
import { BsDot } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { getNumbers } from '../../redux/action/number'
import { useSelector } from 'react-redux'
import numberSelector from '../../redux/selector/numberSelector'

const Number:React.FC = () => {
    interface IData {
        count: string, 
        name: string, 
        service: string,
        grantTime: string,
        expiry: string,
        status: string,
        source: string,
    }
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [toggleServiceName, setToggleServiceName] = useState<boolean>(false)
    const [serviceName, setServiceName] = useState<string>('all')
    const [toggleStatus, setToggleStatus] = useState<boolean>(false)
    const [status, setStatus] = useState<string>('all')
    const [toggleSource, setToggleSource] = useState<boolean>(false)
    const [source, setSource] = useState<string>('all')
    const [timeFrom, setTimeFrom] = useState<string>('1/1/1999')
    const [timeTo, setTimeTo] = useState<string>('1/1/1999')
    const [toggleTimeFrom , setToggleTimeFrom] = useState<boolean>(false)
    const [toggleTimeTo , setToggleTimeTo] = useState<boolean>(false)
    const [keyword, setKeyword] = useState('')
    const handleToggleCalendarFrom: () => void = () =>{
        setToggleTimeFrom(!toggleTimeFrom)
    }
    const [currentPage, setCurrentPage] = useState<number>(1)

    const handleToggleCalendarTo: () => void = () =>{
        setToggleTimeTo(!toggleTimeTo)
    }

    const handleChangeValueFrom: (value: string) => void = (value:string)=>{
        const date = new Date(value)
        setTimeFrom(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`)
    }
    const handleChangeValueTo: (value: string) => void = (value: string) =>{
        const date = new Date(value)
        setTimeTo(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`)
    }

    const handleDetailClick: () => void = ()=>{
        navigate('numberDetail')
    }
    

    const serviceNameKey:{[key: string]: string} = {
        'all': 'Tất cả',
        'heart': 'Khám tim',
        'eyes': 'Khám mắt',
        'general': 'Khám tổng quát',
        'earnose': 'Khám tai mũi họng',
        'internal': 'Khám nội',
    }

    const statusName:{[key: string]: string} = {
        'all': 'Tất cả',
        'waiting': 'Đang chờ',
        'used': 'Đã sử dụng',
        'skip': 'Bỏ qua',
    }

    const sourceName:{[key: string]: string} = {
        'all': 'Tất cả',
        'kiosk': 'Kiosk',
        'system': 'Hệ thống',
    }
    let numbers:any = useSelector((state:any)=>state.number.numbers)
    numbers = numberSelector(serviceName, status, source, timeFrom, timeTo, keyword,numbers)
    const pagesLength:number = numbers.length % 9 == 0 ? numbers.length / 9 : numbers.length / 9 + 1
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
        <div className = "number-page page-css">
            <h1 className = "page--title">Quản lý cấp số</h1>
            <div className = "number-page__input">
                <div className = "number-page-input__service-name">
                    <p>Tên dịch vụ:</p>
                    <div className = "number-page-input__service-name--input" onClick = {()=>setToggleServiceName(!toggleServiceName)}>
                        <p>{`${serviceNameKey[serviceName]}`}</p>
                        {!toggleServiceName && <AiFillCaretDown style = {{color: '#FF7506'}}/>}
                        {toggleServiceName && <AiFillCaretUp  style = {{color: '#FF7506'}}/>}
                    </div>
                    {toggleServiceName && <div className = "number-page-input__service-name--option">
                        <ul>
                            <li onClick = {()=>setServiceName('all')}>Tất cả</li>
                            <li onClick = {()=>setServiceName('heart')}>Khám tim</li>
                            <li onClick = {()=>setServiceName('pregnance')}>Khám sản - Phụ khoa</li>
                            <li onClick = {()=>setServiceName('teeth')}>Khám răng hàm mặt</li>
                            <li onClick = {()=>setServiceName('earnose')}>Khám tai mũi họng</li>
                            <li onClick = {()=>setServiceName('eyes')}>Khám mắt</li>
                        </ul>
                    </div>}
                    {toggleServiceName && <div className = "number-page-input__service-name--scrollbar">

                    </div>}
                </div>
                <div className = "number-page__input__status">
                    <p>Tình trạng: </p>
                    <div className = "number-page__input__status--input" onClick = {()=>setToggleStatus(!toggleStatus)}>
                        <p>{`${statusName[status]}`}</p>
                        {!toggleStatus && <AiFillCaretDown style = {{color: '#FF7506'}}/>}
                        {toggleStatus && <AiFillCaretUp  style = {{color: '#FF7506'}}/>}
                        {toggleStatus && <div className = "number-page__input__status--option">
                            <ul>
                                <li onClick = {()=>setStatus('all')}>Tất cả</li>
                                <li onClick = {()=>setStatus('waiting')}>Đang chờ</li>
                                <li onClick = {()=>setStatus('used')}>Đã sử dụng</li>
                                <li onClick = {()=>setStatus('skip')}>Bỏ qua</li>
                            </ul>
                        </div>}
                    </div>
                </div>
                <div className = "number-page-input__source">
                    <p>Nguồn cấp:</p>
                    <div className = "number-page-input__source--input" onClick = {()=>setToggleSource(!toggleSource)}>
                        <p>{`${sourceName[source]}`}</p>
                        {!toggleSource && <AiFillCaretDown style = {{color: '#FF7506'}}/>}
                        {toggleSource && <AiFillCaretUp  style = {{color: '#FF7506'}}/>}
                        {toggleSource && <div className = "number-page__input__source--option">
                            <ul>
                                <li onClick = {()=>setSource('all')}>Tất cả</li>
                                <li onClick = {()=>setSource('kiosk')}>Kiosk</li>
                                <li onClick = {()=>setSource('system')}>Hệ thống</li>
                            </ul>
                        </div>}
                    </div>
                </div>
                <div className = "service-detail-box-table__input--from number-page-input__date">
                    <p className = "service-detail-box-table__input--from--title">Chọn thời gian: </p>
                    <div className = "service-input__date--wrapper">
                        <div className = "service-input-date__from number-input-date__from" onClick = {()=>handleToggleCalendarFrom()}>
                            <FaRegCalendarAlt style = {{color: '#FF7506', verticalAlign: '3px'}}/>
                             <p>{`${timeFrom}`}</p>
                        </div>
                        <BsFillCaretRightFill size = {10} style = {{color: 'black', marginLeft: '6px', marginRight: '6px'}}/>
                        <div className = "service-input-date__to number-input-date__to" onClick = {()=>handleToggleCalendarTo()}>
                            <FaRegCalendarAlt style = {{color: '#FF7506'}}/>
                            <p>{`${timeTo}`}</p>
                        </div>
                        {toggleTimeFrom && <div className = "service__calendar">
                            <Calendar
                                locale="en-GB"
                                onChange={(value:any)=>handleChangeValueFrom(value)}
                            />
                        </div>}
                        {toggleTimeTo && <div className = "service__calendar">
                            <Calendar
                                locale="en-GB"
                                onChange={(value:any)=>handleChangeValueTo(value)}
                            />
                         </div>}
                    </div>
                </div>
                <div className = "number-page-input__keyword">
                    <p>Từ khoá:</p>
                    <input onChange = {(e)=>setKeyword(e.target.value)} value = {keyword} type = "text" placeholder='Nhập từ khoá'/>
                    <BiSearch size = {22} className = "number-page-input__keyword--search-icon"/>
                </div>
            </div>
            <div className = "number-page__table">
                <div className = "list-table">
                    <table>
                        <tr>
                            <td width = {94}>STT</td>
                            <td width={164}>Tên khách hàng</td>
                            <td width={173}>Tên dịch vụ</td>
                            <td width={163}>Thời gian cấp</td>
                            <td width={176}>Hạn sử dụng</td>
                            <td width = {149}>Trạng thái</td>
                            <td width={122}>Nguồn cấp</td>
                            <td width={99}></td>
                        </tr>
                        {numbers.slice((currentPage - 1) * 9, currentPage * 9).map((item:any) => {
                            let dotColor = '#4277FF'
                            if(item.status == 'waiting')
                                dotColor = '#4277FF'
                            else if(item.status == 'used')
                                dotColor = '#7E7D88'
                            else if(item.status == 'skip')
                                dotColor = '#E73F3F'
                            return (<tr>
                                <td width = {94}>{item.no}</td>
                                <td width={164}>{item.customerName}</td>
                                <td width={173}>{`${serviceNameKey[item.serviceCode]}`}</td>
                                <td width={163}>{item.orderTime}</td>
                                <td width={176}>{item.expireTime}</td>
                                <td style={{textAlign: 'start', padding: '0px 4px', boxSizing:'border-box'}} width = {149}><BsDot size = {30} style = {{verticalAlign: '-10px', color: dotColor}}/>{`${statusName[item.status]}`}</td>
                                <td width={122}>{item.source}</td>
                                <td width={99}><span onClick = {()=>handleDetailClick()} className = "number-table--update">Chi tiết</span></td>
                            </tr>)
                        }
                        )}
                    </table>
                </div>
                <div className = "number-dividePage dividePage">
                    <ul>
                        <li onClick = {(e)=>handleLeftPageClick(e)}><AiOutlineCaretLeft style = {{verticalAlign: '-2.5px'}}/></li>
                        {pages.map((page)=>
                            <li onClick = {()=>setCurrentPage(page)} style = {currentPage == page ? {backgroundColor: '#FF7506', color: 'white'}: {}}>{page}</li>
                        )}
                        <li onClick = {(e)=>handleRightPageClick(e)}><AiOutlineCaretRight style = {{verticalAlign: '-2.5px'}}/></li>
                    </ul>
                </div>
            </div>
            <div className = "equipment__create" onClick = {()=>navigate('createNumber')}>
                <BsFillPlusSquareFill size = {25} style = {{color: '#FF9138'}}/>
                <p>Cấp số mới</p>
            </div>
        </div>
    )
}

export default Number