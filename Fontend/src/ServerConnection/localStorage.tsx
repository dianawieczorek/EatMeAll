import {GLOBAL_CONFIG} from "../Redux/reducers";
import Geberish243874587293874987 from "../Redux/Model/Geberish243874587293874987";

export const loadMeals = () => {
    try {
        const serializedMeals = localStorage.getItem('weekMeals');
        if (serializedMeals === null) {
            return GLOBAL_CONFIG.memberList.map(u => {
                return {member: u, weekSchedule: new Geberish243874587293874987().weekSchedule}
            });
        }
        return JSON.parse(serializedMeals);
    } catch (err) {

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