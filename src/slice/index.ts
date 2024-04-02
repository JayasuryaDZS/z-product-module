import { combineReducers } from 'redux'
import SampleReducer from './Sample/reducer'
import ProductReducer from './Products/reducer'

const rootReducer = combineReducers({
    Sample: SampleReducer,
    Product : ProductReducer
})

export default rootReducer