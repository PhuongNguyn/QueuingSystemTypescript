import IEquipment from "../../interfaces/equipment";

export default (actionStatus:string, connectStatus:string, keyword:string,equipments:IEquipment[]) =>{
    const result = equipments.filter((item) =>{
        let flag = true
        if(actionStatus == 'active'){
            if(item.actionStatus == false){
                flag = false
            }
        }else if(actionStatus == 'nonactive'){
            if(item.actionStatus == true)
                flag = false
        }

        if(connectStatus == 'active'){
            if(item.connectStatus == false){
                flag = false
            }
        }else if(connectStatus == 'nonactive'){
            if(item.connectStatus == true){
                flag = false
            }
        }

        if(keyword != ''){
            if(item.name.toLowerCase().includes(keyword.toLowerCase())){
            }else{
                flag = false
            }
        }

        return flag
    })
    return result
}