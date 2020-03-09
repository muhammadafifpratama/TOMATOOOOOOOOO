import { combineReducers } from 'redux';
import loginreducer from './loginreducer'
import usereducer from './usereducer'

export default combineReducers({
    loginkucing: loginreducer,
    cekuser: usereducer
})