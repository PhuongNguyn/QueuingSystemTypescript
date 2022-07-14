import { Dispatch } from "redux";
import { collection, getDocs } from "firebase/firestore"; 
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { db } from "../../firebase/config";
import { QuerySnapshot, DocumentData } from "firebase/firestore";


export const getAccounts:()=> any = () => async (dispatch:Dispatch) =>{
    try {
        dispatch(showLoading())
        const query:QuerySnapshot<DocumentData> = await getDocs(collection(db, 'account'))
        let result:any = []
        query.forEach((doc) => result.push(doc.data()))
        dispatch({type: 'getAccounts', payload: result})
    } catch (error) {
        console.log(error)
    } finally{
        dispatch(hideLoading())
    }
}