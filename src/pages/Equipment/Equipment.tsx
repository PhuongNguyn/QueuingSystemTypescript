import './Equipment.css'
import {AiFillCaretDown, AiFillCaretUp, AiOutlineCaretRight, AiOutlineCaretLeft} from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import { useState } from 'react'
import { BsDot, BsFillPlusSquareFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'


const Equipment:React.FC = () => {
    const navigate = useNavigate()
    const [activeStatus, setActiveStatus] = useState<boolean>(false)
    const [connectStatus, setConnectStatus] = useState<boolean>(false)
    const [activeStatusType, setActiveStatusType] = useState<string>('all')
    const [connectStatusType, setConnectStatusType] = useState<string>('all')

    interface IData {
        id: number,
        code: string,
        name: string,
        address: string,
        activeStatus: boolean,
        connectStatus: boolean,
        service: string,
        showAll: boolean
    }
    
    const activeStatusName:{[key:string] : string} = {
        'all': 'Tất cả',
        'active': 'Hoạt động',
        'notactive': 'Ngưng hoạt động',
    }

    const connectStatusName:{[key:string] : string} = {
        'all': 'Tất cả',
        'active': 'Kết nối',
        'notactive': 'Mất kết nối',
    }
    const [data, setData] = useState<IData[]>([
        {
            id: 1,
            code: 'KIO_01',
            name: 'Klosk',
            address: '192.168.1.10',
            activeStatus: true,
            connectStatus: false,
            service: 'Khám tim mạch, khám mắt, khám tổng quát, khám nội, khám tai mũi họng',
            showAll: false,
        },
        {
            id: 2,
            code: 'KIO_01',
            name: 'Klosk',
            address: '192.168.1.10',
            activeStatus: true,
            connectStatus: false,
            service: 'Khám tim mạch, khám mắt, khám tổng quát, khám nội, khám tai mũi họng',
            showAll: false,
        },
        {
            id: 3,
            code: 'KIO_01',
            name: 'Klosk',
            address: '192.168.1.10',
            activeStatus: true,
            connectStatus: false,
            service: 'Khám tim mạch, khám mắt, khám tổng quát, khám nội, khám tai mũi họng',
            showAll: false,
        },
        {
            id: 4,
            code: 'KIO_01',
            name: 'Klosk',
            address: '192.168.1.10',
            activeStatus: true,
            connectStatus: false,
            service: 'Khám tim mạch, khám mắt, khám tổng quát, khám nội, khám tai mũi họng',
            showAll: false,
        },
        {
            id: 5,
            code: 'KIO_01',
            name: 'Klosk',
            address: '192.168.1.10',
            activeStatus: true,
            connectStatus: false,
            service: 'Khám tim mạch, khám mắt, khám tổng quát, khám nội, khám tai mũi họng',
            showAll: false,
        },
        {
            id: 6,
            code: 'KIO_01',
            name: 'Klosk',
            address: '192.168.1.10',
            activeStatus: true,
            connectStatus: false,
            service: 'Khám tim mạch, khám mắt, khám tổng quát, khám nội, khám tai mũi họng',
            showAll: false,
        },
        {
            id: 7,
            code: 'KIO_01',
            name: 'Klosk',
            address: '192.168.1.10',
            activeStatus: true,
            connectStatus: false,
            service: 'Khám tim mạch, khám mắt, khám tổng quát, khám nội, khám tai mũi họng',
            showAll: false,
        },
        {
            id: 8,
            code: 'KIO_01',
            name: 'Klosk',
            address: '192.168.1.10',
            activeStatus: true,
            connectStatus: false,
            service: 'Khám tim mạch, khám mắt, khám tổng quát, khám nội, khám tai mũi họng',
            showAll: false,
        },
        {
            id: 9,
            code: 'KIO_01',
            name: 'Klosk',
            address: '192.168.1.10',
            activeStatus: true,
            connectStatus: false,
            service: 'Khám tim mạch, khám mắt, khám tổng quát, khám nội, khám tai mũi họng',
            showAll: false,
        }
    ])
    const handleClickSmallService: (id: number) => void = (id:number) =>{
        const newData = data.map((item)=>{
            if(item.id === id){
                item.showAll = false
           }
           return item
        })
        setData(newData)   
    }

    const handleDetailClick: () => void = () => {
        navigate('equipmentDetail')
    }

    const handleClickReadmore: (id: number) => void = (id:number) =>{
        const newData = data.map((item)=>{
            if(item.id === id){
                item.showAll = true
           }
           return item
        })
        setData(newData)   
    }

    const handleEditClick:() => void = () =>{
        navigate('editEquipment')
    }
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
                                    <li onClick = {()=>setActiveStatusType('notactive')}>
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
                                <li onClick = {()=>setConnectStatusType('notactive')}>
                                    <span>Mất kết nối</span>
                                </li>
                            </ul>
                        </div>}
                    </div>
                </div>
                <div className = "equipment-select-input__keyword">
                    <p>Từ khoá</p>
                    <div className = "equipment-select-input-keyword__input">
                        <input type = "text" placeholder='Nhập từ khoá'/>
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
                        {data.map(item => 
                            <tr>
                                <td width={104}>{item.code}</td>
                                <td width={100}>{item.name}</td>
                                <td width={139}>{item.address}</td>
                                <td  width={172}><BsDot size = {25} style = {!item.activeStatus ? {color: '#EC3740', verticalAlign: '-8px'} : {color: '#34CD26', verticalAlign: '-8px'}}/>{item.activeStatus ? 'Hoạt động' : 'Ngưng hoạt động'}</td>
                                <td width={145}><BsDot style = {!item.connectStatus ? {color: '#EC3740', verticalAlign: '-8px'} : {color: '#34CD26', verticalAlign: '-8px'}} size = {25}/>{item.connectStatus ? 'Kết nối': 'Mất kết nối'}</td>
                                <td style={{position:'relative'}} width={268}>
                                    {item.showAll && <p onClick = {()=>handleClickSmallService(item.id)} className = "equipment-table--service-hidden">{item.service}</p>}
                                    <p className = "equipment-table--service">{item.service}
                                    </p>
                                    <p onClick = {()=>handleClickReadmore(item.id)} className = "equipment-table--readmore">Xem thêm</p>
                                </td>
                                <td width={82}><span onClick = {()=>handleDetailClick()} className = "equiment-table--detail">Chi tiết</span></td>
                                <td width={106}><span onClick = {()=>handleEditClick()} className = "equiment-table--update">Cập nhật</span></td>
                            </tr>    
                        )} 
                    </table>
                </div>
                <div className = "dividePage">
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
            <div className = "equipment__create" onClick = {()=>navigate('createEquipment')}>
                <BsFillPlusSquareFill size = {25} style = {{color: '#FF9138'}}/>
                <p>Thêm thiết bị</p>
            </div>
        </div>
    )
}

export default Equipment
