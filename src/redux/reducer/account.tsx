import IAction from "../../interfaces/action";

export default (state = [], action:IAction)=>{
    switch(action.type){
        case 'getAccounts':
            return action.payload
        default:
            return state
    }
}