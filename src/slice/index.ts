import { combineReducers } from 'redux'
import SampleReducer from './Sample/reducer'

const rootReducer = combineReducers({
    Sample: SampleReducer
})

export default rootReducer