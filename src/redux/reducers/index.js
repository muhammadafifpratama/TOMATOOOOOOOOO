import { combineReducers } from 'redux';
import loginreducer from './loginreducer'
import usereducer from './usereducer'
import homereducer from './homereducer'
import isirestoran from './isirestoran'

export default combineReducers({
    loginkucing: loginreducer,
    cekuser: usereducer,
    home: homereducer,
    isirestoran: isirestoran
})