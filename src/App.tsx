import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout/MainLayout';
import LoginLayout from './layout/LoginLayout/LoginLayout';
import DashBoard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import ForgotPassword from './pages/ForgotPassWord/ForgotPassword';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import Equipment from './pages/Equipment/Equipment';
import CreateEquipment from './pages/CreateEquipment/CreateEquipment';
import EditEquipment from './pages/EditEquipment/EditEquipment';
import EquipmentDetail from './pages/EquipmentDetail/EquipmentDetail'
import Service from './pages/Service/Service';
import CreateService from './pages/CreateService/CreateService';
import ServiceDetail from './pages/ServiceDetail/ServiceDetail';
import EditService from './pages/EditService/EditService';
import Number from './pages/Number/Number'
import CreateNumber from './pages/CreateNumber/CreateNumber';
import { useSelector } from 'react-redux';
import CreateCard from './pages/CreateNumber/CreateCard';
import NumberDetail from './pages/NumberDetail/NumberDetail';
import Report from './pages/Report/Report'
import Role from './pages/Role/Role';
import CreateRole from './pages/CreateRole/CreateRole';
import EditRole from './pages/EditRole/EditRole'
import ManageAccount from './pages/ManageAccount/ManageAccount'
import CreateAccount from './pages/CreateAccount/CreateAccount';
import EditAccount from './pages/EditAccount/EditAccount';
import UserDiary from './pages/UserDiary/UserDiary';
import UserInfo from './pages/UserInfo/UserInfo'
import LoadingBar from 'react-redux-loading-bar'
import { useEffect } from 'react';
import { auth } from './firebase/config';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function App() {
  const location = useLocation()
  const navigate = useNavigate()
  
  const createNumberCard:boolean = useSelector((state:any) => state.number.createCard)
  useEffect(()=>{
    auth.onAuthStateChanged(async (user) =>{
      if(!user){
        console.log('User is not logged in')
        navigate('/login')
        return;
      }
      if(location.pathname.split('/')[1] == 'login'){
        navigate('/')
      }
    })
  },[])
  return (
    <div className="App">
      <LoadingBar style={{ backgroundColor: '#FF7506', height: '2px', position: 'fixed', top: '0', zIndex: '50' }}/>
      {createNumberCard && <CreateCard/>}
       <Routes>
            <Route path = "/" element ={<MainLayout/>}>
              <Route index element = {<DashBoard/>}/>
              <Route path = 'equipment/listEquipment' element = {<Equipment/>}/>
              <Route path = 'equipment/listEquipment/createEquipment' element = {<CreateEquipment/>}/>
              <Route path = 'equipment/listEquipment/editEquipment' element = {<EditEquipment/>}/>
              <Route path = 'equipment/listEquipment/equipmentDetail' element = {<EquipmentDetail/>}/>
              <Route path = 'service/listService' element = {<Service/>}/>
              <Route path = 'service/listService/createService' element = {<CreateService/>}/>
              <Route path = 'service/listService/serviceDetail' element = {<ServiceDetail/>}/>
              <Route path = 'service/listService/editService' element = {<EditService/>}/>
              <Route path = 'number/listNumber' element = {<Number/>}/>
              <Route path = 'number/listNumber/createNumber' element = {<CreateNumber/>}/>
              <Route path = 'number/listNumber/numberDetail' element = {<NumberDetail/>}/>
              <Route path = 'report/listReport' element = {<Report/>}/>
              <Route path = 'setting/listRole' element = {<Role/>}/>
              <Route path = 'setting/listRole/createRole' element = {<CreateRole/>}/>
              <Route path = 'setting/listRole/editRole' element = {<EditRole/>}/>
              <Route path = 'setting/listAccount' element = {<ManageAccount/>}/>
              <Route path = 'setting/listAccount/createAccount' element = {<CreateAccount/>}/>
              <Route path = 'setting/listAccount/editAccount' element = {<EditAccount/>}/>
              <Route path = 'setting/userDiary' element = {<UserDiary/>}/>
              <Route path = 'userInfo' element = {<UserInfo/>}/>
            </Route> 
            <Route path = "/login" element ={<LoginLayout/>}>
              <Route index element = {<Login/>}/>
              <Route path = "forgotPassword" element = {<ForgotPassword/>}/>
              <Route path = "resetPassword" element = {<ResetPassword/>}/>
            </Route>
       </Routes>
    </div>
  );
}

export default App;
