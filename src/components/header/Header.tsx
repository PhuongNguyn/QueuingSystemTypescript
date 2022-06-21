import './Header.css'
import { useLocation} from 'react-router-dom'
import {BiChevronRight} from 'react-icons/bi'
import {AiFillBell} from 'react-icons/ai'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Header:React.FC = () =>{
    interface ITitleURL {
        [key: string]: string, 
    }
    const navigate = useNavigate()
    const route = useLocation()
    const eachRoute:String[] = route.pathname.split('/').slice(1)
    const [notification, setNotification] = useState<boolean>(false)
    const titleUrl:ITitleURL = {
        '': 'Dashboard',
        'equipment': 'Thiết bị',
        'listEquipment':'Danh sách thiết bị',
        'service': 'Dịch vụ',
        'listService': 'Danh sách dịch vụ',
        'number':'Cấp số',
        'listNumber': 'Danh sách cấp số',
        'setting':'Cài đặt hệ thống',
        'manageRoles': 'Quản lý vai trò',
        'manageAccount': 'Quản lý tài khoản',
        'userDiary': 'Nhật ký người dùng',
        'userInfo': 'Thông tin cá nhân',
        'createEquipment': 'Thêm thiết bị',
        'equipmentDetail': 'Chi tiết thiết bị',
        'editEquipment': 'Cập nhật thiết bị',
        'createService': 'Thêm dịch vụ',
        'editService': 'Cập nhật',
        'serviceDetail': 'Chi tiết dịch vụ',
        'createNumber': 'Cấp số mới',
        'numberDetail': 'Chi tiết',
        'report': 'Báo cáo',
        'listReport': 'Lập báo cáo',
        'listRole':'Quản lý vai trò',
        'createRole': 'Thêm vai trò',
        'editRole': 'Cập nhật vai trò',
        'listAccount': 'Quản lí tài khoản',
        'createAccount': 'Thêm tài khoản',
        'editAccount': 'Cập nhật tài khoản'
    }
    const notificationData = [
        {

        },
        {

        },
        {

        },
        {

        },
        {

        },
        {
            
        },
    ]
    return (
        <div className = "header">
            <div className = "header-wrapper">
                <div className = "header__title">
                    {eachRoute.map((item) => <span>{titleUrl[`${item}`]} <BiChevronRight className = "header__title--arrow" style = {{verticalAlign: '-4px'}}/> </span>)}
                </div>
                <div className = "header__user">
                    <div onClick = {()=>setNotification(!notification)} className = "header__user--notification" style = {notification ? {background: '#FF7506'} : {}}>
                        <AiFillBell size = {22} style = {!notification ? {color: '#FFAC6A'}: {color: 'white'}}/>
                    </div>
                    <div onClick = {()=>navigate('/userInfo')} className = "header-user__user-infor">
                        <div style = {{background: "url(/images/user-avatar.png)"}} className = 'header-user__user-infor--avatar'></div>
                        <div className = "header-user__user-info--content">
                            <p className = "header-user__user-infor--greet">Xin chào</p>
                            <p className = "header-user__user-infor--name">Lê Quỳnh Ái Vân</p>
                        </div>
                    </div>
                </div>
                {notification && <div className = "header__notification-table">
                    <div className = "header__notificaation-table--title">
                        <h3>Thông báo</h3>
                    </div>
                    <div className = "header-notification-table__content">
                        <div className = "header-notification-table__content--scroll-bar">
                        </div>
                     {notificationData.map((item) => 
                        <div className = "header-notification-table-content__row">
                            <div className = 'header-notification-table-content__row-wrapper'>
                                <p className = 'header-notification-table-content__row--name'>Người dùng: Nguyễn Thị Thuỳ Dung</p>
                                <p className = 'header-notification-table-content__row--info'>Thời gian nhận số: 12h20 ngày 30/11/2021</p>
                            </div>
                        </div>
                     )}
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default Header