import { combineReducers } from 'redux'
import SampleReducer from './Sample/reducer'
import ProductReducer from './Products/reducer'
import Subscription from './Subscription/reducer'

const rootReducer = combineReducers({
    Sample: SampleReducer,
    Product : ProductReducer,
    Subscription:Subscription
})

export default rootReducer