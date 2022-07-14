import { BiSearch } from 'react-icons/bi'
import './Role.css'
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { BsFillPlusSquareFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getRole } from '../../redux/action/role'

const Role:React.FC = () =>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [keyword, setKeyword] = useState<string>('')

    const handleUpdateClick:()=> void = () =>{
        navigate('editRole')
    }

    const roles = useSelector((state:any) => state.role.filter((item:any) => {
        if(keyword != ''){
            if(item.name.toLowerCase().includes(keyword.toLowerCase()))
                return true
            else
                return false
        }else{
            return true
        }
    }))

    useEffect(()=>{
        dispatch(getRole())
    },[])
    return (
        <div className = 'role-page page-css'>
            <h1 className = 'role-page--title page--title'>Danh sách vai trò</h1>
            <div className = 'role-page__input'>
                <div className = 'role-page-input__keyword'>
                    <p>Từ khoá</p>
                    <input value={keyword} onChange = {(e) => setKeyword(e.target.value)} type = 'text' placeholder='Nhập từ khoá'/>
                    <BiSearch size = {23} className='role-page-input__keyword--search-icon'/>
                </div>
            </div>
            <div className = 'role-page__table list-table'>
                <table>
                    <tr>
                        <td width = {225}>Tên vai trò</td>
                        <td width = {226}>Số người dùng</td>
                        <td width = {539}>Mô tả</td>
                        <td width = {126}></td>
                    </tr>
                    {roles.map((item:any) => 
                        <tr>
                            <td width = {225}>{item.name}</td>
                            <td width = {226}>{item.numberOfUser}</td>
                            <td width = {539}>{item.description}</td>
                            <td width = {126}><span onClick = {()=>handleUpdateClick()}>Cập nhật</span></td>
                        </tr>
                    )}
                </table>
            </div>
            {/* <div className = "dividePage role-page__dividePage">
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
            </div> */}
            <div className = "equipment__create role__create" onClick = {()=>navigate('createRole')}>
                <BsFillPlusSquareFill size = {25} style = {{color: '#FF9138'}}/>
                <p>Thêm vai trò</p>
            </div>
        </div>
    )
}

export default Role