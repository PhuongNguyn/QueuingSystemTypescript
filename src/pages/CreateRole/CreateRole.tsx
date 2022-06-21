import './CreateRole.css'
import { useNavigate } from 'react-router-dom'


const CreateRole:React.FC = () =>{
    const navigate = useNavigate()
    return (
        <div className = 'create-role-page page-css'>
            <h1 className = 'create-role--title page--title'>Danh sách vai trò</h1>
            <div className = 'create-role-page__box page-box'>
                <h1 className = 'box--title'>Thông tin vai trò</h1>
                <div className = 'create-role-page-box__input'>
                    <div className = 'create-role-page-box__column1'>
                        <div className = 'create-role-page-box__input-role'>
                            <p>Tên vai trò <span>*</span></p>
                            <input type='text' placeholder='Nhập tên vai trò'/>
                        </div>
                        <div className = 'create-role-page-box__input-description'>
                            <p>Mô tả:</p>
                            <textarea placeholder='Nhập mô tả'></textarea>
                        </div>
                        <p className = 'create-role-page-box__input--note'><span style = {{color: 'red'}}>*</span>Là trường thông tin bắt buộc</p>
                    </div>
                    <div className = 'create-role-page-box__column2'>
                        <div className = 'create-role-page-box__authorization'>
                            <p className = 'create-role-page-box__authorization--title'>Phân quyền chức năng<span style = {{color: 'red'}}>*</span></p>
                            <div className = 'create-role-page-box__authorization-wrapper'>
                                <div className = 'create-role-page-box-authorization__group'>
                                    <h1 className = 'create-role-page-box-authorization__group--title'>Nhóm chức năng A</h1>
                                    <p><input type = 'checkbox'/> Tất cả</p>
                                    <p><input type = 'checkbox'/> Chức năng X</p>
                                    <p><input type = 'checkbox'/> Chức năng Y</p>
                                    <p><input type = 'checkbox'/> Chức năng Z</p>
                                </div>
                                <div className = 'create-role-page-box-authorization__group'>
                                    <h1 className = 'create-role-page-box-authorization__group--title'>Nhóm chức năng B</h1>
                                    <p><input type = 'checkbox'/> Tất cả</p>
                                    <p><input type = 'checkbox'/> Chức năng X</p>
                                    <p><input type = 'checkbox'/> Chức năng Y</p>
                                    <p><input type = 'checkbox'/> Chức năng Z</p>
                                </div>
                                <div className='create-role-page-box--scrollbar'>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "create-equipment__button">
                <div className = "create-equipment__button-wrapper">
                    <button onClick = {()=>navigate('/setting/listRole')} className = "create-equipment__button--close">Huỷ bỏ</button>
                    <button className = "create-equipment__button--save">Thêm</button>
                </div>
            </div>
        </div>
    )
}

export default CreateRole