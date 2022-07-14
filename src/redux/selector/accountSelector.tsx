import IAccount from "../../interfaces/account";

export default (role: string, keyword: string, accounts:IAccount[])=>{
    accounts = accounts.filter((account) => {
        let flag = true

        if(role != 'all'){
            if(!(account.role == role)){
                flag = false
            }
        }

        if(keyword != ''){
            if(!account.name.toLowerCase().includes(keyword)){
                flag = false
            }
        }
        return flag
    })
    
    return accounts
}