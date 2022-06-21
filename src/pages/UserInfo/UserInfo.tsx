import './UserInfo.css'
import { BiCamera } from 'react-icons/bi'

const UserInfo:React.FC = () =>{
    return (
        <div className = "user-info">
            <div className = "user-info-card">
                <div className = "user-info-card__avatar">
                    <div className = "user-info-card__avatar--avatar-circle" style = {{background: "url(/images/user-big-avatar.png)", backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                        <div className = "user-info-card__avatar--camera"><BiCamera size = {30} style = {{color: 'white'}}/></div>
                    </div>
                    <div className = "user-info-card__avatar--name"><p>Lê Quỳnh Ái Vân</p></div>
                </div>
               
                <div className = "user-info-card__input-column2">
                    <div className = "user-info-card-column2__input-name">
                        <p>Tên người dùng</p>
                        <input type = "text" value = {'Lê Quỳnh Ái Vân'} disabled/>
                    </div>
                    <div className = "user-info-card-column2__input-phone">
                        <p>Số điện thoại</p>
                        <input type = "text" value = {'0767375921'} disabled/>
                    </div>
                    <div className = "user-info-card-comlumn2__input-email">
                        <p>Email</p>
                        <input type = "text" value = {'adminSS01@domain.com'} disabled/>
                    </div>
                </div>
                <div className = "user-info-card__input-column1">
                <div className = "user-info-card-column1__input-account">
                        <p>Tên đăng nhập</p>
                        <input type = "text" value = {'lequynhaivan01'} disabled/>
                    </div>
                    <div className = "user-info-card-column1__input-password">
                        <p>Mật khẩu</p>
                        <input type = "text" value = {'311940211'} disabled/>
                    </div>
                    <div className = "user-info-card-comlumn1__input-role">
                        <p>Vai trò</p>
                        <input type = "text" value = {'Kế toán'} disabled/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserInfo