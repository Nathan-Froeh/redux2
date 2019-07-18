import {ideasReducer} from './ideasReducer';
import {combineReducers} from 'redux'


const allReducers = combineReducers({
  ideas: ideasReducer
})

export default allReducers;