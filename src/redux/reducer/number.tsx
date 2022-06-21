interface IAction {
    type: string,
    payload: any
}

interface IState{
    createCard: boolean
}

let initialState:IState = {
    createCard: false,
}

export default  (state:IState = initialState, action:IAction) => {
    switch (action.type){
        case 'createNumber':
            return {...state, createCard: true}
        case 'closeCreateCard':
            return {...state, createCard: action.payload}
        default: 
            return state
    }
}