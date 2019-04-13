import { 
    REQUEST_USER_DATA, 
    SHOW_USER_DATA, 
    FAILED_GET_USER_DATA, SUCCESS_USER_DATA } from '../type/user'

const initialState = {
    loading : true,
    data : [],
    message : null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_USER_DATA :
            return {
                ...state,
                loading : true
            }
        case SHOW_USER_DATA :
            return {
                ...state,
                loading : false,
                data : action.payload
            }
        case FAILED_GET_USER_DATA :
            return {
                ...state,
                loading : false,
                message : action.payload
            }
        case SUCCESS_USER_DATA :
            return {
                ...state,
                loading : false,
                message : action.payload
            }
        default :
            return state
    }
}