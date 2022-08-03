import { combineReducers } from 'redux'
import Users from '../reducers/Users'
import Cart from './Cart'
import Verify from '../reducers/Verify'
const rootReducers = combineReducers({
    users: Users,
    cart: Cart,
    verify: Verify
})
export default rootReducers