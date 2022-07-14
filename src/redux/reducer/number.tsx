import INumber from '../../interfaces/number'

interface IAction {
    type: string,
    payload: any
}

interface IState{
    createCard: boolean,
    numbers: INumber[],
}


let initialState:IState = {
    createCard: false,
    numbers: [],
}

export default  (state:IState = initialState, action:IAction) => {
    switch (action.type){
        case 'getNumber':
            return {...state, numbers: action.payload}
        case 'createNumber':
            return {...state, createCard: true}
        case 'closeCreateCard':
            return {...state, createCard: action.payload}
        default: 
            return state
    }
}