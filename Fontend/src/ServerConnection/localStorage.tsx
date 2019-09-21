import {GLOBAL_CONFIG} from "../Redux/reducers";

export const loadMeals = () => {
    try {
        const serializedMeals = localStorage.getItem('weekMeals');
        if (serializedMeals === null) {
            return GLOBAL_CONFIG.memberList.map(u => {
                return {user: u, weekSchedule: []}
            });
        }
        return JSON.parse(serializedMeals);
    } catch (err) {
        return GLOBAL_CONFIG.memberList.map(u => {
            return {user: u, weekSchedule: []}
        });
    }
};

export const loadUsers = () => {
    try {
        const serializedUsers= localStorage.getItem('users');
        if (serializedUsers === null) {
            return ["member"];
        }
        return JSON.parse(serializedUsers);
    } catch (err) {
        return ["member"];
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