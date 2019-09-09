import {
    CLOSE_MODAL, OPEN_MODAL, RANDOM_MEAL_CHANGE, SET_CURRENT_WEEK_SCHEDULE, OPEN_SIDEDRAWER, CLOSE_SIDEDRAWER,
    Types, SET_PRODUCT_LIST, SET_USER_NAME, DELETE_USERS, DELETE_USER
} from "./actionTypes";
import {Reducer} from "redux";
import {produce} from "immer"
import {DayDto} from "../ServerConnection/DTOs/WeekScheduleDto";
import {loadState} from "../ServerConnection/localStorage";
import {GroupproductsDto} from "../ServerConnection/DTOs/ShoppingListDto";

interface weekInitialState {
    currentWeekSchedule:  Array<DayDto> | undefined
    // currentWeekSchedule: Array<{userName:string ,weekShedule: Array<DayDto>}> | undefined
}

const WEEK_INITIAL_STATE: weekInitialState = {
    currentWeekSchedule: loadState().weekMeals,
};

export const weekScheduleReducer: Reducer<weekInitialState, Types> = (state: weekInitialState = WEEK_INITIAL_STATE, action: Types) => {
    switch (action.type) {
        case SET_CURRENT_WEEK_SCHEDULE: {
            return produce(state, draftState => {
                draftState.currentWeekSchedule = action.currentWeekSchedule;
            })
        }
        case RANDOM_MEAL_CHANGE: {
            return produce(state, draftState => {
                if (draftState.currentWeekSchedule !== undefined) {
                draftState.currentWeekSchedule[action.dayNr]["meals"][action.mealNr]= action.randomMeal;
               }
            })
        }

        default:
            return state
    }
};

interface ModalReducerState {
    visible: boolean
    data?: JSX.Element
}

const MODAL_REDUCER_INITIAL_STATE: ModalReducerState = {
    visible: false,
    data: undefined,
};

export const modalReducer: Reducer<ModalReducerState, Types> = (state: ModalReducerState = MODAL_REDUCER_INITIAL_STATE, action: Types) => {
    switch (action.type) {
        case OPEN_MODAL: {
            return produce(state, draftState => {
                draftState.visible = true;
                draftState.data = action.data;
            })
        }
        case CLOSE_MODAL: {
            return produce(state, draftState => {
                draftState.visible = false;
            })
        }
        default:
            return state
    }
};

interface SideDrawerReducerState {
    visible: boolean
}

const SIDEDRAWER_REDUCER_INITIAL_STATE: SideDrawerReducerState = {
    visible: false,
};

export const sidedrawerReducer: Reducer<SideDrawerReducerState, Types> = (state: SideDrawerReducerState = SIDEDRAWER_REDUCER_INITIAL_STATE, action: Types) => {
    switch (action.type) {
        case OPEN_SIDEDRAWER: {
            return produce(state, draftState => {
                draftState.visible = true;
            })
        }
        case CLOSE_SIDEDRAWER: {
            return produce(state, draftState => {
                draftState.visible = false;
            })
        }
        default:
            return state
    }
};

interface ProductListReducerState {
    categoryListOfProduct:GroupproductsDto,
}

const PRODUCT_LIST_INITIAL_STATE: ProductListReducerState = {
    categoryListOfProduct: {
        baking: [],
        dairy: [],
        drink: [],
        meat: [],
        fish: [],
        fruit: [],
        vegetable: [],
        grains: [],
        spice: [],
        other: [],
        unknown: []
    },
};

export const productListReducer: Reducer<ProductListReducerState, Types> = (state: ProductListReducerState = PRODUCT_LIST_INITIAL_STATE, action: Types) => {
    switch (action.type) {
        case SET_PRODUCT_LIST: {
            return produce(state, draftState => {
                draftState.categoryListOfProduct = action.categoryListOfProduct
            })
        }
        default:
            return state
    }
};
interface UserListReducerState {
    userList: Array<string>
}

const USER_LIST_INITIAL_STATE: UserListReducerState = {
    userList: loadState().users,

};

export const listOfUsersReducer: Reducer<UserListReducerState, Types> = (state: UserListReducerState = USER_LIST_INITIAL_STATE, action: Types) => {
    switch (action.type) {
        case SET_USER_NAME: {
            return produce(state, draftState => {
                draftState.userList.push(action.userName)
            })
        }
        case DELETE_USERS: {
            return produce(state, draftState => {
                draftState.userList = []
            })
        }
        case DELETE_USER: {
            return produce(state, draftState => {
                draftState.userList = draftState.userList.filter(user => user !== action.userName);
            })
        }
        default:
            return state
    }
};