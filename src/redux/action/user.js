import { REQUEST_USER_DATA } from '../type/user'

export const getUser = (data) => {
    return {
        type : REQUEST_USER_DATA,
        payload : data
    }
}