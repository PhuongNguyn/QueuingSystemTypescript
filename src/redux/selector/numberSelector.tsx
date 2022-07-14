import INumber from "../../interfaces/number";

export default (serviceName: string, status: string, source: string, timeFrom: string, timeTo: string, keyword:string,numbers: INumber[])=>{
    const result = numbers.filter((item) =>{
        let flag = true
        if(serviceName != 'all'){
            if(serviceName != item.serviceCode)
                flag = false
        }

        if(status != 'all'){
            if(status != item.status)
                flag = false
        }

        if(source != 'all'){
            if(source.toLowerCase() != item.source.toLowerCase())
                flag = false
        }

        if(keyword != ''){
            if(!item.customerName.toLowerCase().includes(keyword.toLowerCase()))
                flag = false
        }
        if(timeFrom != '1/1/1999' && timeTo != '1/1/1999'){
            const dateObjectTimeFrom = item.orderTime.split(' - ')[1]
            const dateTimeFrom = dateObjectTimeFrom.split('/')
            const timeFromVariable = timeFrom.split('/')
            const timeToVariable = timeTo.split('/')
            
            if(!(new Date(parseInt(dateTimeFrom[2]), parseInt(dateTimeFrom[1]) - 1, 
                parseInt(dateTimeFrom[0])) >= new Date(parseInt(timeFromVariable[2]),
                parseInt(timeFromVariable[1]) - 1, parseInt(timeFromVariable[0])) 
                && new Date(parseInt(dateTimeFrom[2]), parseInt(dateTimeFrom[1]) - 1, 
                parseInt(dateTimeFrom[0])) <= new Date(parseInt(timeToVariable[2]), parseInt(timeToVariable[1]) - 1, parseInt(timeToVariable[0])))){
                flag = false
            }
        }
       
        return flag
    })
    
    return result
}