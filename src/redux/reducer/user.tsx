interface IResponseLogin{
    accessToken: string,
    email: string | null,
}

interface IAction{
    type:string,
    payload: IResponseLogin
}

interface IState{
    accessToken: string,
    email: string,
    message: string,
}



export default (state:IState = {accessToken: '', email: '', message: ''}, action:IAction) =>{
    switch(action.type){
        case 'loginError':
            return {...state, message: action.payload}
        case 'login':
            return action.payload
        default:
            return state
    }
}