import {DayDietDto} from "../ServerConnection/DTOs/WeekScheduleDto";
import {RandomMealDto} from "../ServerConnection/DTOs/randomMealDto";
import {GroupproductsDto} from "../ServerConnection/DTOs/ShoppingListDto";
import {ProductsInCategoryDto, ProductWholeDataDto} from "../ServerConnection/DTOs/AllProductsDto";

export const SET_CURRENT_WEEK_SCHEDULE = 'SET_CURRENT_WEEK_SCHEDULE';

export interface setCurrentWeekScheduleIf {
    type: typeof SET_CURRENT_WEEK_SCHEDULE
    currentWeekSchedule: Array<DayDietDto>
}

export const RANDOM_MEAL_CHANGE = 'RANDOM_MEAL_CHANGE';

export interface randomMealChangeIf {
    type: typeof RANDOM_MEAL_CHANGE
    randomMeal: RandomMealDto
    dayNr: number,
    mealNr: number
}

export const COPY_MEAL = 'COPY_MEAL';

export interface copyMealIf {
    type: typeof COPY_MEAL
    mealToCopy: RandomMealDto
}

export const PASTE_MEAL = 'PASTE_MEAL';

export interface pasteMealIf {
    type: typeof PASTE_MEAL
    mealToPaste: RandomMealDto
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

export const ADD_MEMBER_NAME = 'ADD_MEMBER_NAME';

export interface setUserNameIf {
    type: typeof ADD_MEMBER_NAME
    userName: string
}

export const DELETE_MEMBERS = 'DELETE_MEMBERS';

export interface deleteUsersIf {
    type: typeof DELETE_MEMBERS
}

export const DELETE_MEMBER = 'DELETE_MEMBER';

export interface deleteUserIf {
    type: typeof DELETE_MEMBER
    userName: string

}

export const SET_CURRENT_MEMBER = 'SET_CURRENT_MEMBER';

export interface setCurrentMemberIf {
    type: typeof SET_CURRENT_MEMBER
    memberName: string

}

export const CHANGE_CHECKED_DAY = 'CHANGE_CHECKED_DAY';

export interface changeCheckboxIf {
    type: typeof CHANGE_CHECKED_DAY
    dayName: string
}

export const ADD_PREP_STEP = 'ADD_PREP_STEP';

export interface addPrepStepIf {
    type: typeof ADD_PREP_STEP
    step: string
}

export const DELETE_PREP_STEP = 'ADD_PREDELETE_PREP_STEPP_STEP';

export interface deletePrepStepIf {
    type: typeof DELETE_PREP_STEP
    step: string
}

export const CHANGE_NAME_OF_RECIPE = 'CHANGE_NAME_OF_RECIPE';

export interface changeNameOfRecipeIf {
    type: typeof CHANGE_NAME_OF_RECIPE
    name: string
}

export const CHANGE_CHECKED_MEALTIME = 'CHANGE_CHECKED_MEALTIME';

export interface changeMealTimeCheckboxIf {
    type: typeof CHANGE_CHECKED_MEALTIME
    mealTime: string
}

export const CHANGE_AUTHOR_OF_RECIPE = 'CHANGE_AUTHOR_OF_RECIPE';

export interface changeAuthorOfRecipeIf {
    type: typeof CHANGE_AUTHOR_OF_RECIPE
    author: string
}

export const CHANGE_PREP_TIME = 'CHANGE_PREP_TIME';

export interface changePrepTimeIf {
    type: typeof CHANGE_PREP_TIME
    time: number
}

export const CHOOSE_MEMBER_TO_COPY = 'CHOOSE_MEMBER_TO_COPY';

export interface chooseMemberToCopyIf {
    type: typeof CHOOSE_MEMBER_TO_COPY
    member: string
}

export const ALL_PRODUCTS = 'ALL_PRODUCTS';

export interface allProductIf {
    type: typeof ALL_PRODUCTS
    allProducts: any
}

export const ADD_PRODUCT = 'ADD_PRODUCT';

export interface addProductIf {
    type: typeof ADD_PRODUCT
    product: ProductWholeDataDto
}

export type Types =
    setCurrentWeekScheduleIf
    | openModalIf
    | closeModalIf
    | randomMealChangeIf
    | openSidedrawerIf
    | closeSidedrawerIf
    | setProductListIf
    | setUserNameIf
    | deleteUsersIf
    | deleteUserIf
    | setCurrentMemberIf
    | changeCheckboxIf
    | copyMealIf
    | pasteMealIf
    | addPrepStepIf
    | deletePrepStepIf
    | changeNameOfRecipeIf
    | changeMealTimeCheckboxIf
    | changeAuthorOfRecipeIf
    | changePrepTimeIf
    | chooseMemberToCopyIf
    | allProductIf
    | addProductIf