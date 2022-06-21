import './UserDiary.css'
import Calendar from 'react-calendar'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { BsDot, BsFillCaretRightFill } from 'react-icons/bs'
import { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import {AiOutlineCaretLeft, AiOutlineCaretRight} from 'react-icons/ai'

const UserDiary:React.FC = () =>{
    interface IData{
        account: string,
        time: string,
        ip: string,
        action: string,
    }
    const [timeFrom, setTimeFrom] = useState<string>('1/1/2022')
    const [timeTo, setTimeTo] = useState<string>('1/1/2022')
    const [calendarFrom, setCalendarFrom] = useState<boolean>(false)
    const [calendarTo, setCalendarTo] = useState<boolean>(false)
    const handleChangeValueFrom:(value:string) => void = (value:string)=>{
        const date = new Date(value)
        setTimeFrom(`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`)
    }
    const handleChangeValueTo:(value:string) => void = (value:string)=>{
        const date = new Date(value)
        setTimeTo(`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`)
    }
    const handleToggleCalendarFrom:()=> void = () =>{
        setCalendarFrom(!calendarFrom)
    }
    const handleToggleCalendarTo:()=>void = () =>{
        setCalendarTo(!calendarTo)
    }

    const data:IData[] = [
        {
            account: 'tuyetnguyen@18',
            time: '01/12/2021 15:12:17',
            ip: '192.168.3.1',
            action: 'Cập nhật thông tin dịch vụ DV_01'
        },
        {
            account: 'tuyetnguyen@18',
            time: '01/12/2021 15:12:17',
            ip: '192.168.3.1',
            action: 'Cập nhật thông tin dịch vụ DV_01'
        },
        {
            account: 'tuyetnguyen@18',
            time: '01/12/2021 15:12:17',
            ip: '192.168.3.1',
            action: 'Cập nhật thông tin dịch vụ DV_01'
        },
        {
            account: 'tuyetnguyen@18',
            time: '01/12/2021 15:12:17',
            ip: '192.168.3.1',
            action: 'Cập nhật thông tin dịch vụ DV_01'
        },
        {
            account: 'tuyetnguyen@18',
            time: '01/12/2021 15:12:17',
            ip: '192.168.3.1',
            action: 'Cập nhật thông tin dịch vụ DV_01'
        },
        {
            account: 'tuyetnguyen@18',
            time: '01/12/2021 15:12:17',
            ip: '192.168.3.1',
            action: 'Cập nhật thông tin dịch vụ DV_01'
        },
        {
            account: 'tuyetnguyen@18',
            time: '01/12/2021 15:12:17',
            ip: '192.168.3.1',
            action: 'Cập nhật thông tin dịch vụ DV_01'
        },
        {
            account: 'tuyetnguyen@18',
            time: '01/12/2021 15:12:17',
            ip: '192.168.3.1',
            action: 'Cập nhật thông tin dịch vụ DV_01'
        },
        {
            account: 'tuyetnguyen@18',
            time: '01/12/2021 15:12:17',
            ip: '192.168.3.1',
            action: 'Cập nhật thông tin dịch vụ DV_01'
        },
        {
            account: 'tuyetnguyen@18',
            time: '01/12/2021 15:12:17',
            ip: '192.168.3.1',
            action: 'Cập nhật thông tin dịch vụ DV_01'
        },
    ]

    return (
        <div className='user-diary page-css'>
            <div className='user-diary__input'>
                <div className = 'user-diary-input__date'>
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
                <div className='user-diary-input__keyword'>
                    <p>Từ khoá</p>
                    <input type='text' placeholder = 'Nhập từ khoá'/>
                    <BiSearch size = {22} className = 'user-diary-input__keyword--search-icon'/>
                </div>
            </div>
            <div className = 'user-diary-input__table'>
                <div className = 'list-table'>
                    <table>
                        <tr>
                            <td width={267}>Tên đăng nhập</td>
                            <td width={242}>Thời gian tác động</td>
                            <td width={218}>IP thực hiện</td>
                            <td width={387}>Thao tác thực hiện</td>
                        </tr>
                        {data.map((item) => 
                            <tr>
                                 <td width={267}>{item.account}</td>
                                <td width={242}>{item.time}</td>
                                <td width={218}>{item.ip}</td>
                                <td width={387}>{item.action}</td>
                            </tr>
                        )}
                    </table>
                </div>
            </div>
            <div className = "dividePage user-diary-divide-page">
                    <ul>
                        <li><AiOutlineCaretLeft style = {{verticalAlign: '-2.5px'}}/></li>
                        <li style = {{backgroundColor: '#FF7506', color: 'white'}}>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>...</li>
                        <li>10</li>
                        <li><AiOutlineCaretRight style = {{verticalAlign: '-2.5px'}}/></li>
                    </ul>
            </div>
        </div>
    )
}

export default UserDiary