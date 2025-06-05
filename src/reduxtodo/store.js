


import {createStore , combineReducers , applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension"
import { TaskReducer } from './reducer/TodoReducer';
const reducer = combineReducers({
    Task:TaskReducer
});
const initialState ={}

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))

)
export default store;


