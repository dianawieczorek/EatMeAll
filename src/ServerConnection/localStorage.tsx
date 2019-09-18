import {USER_LIST_INITIAL_STATE} from "../Redux/reducers";

export const loadMeals = () => {
    try {
        const serializedMeals = localStorage.getItem('weekMeals');
        if (serializedMeals === null) {
            return USER_LIST_INITIAL_STATE.userList.map(u => {
                return {user: u, weekSchedule: []}
            });
        }
        return JSON.parse(serializedMeals);
    } catch (err) {
        return USER_LIST_INITIAL_STATE.userList.map(u => {
            return {user: u, weekSchedule: []}
        });
    }
};

export const loadUsers = () => {
    try {
        const serializedUsers= localStorage.getItem('users');
        if (serializedUsers === null) {
            return ["user"];
        }
        return JSON.parse(serializedUsers);
    } catch (err) {
        return ["user"];
    }
};

export const  saveWeekMeals = (state:any) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('weekMeals', serializedState);
    }catch (err) {
        // ignore write errors
    }
}

export const  saveUsers= (state:any) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('users', serializedState);
    }catch (err) {
        // ignore write errors
    }
}