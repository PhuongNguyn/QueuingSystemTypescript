import IAction from "../../interfaces/action"
import IRole from "../../interfaces/roles"

export default (state:IRole[] = [], action:IAction) =>{
    switch(action.type){
        case 'getRole':
            return action.payload
        default:
            return state
    }
}