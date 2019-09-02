import {createStore} from "redux";
import {rootReducer} from "../Redux/bundle";
import {composeWithDevTools} from 'redux-devtools-extension';
import {loadState, saveState} from "../ServerConnection/localStorage";

const persistedState=loadState();

const store = createStore( rootReducer,
    persistedState, composeWithDevTools());

store.subscribe(()=>{
    saveState(store.getState().weekScheduleReducer)
})

export default store;
export type AppStore = ReturnType<typeof rootReducer>