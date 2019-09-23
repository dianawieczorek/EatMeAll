import {
    CLOSE_MODAL, closeModalIf,
    OPEN_MODAL, openModalIf, RANDOM_MEAL_CHANGE, randomMealChangeIf,
    SET_CURRENT_WEEK_SCHEDULE, CLOSE_SIDEDRAWER, OPEN_SIDEDRAWER, SET_PRODUCT_LIST, closeSidedrawerIf, openSidedrawerIf,
    setCurrentWeekScheduleIf, setProductListIf, setUserNameIf, ADD_MEMBER_NAME, deleteUsersIf, DELETE_MEMBERS,
    deleteUserIf,
    DELETE_MEMBER, setCurrentMemberIf, SET_CURRENT_MEMBER
} from "./actionTypes";


import {DayDietDto} from "../ServerConnection/DTOs/WeekScheduleDto";
import {RandomMealDto} from "../ServerConnection/DTOs/randomMealDto";
import {GroupproductsDto, ProductDto} from "../ServerConnection/DTOs/ShoppingListDto";


export const setCurrentWeekSchedule = (aCurrentWeekSchedule: Array<DayDietDto>): setCurrentWeekScheduleIf => {
    return {
        type: SET_CURRENT_WEEK_SCHEDULE,
        currentWeekSchedule: aCurrentWeekSchedule
    }
};

export const setCurrentMember = (memberName: string): setCurrentMemberIf => {
    return {
        type: SET_CURRENT_MEMBER,
        memberName: memberName
    }
};

export const randomMealChange = (aRandomMeal: RandomMealDto, aDayNr: number, aMealNr: number): randomMealChangeIf => {
    return {
        type: RANDOM_MEAL_CHANGE,
        randomMeal: aRandomMeal,
        dayNr: aDayNr,
        mealNr: aMealNr
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

export const openSidedrawer = (): openSidedrawerIf => {
    return {
        type: OPEN_SIDEDRAWER,
    }
};

export const closeSidedrawer = (): closeSidedrawerIf => {
    return {
        type: CLOSE_SIDEDRAWER,
    }
};

export const setProductList = (aProductList: GroupproductsDto): setProductListIf => {
    return {
        type: SET_PRODUCT_LIST,
        categoryListOfProduct: aProductList
    }
};

export const setUserName = (aUserName: string): setUserNameIf => {
    return {
        type: ADD_MEMBER_NAME,
        userName: aUserName
    }
};

export const deleteUsers = (): deleteUsersIf => {
    return {
        type: DELETE_MEMBERS,
    }
};

export const deleteUser = (aUserName: string): deleteUserIf => {
    return {
        type: DELETE_MEMBER,
        userName: aUserName
    }
};