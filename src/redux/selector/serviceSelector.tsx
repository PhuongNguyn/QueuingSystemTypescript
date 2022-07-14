import IServices from "../../interfaces/service";

export default (keyword:string, activeStatus:string, services:IServices[]) =>{
    const result = services.filter((item) =>{
        let flag = true
    
       if(activeStatus == 'active'){
            if(!item.actionStatus){
                flag = false
            }
        }else if(activeStatus == 'nonactive'){
            if(item.actionStatus)
                flag = false
        }

        if(keyword){
            if(!item.name.toLowerCase().includes(keyword.toLowerCase()))
                flag = false
        }
        return flag
    })
    return result
}