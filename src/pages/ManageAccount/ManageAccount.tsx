import './ManageAccount.css'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { BsDot } from 'react-icons/bs'
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { BsFillPlusSquareFill } from 'react-icons/bs'
import IAccount from '../../interfaces/account'
import { useDispatch } from 'react-redux'
import { getAccounts } from '../../redux/action/account'
import { useSelector } from 'react-redux'
import accountSelector from '../../redux/selector/accountSelector'
import { getRole } from '../../redux/action/role'
import IRole from '../../interfaces/roles'

const ManageAccount:React.FC = () =>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [roleOption, setRoleOption] = useState<boolean>(false)
    const [role, setRole] = useState<string>('all')
    const [keyword, setKeyword] = useState<string>('')
    const [currentPage, setCurrentPage] = useState<number>(1)
   
    const statusName:{[key:string]:string} = {
        'active':'Hoạt động',
        'nonactive':'Ngưng hoạt động'
    }

    const handleUpdateClick:()=>void = ()=>{
        navigate('editAccount')
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
    let accounts:IAccount[] = useSelector((state:any) => state.account)
    let roles:IRole[] = useSelector((state:any) => state.role) 
    accounts = accountSelector(role, keyword, accounts)
    const pagesLength:number = accounts.length % 9 == 0 ? accounts.length / 9 : accounts.length / 9 + 1
    let pages:number[] = []
    for(let i:number = 1; i <= pagesLength; i++){
        pages.push(i)
    }
    useEffect(()=>{
        dispatch(getRole())
        dispatch(getAccounts())
    },[])
    return (
        <div className='account-page page-css'>
            <h1 className = 'account-page--title page--title'>Danh sách tài khoản</h1>
            <div className = 'account-page__input'>
                <div className = 'account-page-input__role'>
                    <p>Tên vai trò</p>
                    <div className = 'account-page-input__role--input' onClick = {()=>setRoleOption(!roleOption)}>
                        {role != 'all'?<p>{(roles.map((item)=> item.code == role?item.name: ''))}</p>:<p>Tất cả</p>}
                        {!roleOption && <AiFillCaretDown style = {{color: '#FF7506'}}/>}
                        { roleOption &&<AiFillCaretUp style = {{color: '#FF7506'}}/>}
                        {roleOption && <div className = 'account-page-input__role--input-option'>
                            <ul>
                                <li onClick = {()=>setRole('all')}>Tất cả</li>
                                {
                                    roles.map((item) => <li onClick = {()=>setRole(item.code)}>{item.name}</li>)
                                }
                            </ul>
                        </div>}
                    </div>
                </div>
                <div className = 'account-page-input__keyword'>
                    <p>Từ khoá</p>
                    <input value = {keyword} onChange = {(e)=>setKeyword(e.target.value)} type = 'text' placeholder='Nhập từ khoá'/>
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
                        {accounts.slice((currentPage-1)*9, currentPage *9).map((item) => 
                            <tr>
                                <td width = {150}>{item.username}</td>
                                <td width = {168}>{item.name}</td>
                                <td width = {132}>{item.phone}</td>
                                <td width = {257}>{item.email}</td>
                                <td width = {116}>{roles.map((role) => role.code == item.role ? role.name : '')}</td>
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
                        <li onClick = {(e)=>handleLeftPageClick(e)}><AiOutlineCaretLeft style = {{verticalAlign: '-2.5px'}}/></li>
                        {pages.map((page)=>
                            <li onClick = {()=>setCurrentPage(page)} style = {currentPage == page ? {backgroundColor: '#FF7506', color: 'white'}: {}}>{page}</li>
                        )}
                        <li onClick = {(e)=>handleRightPageClick(e)}><AiOutlineCaretRight style = {{verticalAlign: '-2.5px'}}/></li>
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