import './ManageAccount.css'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { BsDot } from 'react-icons/bs'
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { BsFillPlusSquareFill } from 'react-icons/bs'

const ManageAccount:React.FC = () =>{
    interface IData{
        account: string,
        name: string,
        phone: string,
        email: string,
        role: string,
        status: string,
    }
    const navigate = useNavigate()
    const [roleOption, setRoleOption] = useState<boolean>(false)
    const data:IData[] = [
        {
            account: 'tuyetnguyen@18',
            name: 'Nguyễn Văn A',
            phone: '0919256712',
            email: 'tuyetnguyen123@gmail.com',
            role: 'Kế toán',
            status: 'active',
        },
        {
            account: 'tuyetnguyen@18',
            name: 'Nguyễn Văn A',
            phone: '0919256712',
            email: 'tuyetnguyen123@gmail.com',
            role: 'Kế toán',
            status: 'active',
        },
        {
            account: 'tuyetnguyen@18',
            name: 'Nguyễn Văn A',
            phone: '0919256712',
            email: 'tuyetnguyen123@gmail.com',
            role: 'Kế toán',
            status: 'active',
        },
        {
            account: 'tuyetnguyen@18',
            name: 'Nguyễn Văn A',
            phone: '0919256712',
            email: 'tuyetnguyen123@gmail.com',
            role: 'Kế toán',
            status: 'active',
        },
        {
            account: 'tuyetnguyen@18',
            name: 'Nguyễn Văn A',
            phone: '0919256712',
            email: 'tuyetnguyen123@gmail.com',
            role: 'Kế toán',
            status: 'active',
        },
        {
            account: 'tuyetnguyen@18',
            name: 'Nguyễn Văn A',
            phone: '0919256712',
            email: 'tuyetnguyen123@gmail.com',
            role: 'Kế toán',
            status: 'active',
        },
        {
            account: 'tuyetnguyen@18',
            name: 'Nguyễn Văn A',
            phone: '0919256712',
            email: 'tuyetnguyen123@gmail.com',
            role: 'Kế toán',
            status: 'active',
        },
        {
            account: 'tuyetnguyen@18',
            name: 'Nguyễn Văn A',
            phone: '0919256712',
            email: 'tuyetnguyen123@gmail.com',
            role: 'Kế toán',
            status: 'active',
        },
        {
            account: 'tuyetnguyen@18',
            name: 'Nguyễn Văn A',
            phone: '0919256712',
            email: 'tuyetnguyen123@gmail.com',
            role: 'Kế toán',
            status: 'active',
        },
    ]

    const statusName:{[key:string]: string} = {
        'active': 'Hoạt động',
        'nonactive': 'Ngưng hoạt động',
    }

    const handleUpdateClick:()=>void = ()=>{
        navigate('editAccount')
    }
    return (
        <div className='account-page page-css'>
            <h1 className = 'account-page--title page--title'>Danh sách tài khoản</h1>
            <div className = 'account-page__input'>
                <div className = 'account-page-input__role'>
                    <p>Tên vai trò</p>
                    <div className = 'account-page-input__role--input' onClick = {()=>setRoleOption(!roleOption)}>
                        <p>Tất cả</p>
                        {!roleOption && <AiFillCaretDown style = {{color: '#FF7506'}}/>}
                        { roleOption &&<AiFillCaretUp style = {{color: '#FF7506'}}/>}
                        {roleOption && <div className = 'account-page-input__role--input-option'>
                            <ul>
                                <li>Tất cả</li>
                                <li>Hoạt động</li>
                                <li>Ngưng Hoạt động</li>
                            </ul>
                        </div>}
                    </div>
                </div>
                <div className = 'account-page-input__keyword'>
                    <p>Từ khoá</p>
                    <input type = 'text' placeholder='Nhập từ khoá'/>
                    <BiSearch className = 'account-page-input__keyword-search-icon' size = {23} style = {{color: '#FF7506'}}/>
                </div>
            </div>
            <div className = 'account-page__table'>
                <div className = 'list-table'>
                    <table>
                        <tr>
                            <td width = {150}>Tên đăng nhập</td>
                            <td width = {168}>Họ tên</td>
                            <td width = {132}>Số điện thoại</td>
                            <td width = {257}>Email</td>
                            <td width = {116}>Vai trò</td>
                            <td width = {195}>Trạng thái hoạt động</td>
                            <td width = {110}></td>
                        </tr>
                        {data.map((item) => 
                            <tr>
                                <td width = {150}>{item.account}</td>
                                <td width = {168}>{item.name}</td>
                                <td width = {132}>{item.phone}</td>
                                <td width = {257}>{item.email}</td>
                                <td width = {116}>{item.role}</td>
                                <td width = {195}>
                                    <BsDot 
                                        size = {30} style = {item.status == 'active' ? {color: '#34CD26', verticalAlign: '-10px'} : {color: '#EC3740', verticalAlign: '10px'}}
                                    />{`${statusName[item.status]}`}
                                </td>
                                <td width = {110}><span onClick = {()=>handleUpdateClick()}>Cập nhật</span></td>
                            </tr>
                        )}
                    </table>
                </div>
            </div>
            <div className = "dividePage manage-account-divide-page">
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
            <div className = "equipment__create" onClick = {()=>navigate('createAccount')}>
                <BsFillPlusSquareFill size = {25} style = {{color: '#FF9138'}}/>
                <p>Thêm tài khoản</p>
            </div>
        </div>
    )
}

export default ManageAccount