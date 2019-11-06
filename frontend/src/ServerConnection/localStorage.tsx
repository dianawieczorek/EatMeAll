import Member from "../Redux/Model/Member";
import {MealDto} from "./DTOs/WeekScheduleDto";

const MEMBERS = 'members';

export const  saveMembers = (members:Array<Member>) => {
    try {
        const serializedState = JSON.stringify(members);
        localStorage.setItem(MEMBERS, serializedState);
    }catch (err) {
        // ignore write errors
    }
};

export const loadMembers = () => {
    try {
        let serializedMeals = localStorage.getItem(MEMBERS);
        if (serializedMeals === null) {
            saveMembers ( [new Member('default')]);
            serializedMeals = localStorage.getItem(MEMBERS);
        }
        return JSON.parse(serializedMeals!);
    } catch (err) {

    }
};

export const  saveMealToCopy = (meal:MealDto) => {
    try {
        const serializedState = JSON.stringify(meal);
        localStorage.setItem('meal', serializedState);
    }catch (err) {
        // ignore write errors
    }
};

export const  loadMealToPaste = () => {
    try {
        let serializedMeal = localStorage.getItem('meal');
        if (serializedMeal === null) {
            window.alert("żaden posiłek nie został skopiowany")
        }
        return JSON.parse(serializedMeal!)
    } catch (err) {

    }
};

