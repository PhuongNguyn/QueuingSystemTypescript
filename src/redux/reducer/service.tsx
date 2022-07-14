import IAction from "../../interfaces/action"
import IServices from "../../interfaces/service"

export default (state:IServices[] = [], action:IAction) =>{
    switch(action.type){
        case 'getServices':
            return action.payload
        default:
            return state
    }
}