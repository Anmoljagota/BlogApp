import {reducer as user_data} from "./users/reducer"
import {legacy_createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
const rootreducer=combineReducers({
    user_data
})
const store=legacy_createStore(rootreducer,applyMiddleware(thunk))
export {store}