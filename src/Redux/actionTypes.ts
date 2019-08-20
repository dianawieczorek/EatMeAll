import {DayDto} from "../ServerConnection/DTOs/WeekScheduleDto";
import {RandomMealDto} from "../ServerConnection/DTOs/randomMealDto";

// export const ADD_ITEM = 'addItemAction'
// export interface addItemAction {
//     type: typeof ADD_ITEM
//     newItem: string
// }
export const SET_CURRENT_WEEK_SCHEDULE = 'SET_CURRENT_WEEK_SCHEDULE';

export interface setCurrentWeekScheduleIf {
    type: typeof SET_CURRENT_WEEK_SCHEDULE
    currentWeekSchedule: Array<DayDto>
}

export const RANDOM_MEAL_CHANGE = 'RANDOM_MEAL_CHANGE';

export interface randomMealChangeIf {
    type: typeof RANDOM_MEAL_CHANGE
    randomMeal: RandomMealDto
    dayNr: number,
    mealNr: number
}

export const OPEN_MODAL = 'OPEN_MODAL';

export interface openModalIf {
    type: typeof OPEN_MODAL
    data?: JSX.Element
}

export const CLOSE_MODAL = 'CLOSE_MODAL';

export interface closeModalIf {
    type: typeof CLOSE_MODAL
}


export type Types = setCurrentWeekScheduleIf | openModalIf | closeModalIf | randomMealChangeIf// | - pipe dodaje kolejne interfejsy akcji