import { Dispatch } from "redux";
import { collection, getDocs } from "firebase/firestore"; 
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { db } from "../../firebase/config";
import { QuerySnapshot, DocumentData } from "firebase/firestore";

export const getServices:() => any = () => async(dispatch:Dispatch) =>{
    try {
        dispatch(showLoading())
        const query:QuerySnapshot<DocumentData> = await getDocs(collection(db, 'service'))
        let result:any = []
        query.forEach((doc) => result.push(doc.data()))
        console.log(result)
        dispatch({type: 'getServices', payload: result})
    } catch (error) {
        console.log(error)
    } finally{
        dispatch(hideLoading())
    }
}