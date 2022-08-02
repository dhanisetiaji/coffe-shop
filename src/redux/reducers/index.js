import { combineReducers } from 'redux'
import Users from '../reducers/Users'
import Auth from '../reducers/Auth'
import Verify from '../reducers/Verify'
const rootReducers = combineReducers({
    users: Users,
    auth: Auth,
    verify: Verify
})
export default rootReducers