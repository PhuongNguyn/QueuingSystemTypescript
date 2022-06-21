import './ServiceDetail.css'
import {HiPencil} from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import {TbArrowBackUp} from 'react-icons/tb'
import { AiFillCaretDown, AiFillCaretUp,AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai'
import { useState } from 'react'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { BsFillCaretRightFill } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
import Calendar from 'react-calendar'

const ServiceDetail:React.FC = () =>{
    const navigate = useNavigate()
    const [statusOption, setStatusOption] = useState<string>('all')
    const [toggleStatusOption, setToggleStatusOption] = useState<boolean>(false)
    const [timeFrom, setTimeFrom] = useState<string>('1/1/2022')
    const [timeTo, setTimeTo] = useState<string>('1/1/2022')
    const [toggleTimeFrom , setToggleTimeFrom] = useState<boolean>(false)
    const [toggleTimeTo , setToggleTimeTo] = useState<boolean>(false)

  

    const handleChangeValueFrom: (value: string) =>void = (value:string)=>{
        const date = new Date(value)
        setTimeFrom(`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`)
    }
    const handleChangeValueTo: (value: string) =>void = (value:string) =>{
        const date = new Date(value)
        setTimeTo(`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`)
    }

    const statusOptionName: {[key: string]: string} = {
        'all': 'Tất cả',
        'complete': 'Đã hoàn thành',
        'made': 'Đã thực hiện',
        'absent': 'Vắng'
    }

    const data:{[key: string]: string}[] = [
        {
            'count': '2010001',
            'status': 'complete'
        },
        {
            'count': '2010002',
            'status': 'absent'
        },
        {
            'count': '2010003',
            'status': 'made'
        },
        {
            'count': '2010004',
            'status': 'complete'
        },
        {
            'count': '2010005',
            'status': 'complete'
        },
        {
            'count': '2010006',
            'status': 'complete'
        },
        {
            'count': '2010007',
            'status': 'complete'
        },
        {
            'count': '2010008',
            'status': 'complete'
        },
    ]

    const handleToggleCalendarFrom:()=>void = () =>{
        setToggleTimeFrom(!toggleTimeFrom)
    }

    const handleToggleCalendarTo:()=>void = () =>{
        setToggleTimeTo(!toggleTimeTo)
    }
    return (
        <div className = "service-detail page-css">
            <h1 className = "page--title">Quản lí dịch vụ</h1>
            <div className='service-detail__box'>
                <div className = "service-detail-box__information">
                    <h1 className = "box--title">Thông tin dịch vụ</h1>
                    <div className = "service-detail-box__information--content">
                        <p>Mã dịch vụ: <span style = {{marginLeft: '27px'}}>201</span></p>
                        <p>Tên dịch vụ: <span style = {{marginLeft: '22px'}}>Khám tim mạch</span></p>
                        <p>Mô tả: <span style = {{marginLeft: '64px'}}>Chuyên các bệnh lý về tim</span></p>
                    </div>
                    <h1 className = "service-detail__box--title-number box--title">Quy tắc cấp số</h1>
                    <div className = "service-detail-number-rule__input">
                        <div className='service-detail-number-rule__input--from-to'>
                            <p>Tăng tự động: <input type = "text" value={'0001'}/> đến <input type = "text" value={'9999'}/></p>
                        </div>
                        <div className='service-detail-number-rule__input--prefix'>
                            <p>Prefix: <input type = "text" style = {{marginLeft: '64px'}} value={'0001'}/></p>
                        </div>
                        <div className='service-detail-number-rule__input--reset'>
                            <p>Reset mỗi ngày</p>
                        </div>
                        <p className = "service-detail-number-rule__input--example">Ví dụ 201-2001</p>
                    </div>
                </div>
                <div className = "service-detail-box__table">
                    <div className = "service-detail-box-table__input">
                        <div className = "service-detail-box-table__input--status">
                            <p>Trạng thái</p>
                            <div className = "service-detail-box-table__input-status--option" onClick = {()=>setToggleStatusOption(!toggleStatusOption )}>
                                <p>{`${statusOptionName[statusOption]}`}</p>
                                {!toggleStatusOption && <AiFillCaretDown style = {{color: '#FF7506'}}/>}
                                {toggleStatusOption &&<AiFillCaretUp style = {{color: '#FF7506'}}/>}
                                {toggleStatusOption &&<div className = "service-detail-box-table-status__option">
                                    <ul>
                                        <li onClick = {()=>setStatusOption('all')}>Tất cả</li>
                                        <li onClick = {()=>setStatusOption('complete')}>Đã hoàn thành</li>
                                        <li onClick = {()=>setStatusOption('made')}>Đã thực hiện</li>
                                        <li onClick = {()=>setStatusOption('absent')}>Vắng</li>
                                    </ul>
                                </div>}
                            </div>
                        </div>
                        <div className = "service-detail-box-table__input--from">
                            <p className = "service-detail-box-table__input--from--title">Chọn thời gian: </p>
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
                        <div className = "service-detail-box-table__input--keyword">
                            <p className = "service-input__keyword--title">Từ khoá</p>
                            <input type = "text" placeholder='Nhập từ khoá' />
                            <BiSearch size = {22} className = "service-detail-box-table__input--keyword-icon"/>
                        </div>
                    </div>
                    <div className = "service-detail-box-table__table">
                        <table>
                            <tr>
                                <td width={395}>Số thứ tự</td>
                                <td width={395}>Trạng thái</td>
                            </tr>
                            {data.map((item) => 
                                <tr>
                                    <td width={395}>{`${item.count}`}</td>
                                    <td width={395}>{`${statusOptionName[item.status]}`}</td>
                                </tr>
                            )}
                        </table>
                    </div>
                    <div className = "dividePage service-detail__devide-page">
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
            </div>
            <div className = "service__edit" onClick = {()=>navigate('/service/listService/editService')}>
                    <HiPencil size = {23} style = {{backgroundColor: '#FF9138', borderRadius: '6px', color: 'white'}}/>
                    <p>Cập nhật danh sách</p>
            </div>
            <div className = "service__back" onClick = {()=>navigate('/service/listService/editService')}>
                    <TbArrowBackUp size = {23} style = {{backgroundColor: '#FF9138', borderRadius: '6px', color: 'white'}}/>
                    <p>Trở lại</p>
            </div>
        </div>
        
    )
}

export default ServiceDetail