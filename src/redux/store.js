import {applyMiddleware, combineReducers, createStore} from "redux";
import {settingReducer} from "./settingReducer";
import { weatherReducer } from "./weatherReducer";
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const middlewares = composeWithDevTools(applyMiddleware(
  thunk
))

export const store = createStore(combineReducers({
  settingReducer: settingReducer,
  weatherReducer: weatherReducer,
}), middlewares)
