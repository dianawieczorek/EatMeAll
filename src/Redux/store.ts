import {createStore} from "redux";
import {rootReducer} from "../Redux/bundle";
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools());

export default store;
export type AppStore = ReturnType<typeof rootReducer>