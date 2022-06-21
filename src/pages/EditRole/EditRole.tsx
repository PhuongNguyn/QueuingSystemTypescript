import './EditRole.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


const EditRole:React.FC = () =>{
    const navigate = useNavigate()
    const [role, setRole] = useState<string>('Kế toán')
    const [description, setDescription] = useState<string>('Chịu trách nhiệm thống kê số liệu và kiểm toán')
    return (
        <div className = 'edit-role-page page-css'>
            <h1 className = 'edit-role--title page--title'>Danh sách vai trò</h1>
            <div className = 'edit-role-page__box page-box'>
                <h1 className = 'box--title'>Thông tin vai trò</h1>
                <div className = 'edit-role-page-box__input'>
                    <div className = 'edit-role-page-box__column1'>
                        <div className = 'edit-role-page-box__input-role'>
                            <p>Tên vai trò <span>*</span></p>
                            <input value={role} type='text' placeholder='Nhập tên vai trò'/>
                        </div>
                        <div className = 'edit-role-page-box__input-description'>
                            <p>Mô tả:</p>
                            <textarea value = {description} placeholder='Nhập mô tả'></textarea>
                        </div>
                        <p className = 'edit-role-page-box__input--note'><span style = {{color: 'red'}}>*</span>Là trường thông tin bắt buộc</p>
                    </div>
                    <div className = 'edit-role-page-box__column2'>
                        <div className = 'edit-role-page-box__authorization'>
                            <p className = 'edit-role-page-box__authorization--title'>Phân quyền chức năng<span style = {{color: 'red'}}>*</span></p>
                            <div className = 'edit-role-page-box__authorization-wrapper'>
                                <div className = 'edit-role-page-box-authorization__group'>
                                    <h1 className = 'edit-role-page-box-authorization__group--title'>Nhóm chức năng A</h1>
                                    <p><input checked type = 'checkbox'/> Tất cả</p>
                                    <p><input checked type = 'checkbox'/> Chức năng X</p>
                                    <p><input checked type = 'checkbox'/> Chức năng Y</p>
                                    <p><input checked type = 'checkbox'/> Chức năng Z</p>
                                </div>
                                <div className = 'edit-role-page-box-authorization__group'>
                                    <h1 className = 'edit-role-page-box-authorization__group--title'>Nhóm chức năng B</h1>
                                    <p><input type = 'checkbox'/> Tất cả</p>
                                    <p><input type = 'checkbox'/> Chức năng X</p>
                                    <p><input type = 'checkbox'/> Chức năng Y</p>
                                    <p><input type = 'checkbox'/> Chức năng Z</p>
                                </div>
                                <div className='edit-role-page-box--scrollbar'>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "edit-equipment__button">
                <div className = "edit-equipment__button-wrapper">
                    <button onClick = {()=>navigate('/setting/listRole')} className = "edit-equipment__button--close">Huỷ bỏ</button>
                    <button className = "edit-equipment__button--save">Cập nhật</button>
                </div>
            </div>
        </div>
    )
}

export default EditRole