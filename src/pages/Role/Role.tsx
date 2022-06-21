import { BiSearch } from 'react-icons/bi'
import './Role.css'
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { BsFillPlusSquareFill } from 'react-icons/bs'

const Role:React.FC = () =>{
    interface IData{
        role: string,
        numberUser: number,
        description: string,
    }
    const navigate = useNavigate()
    const data:IData[] = [
        {
            role: 'Kế toán',
            numberUser: 6,
            description: 'Thực hiện về nhiệm vụ thống kê số liệu và tập hợp số liệu',
        },
        {
            role: 'Bác sĩ',
            numberUser: 6,
            description: 'Thực hiện về nhiệm vụ thống kê số liệu và tập hợp số liệu',
        },
        {
            role: 'Lễ tân',
            numberUser: 6,
            description: 'Thực hiện về nhiệm vụ thống kê số liệu và tập hợp số liệu',
        },
        {
            role: 'Quản lí',
            numberUser: 6,
            description: 'Thực hiện về nhiệm vụ thống kê số liệu và tập hợp số liệu',
        },
        {
            role: 'Admin',
            numberUser: 6,
            description: 'Thực hiện về nhiệm vụ thống kê số liệu và tập hợp số liệu',
        },
        {
            role: 'Superadmin',
            numberUser: 6,
            description: 'Thực hiện về nhiệm vụ thống kê số liệu và tập hợp số liệu',
        },
    ]

    const handleUpdateClick:()=> void = () =>{
        navigate('editRole')
    }
    return (
        <div className = 'role-page page-css'>
            <h1 className = 'role-page--title page--title'>Danh sách vai trò</h1>
            <div className = 'role-page__input'>
                <div className = 'role-page-input__keyword'>
                    <p>Từ khoá</p>
                    <input type = 'text' placeholder='Nhập từ khoá'/>
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
                    {data.map((item) => 
                        <tr>
                            <td width = {225}>{item.role}</td>
                            <td width = {226}>{item.numberUser}</td>
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