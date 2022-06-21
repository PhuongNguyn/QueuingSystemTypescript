import './ForgotPassword.css'

const ForgotPassword:React.FC = () =>{
    return (
        <div className = "forgot-password">
            <img src='/images/frame.png' alt='forgot-password-banner' id = "forgot-password-banner"/>
            <h1 className = "forgot-password--title">Đặt lại mật khẩu</h1>
            <p className = "forgot-password--content">Vui lòng nhập email để đặt lại mật khẩu của bạn*</p>
            <input type = "text" className = "forgot-passowrd--email-input"/>
            <button className = "forgot-password--button-close">Huỷ</button>
            <button className = "forgot-password--button-continue">Tiếp tục</button>
        </div>
    )
}

export default ForgotPassword