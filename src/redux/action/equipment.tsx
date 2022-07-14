import { Dispatch } from "redux";
import { collection, getDocs } from "firebase/firestore"; 
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { db } from "../../firebase/config";
import { QuerySnapshot, DocumentData } from "firebase/firestore";

// interface IEquipment{
//     name: string,
//     code: string,
//     service: string,
//     connectStatus: boolean, 
//     account: string, 
//     password: string,
//     type: string, 
//     actionStatus: boolean,
//     ipAddress: string,
// }

export const getEquipment:() => any = () => async(dispatch:Dispatch) =>{
    try {
        dispatch(showLoading())
        const query:QuerySnapshot<DocumentData> = await getDocs(collection(db, 'Equipment'))
        let result:any = []
        query.forEach((doc) => result.push(doc.data()))
        dispatch({type: 'getEquipment', payload: result})
    } catch (error) {
        console.log(error)
    } finally{
        dispatch(hideLoading())
    }
} 