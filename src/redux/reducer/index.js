import { combineReducers } from 'redux'
import user from './user'

const IndexReducer = combineReducers ({
    user : user
})

export default IndexReducer