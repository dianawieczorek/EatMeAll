import {createStore} from "redux";
import {rootReducer} from "../Redux/bundle";
import {composeWithDevTools} from 'redux-devtools-extension';
import {loadState, saveState} from "../ServerConnection/localStorage";

const persistedState = loadState();

const store = createStore(rootReducer,
    persistedState, composeWithDevTools());

store.subscribe(() => {
    saveState(
        {weekMeals: store.getState().weekScheduleReducer.currentWeekSchedule,
        users: store.getState().listOfUsersReducer.userList}
    )
})

export default store;
export type AppStore = ReturnType<typeof rootReducer>