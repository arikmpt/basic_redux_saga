import { all, takeLatest } from 'redux-saga/effects'
import { REQUEST_USER_DATA } from '../type/user'
import { getUserData } from './user'

export default function* IndexSaga() {
    yield all([
        takeLatest(REQUEST_USER_DATA, getUserData )
    ])
}