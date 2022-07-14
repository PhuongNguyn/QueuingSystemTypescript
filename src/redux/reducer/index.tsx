import { combineReducers } from "redux"
import number from "./number"
import { loadingBarReducer } from "react-redux-loading-bar"
import user from "./user"
import equipment from "./equipment"
import service from "./service"
import role from "./role"
import account from "./account"

export default combineReducers({
    number: number,
    loadingBar: loadingBarReducer,
    user: user,
    equipment: equipment,
    service: service,
    role: role,
    account: account
})