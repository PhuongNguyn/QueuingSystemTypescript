import { Dispatch } from "redux"

interface ICloseCreateCard{
    type: string,
    payload: boolean
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