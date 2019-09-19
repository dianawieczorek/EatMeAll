import {createStore} from "redux";
import {rootReducer} from "../Redux/bundle";
import {composeWithDevTools} from 'redux-devtools-extension';
import {loadMeals, loadUsers, saveUsers, saveWeekMeals} from "../ServerConnection/localStorage";

const persistedState = loadUsers() && loadMeals();

const store = createStore(rootReducer,
    persistedState, composeWithDevTools());

store.subscribe(() => {
        saveUsers(store.getState().listOfUsersReducer.userList);
        saveWeekMeals(store.getState().weekScheduleReducer.currentWeekSchedule);
    }
);

export default store;
export type AppStore = ReturnType<typeof rootReducer>