import { put, call } from 'redux-saga/effects'
import { SHOW_USER_DATA, 
    FAILED_GET_USER_DATA, 
    SUCCESS_USER_DATA} from '../type/user'
import { apiGetUser } from './api/apiuser'

export function* getUserData() {
    try {
        const users = yield call(apiGetUser)
        yield put({ type : SHOW_USER_DATA, payload : users })
        yield put({ type : SUCCESS_USER_DATA, payload : 'Successfully get ' })
    } catch (error) {
        yield put({ type : FAILED_GET_USER_DATA, payload : 'Fatal ERROR' })
        console.log(error)
    }
}
