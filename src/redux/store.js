import {combineReducers, createStore} from "redux";
import {settingReducer} from "./settingReducer";


export const store = createStore(combineReducers({
  settingReducer: settingReducer,
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
