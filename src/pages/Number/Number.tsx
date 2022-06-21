import './Number.css'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import { useState } from 'react'
import Calendar from 'react-calendar'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { BsFillCaretRightFill } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { BsFillPlusSquareFill } from 'react-icons/bs'
import { BsDot } from 'react-icons/bs'

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
    const [toggleServiceName, setToggleServiceName] = useState<boolean>(false)
    const [serviceName, setServiceName] = useState<string>('all')
    const [toggleStatus, setToggleStatus] = useState<boolean>(false)
    const [status, setStatus] = useState<string>('all')
    const [toggleSource, setToggleSource] = useState<boolean>(false)
    const [source, setSource] = useState<string>('all')
    const [timeFrom, setTimeFrom] = useState<string>('1/1/2022')
    const [timeTo, setTimeTo] = useState<string>('1/1/2022')
    const [toggleTimeFrom , setToggleTimeFrom] = useState<boolean>(false)
    const [toggleTimeTo , setToggleTimeTo] = useState<boolean>(false)
    const handleToggleCalendarFrom: () => void = () =>{
        setToggleTimeFrom(!toggleTimeFrom)
    }

    const handleToggleCalendarTo: () => void = () =>{
        setToggleTimeTo(!toggleTimeTo)
    }

    const handleChangeValueFrom: (value: string) => void = (value:string)=>{
        const date = new Date(value)
        setTimeFrom(`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`)
    }
    const handleChangeValueTo: (value: string) => void = (value: string) =>{
        const date = new Date(value)
        setTimeTo(`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`)
    }

    const handleDetailClick: () => void = ()=>{
        navigate('numberDetail')
    }
    

    const serviceNameKey:{[key: string]: string} = {
        'all': 'Tất cả',
        'heart': 'Khám tim mạch',
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


    const data:IData[] = [
        {
            count: '2010001',
            name: 'Lê Huỳnh Ái Vân',
            service: 'heart',
            grantTime: '14:35 - 7/11/2021',
            expiry: '14:35 - 12/11/2021',
            status: 'waiting',
            source: 'kiosk',
        },
        {
            count: '2010002',
            name: 'Lê Huỳnh Ái Vân',
            service: 'heart',
            grantTime: '14:35 - 7/11/2021',
            expiry: '14:35 - 12/11/2021',
            status: 'waiting',
            source: 'kiosk',
        },
        {
            count: '2010003',
            name: 'Lê Huỳnh Ái Vân',
            service: 'heart',
            grantTime: '14:35 - 7/11/2021',
            expiry: '14:35 - 12/11/2021',
            status: 'used',
            source: 'kiosk',
        },
        {
            count: '2010004',
            name: 'Lê Huỳnh Ái Vân',
            service: 'heart',
            grantTime: '14:35 - 7/11/2021',
            expiry: '14:35 - 12/11/2021',
            status: 'skip',
            source: 'kiosk',
        },
        {
            count: '2010005',
            name: 'Lê Huỳnh Ái Vân',
            service: 'heart',
            grantTime: '14:35 - 7/11/2021',
            expiry: '14:35 - 12/11/2021',
            status: 'waiting',
            source: 'kiosk',
        },
        {
            count: '2010006',
            name: 'Lê Huỳnh Ái Vân',
            service: 'heart',
            grantTime: '14:35 - 7/11/2021',
            expiry: '14:35 - 12/11/2021',
            status: 'waiting',
            source: 'kiosk',
        },
        {
            count: '2010007',
            name: 'Lê Huỳnh Ái Vân',
            service: 'heart',
            grantTime: '14:35 - 7/11/2021',
            expiry: '14:35 - 12/11/2021',
            status: 'waiting',
            source: 'kiosk',
        },
        {
            count: '2010008',
            name: 'Lê Huỳnh Ái Vân',
            service: 'heart',
            grantTime: '14:35 - 7/11/2021',
            expiry: '14:35 - 12/11/2021',
            status: 'waiting',
            source: 'kiosk',
        },
        {
            count: '2010008',
            name: 'Lê Huỳnh Ái Vân',
            service: 'heart',
            grantTime: '14:35 - 7/11/2021',
            expiry: '14:35 - 12/11/2021',
            status: 'waiting',
            source: 'kiosk',
        },
    ]
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
                            <li>Tất cả</li>
                            <li>Phụ khoa</li>
                            <li>Khám sản - Phụ khoa</li>
                            <li>Khám răng hàm mặt</li>
                            <li>Khám tai mũi họng</li>
                            <li>Khám mắt</li>
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
                                <li>Tất cả</li>
                                <li>Đang chờ</li>
                                <li>Đã sử dụng</li>
                                <li>Bỏ qua</li>
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
                                <li>Tất cả</li>
                                <li>Kiosk</li>
                                <li>Hệ thống</li>
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
                    <input type = "text" placeholder='Nhập từ khoá'/>
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
                        {data.map((item) => {
                            let dotColor = '#4277FF'
                            if(item.status == 'waiting')
                                dotColor = '#4277FF'
                            else if(item.status == 'used')
                                dotColor = '#7E7D88'
                            else if(item.status == 'skip')
                                dotColor = '#E73F3F'
                            return (<tr>
                                <td width = {94}>{item.count}</td>
                                <td width={164}>{item.name}</td>
                                <td width={173}>{`${serviceNameKey[item.service]}`}</td>
                                <td width={163}>{item.grantTime}</td>
                                <td width={176}>{item.expiry}</td>
                                <td style={{textAlign: 'start', padding: '0px 4px', boxSizing:'border-box'}} width = {149}><BsDot size = {30} style = {{verticalAlign: '-10px', color: dotColor}}/>{`${statusName[item.status]}`}</td>
                                <td width={122}>{`${sourceName[item.source]}`}</td>
                                <td width={99}><span onClick = {()=>handleDetailClick()} className = "number-table--update">Chi tiết</span></td>
                            </tr>)
                        }
                        )}
                    </table>
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