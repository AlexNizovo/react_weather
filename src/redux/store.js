import {combineReducers, createStore} from "redux";
import {settingReducer} from "./settingReducer";
import { weatherReducer } from "./weatherReducer";


export const store = createStore(combineReducers({
  settingReducer: settingReducer,
  weatherReducer: weatherReducer,
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
