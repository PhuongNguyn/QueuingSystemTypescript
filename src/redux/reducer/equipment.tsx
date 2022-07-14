interface IEquipment{
    name: string,
    code: string,
    service: string,
    connectStatus: boolean, 
    account: string, 
    password: string,
    type: string, 
    actionStatus: boolean,
    ipAddress: string,
}

interface IAction {
    type: string,
    payload: any
}

export default (state:IEquipment[] = [], action:IAction) =>{
    switch(action.type){
        case 'getEquipment':
            return action.payload
        default: 
            return state
    }
}