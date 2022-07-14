import { Dispatch } from "redux";
import { signInWithEmailAndPassword, signOut, UserCredential } from "firebase/auth";
import { auth } from "../../firebase/config";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import {NavigateFunction} from 'react-router-dom'

interface IResponseLogin{
    accessToken: string,
    email: string | null,
    message: string
}

export const login:(email: string, password: string, navigate:NavigateFunction) => any = (email: string, password: string, navigate:NavigateFunction) => async(dispatch: Dispatch) =>{
    try {
        dispatch(showLoading())
        const result:UserCredential = await signInWithEmailAndPassword(auth, email, password)
        console.log(result.user)
        const accessToken:string = await result.user.getIdToken()
        const response:IResponseLogin = {
            accessToken: accessToken,
            email: result.user.email,
            message: '',
        }
        dispatch({type: 'login', payload: response})
        navigate('/')
    } catch (error) {
        console.log(error)
        dispatch({type: 'loginError', payload: 'Sai tên đăng nhập hoặc mật khẩu'})
    } finally{
        dispatch(hideLoading())
    }
}

export const logOut:(navigate:NavigateFunction) => any = (navigate:NavigateFunction) => async(dispatch:Dispatch)=>{
    try {
        dispatch(showLoading())
        const result = await signOut(auth)
    } catch (error) {
        console.log(error)
    } finally{
        dispatch(hideLoading())
    }
}