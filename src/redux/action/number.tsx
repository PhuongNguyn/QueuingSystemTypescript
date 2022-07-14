import { Dispatch } from "redux";
import { collection, DocumentData, getDocs, QuerySnapshot } from "firebase/firestore"; 
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { db } from "../../firebase/config";

interface ICloseCreateCard{
    type: string,
    payload: boolean
}

export const getNumbers:() => any = () => async(dispatch:Dispatch) =>{
    try {
        dispatch(showLoading())
        const query:QuerySnapshot<DocumentData> = await getDocs(collection(db, 'number'))
        let result:any[] = []
        query.forEach((doc) => result.push(doc.data()))
        dispatch({type: 'getNumber', payload: result})
    } catch (error) {
        console.log(error)
    } finally{
        dispatch(hideLoading())
    }
}

export const createNumber: (service: string) => any = (service: string) => (dispatch: Dispatch) => {
    dispatch({
        type: 'createNumber',
        payload: true,
    })
}

export const closeCreateNumberCard: () => ICloseCreateCard = () =>{
    return {
        type: 'closeCreateCard',
        payload: false,
    }
}