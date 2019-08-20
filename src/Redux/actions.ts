import {
    CLOSE_MODAL, closeModalIf,
    OPEN_MODAL, openModalIf, RANDOM_MEAL_CHANGE, randomMealChangeIf,
    SET_CURRENT_WEEK_SCHEDULE,
    setCurrentWeekScheduleIf
} from "./actionTypes";


import {DayDto} from "../ServerConnection/DTOs/WeekScheduleDto";
import {RandomMealDto} from "../ServerConnection/DTOs/randomMealDto";


export const setCurrentWeekSchedule = (aCurrentWeekSchedule: Array<DayDto>): setCurrentWeekScheduleIf => {
    return {
        type: SET_CURRENT_WEEK_SCHEDULE,
        currentWeekSchedule: aCurrentWeekSchedule
    }
};

export const randomMealChange = (aRandomMeal: RandomMealDto): randomMealChangeIf => {
    return {
        type: RANDOM_MEAL_CHANGE,
        randomMeal: aRandomMeal,
    }
};

export const openModal = (aData: JSX.Element): openModalIf => {
    return {
        type: OPEN_MODAL,
        data: aData
    }
};

export const closeModal = (): closeModalIf => {
    return {
        type: CLOSE_MODAL,
    }
};
