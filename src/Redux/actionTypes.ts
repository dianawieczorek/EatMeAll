import {DayDto} from "../ServerConnection/DTOs/WeekScheduleDto";
import {RandomMealDto} from "../ServerConnection/DTOs/randomMealDto";
import {GroupproductsDto} from "../ServerConnection/DTOs/ShoppingListDto";

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

export const OPEN_SIDEDRAWER = 'OPEN_SIDEDRAWER';

export interface openSidedrawerIf {
    type: typeof OPEN_SIDEDRAWER
}

export const CLOSE_SIDEDRAWER = 'CLOSE_SIDEDRAWER';

export interface closeSidedrawerIf {
    type: typeof CLOSE_SIDEDRAWER
}

export const SET_PRODUCT_LIST = 'SET_PRODUCT_LIST';

export interface setProductListIf {
    type: typeof SET_PRODUCT_LIST
    categoryListOfProduct: GroupproductsDto
}

export const SET_USER_NAME = 'SET_USER_NAME';
export interface setUserNameIf {
    type: typeof SET_USER_NAME
    userName: string
}
export const DELETE_USERS = 'DELETE_USERS';
export interface deleteUsersIf {
    type: typeof DELETE_USERS
}

export const DELETE_USER = 'DELETE_USER';
export interface deleteUserIf {
    type: typeof DELETE_USER
    userName: string

}

export type Types = setCurrentWeekScheduleIf | openModalIf | closeModalIf | randomMealChangeIf | openSidedrawerIf | closeSidedrawerIf |setProductListIf | setUserNameIf |deleteUsersIf |deleteUserIf