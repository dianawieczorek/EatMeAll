import {createStore} from "redux";
import {rootReducer} from "../Redux/bundle";
import {composeWithDevTools} from 'redux-devtools-extension';
import {loadMembers, saveMembers} from "../ServerConnection/localStorage";

const persistedState = loadMembers();

const store = createStore(rootReducer,
    persistedState, composeWithDevTools());

store.subscribe(() => {
        saveMembers(store.getState().weekScheduleReducer.members);
    }
);

export default store;
export type AppStore = ReturnType<typeof rootReducer>