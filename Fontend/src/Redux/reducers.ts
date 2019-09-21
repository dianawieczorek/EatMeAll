import {
    CLOSE_MODAL, OPEN_MODAL, RANDOM_MEAL_CHANGE, SET_CURRENT_WEEK_SCHEDULE, OPEN_SIDEDRAWER, CLOSE_SIDEDRAWER,
    Types, SET_PRODUCT_LIST, ADD_MEMBER_NAME, DELETE_MEMBER, DELETE_MEMBERS
} from "./actionTypes";
import {Reducer} from "redux";
import {produce} from "immer"
import {loadMeals, loadUsers} from "../ServerConnection/localStorage";
import {GroupproductsDto} from "../ServerConnection/DTOs/ShoppingListDto";
import Geberish243874587293874987 from './Model/WeekScheduleDomain';


interface GlobalCongigReducerIf {
    memberList: Array<string>
}

export const GLOBAL_CONFIG: GlobalCongigReducerIf = {
    memberList: loadUsers(),

};

export const globalConfigReducer: Reducer<GlobalCongigReducerIf, Types> = (state: GlobalCongigReducerIf = GLOBAL_CONFIG, action: Types) => {
    switch (action.type) {
        case ADD_MEMBER_NAME: {
            return produce(state, draftState => {
                draftState.memberList.push(action.userName);
            })
        }
        case DELETE_MEMBERS: {
            return produce(state, draftState => {
                draftState.memberList = ["member"];
            })
        }
        case DELETE_MEMBER: {
            return produce(state, draftState => {
                draftState.memberList = draftState.memberList.filter(user => user !== action.userName);
            })
        }
        default:
            return state
    }
};


interface weekScheduleReducerIf {
    currentUser: Geberish243874587293874987
    currentWeekSchedule: Array<Geberish243874587293874987>
}

const WEEK_INIT: weekScheduleReducerIf = {
    currentWeekSchedule: loadMeals(),
    currentUser: loadMeals()[0]
        // window.location.pathname.substr(window.location.pathname.lastIndexOf('/') + 1),
};

export const weekScheduleReducer: Reducer<weekScheduleReducerIf, Types> = (state: weekScheduleReducerIf = WEEK_INIT, action: Types) => {
    switch (action.type) {
        case SET_CURRENT_WEEK_SCHEDULE: {
            return produce(state, draftState => {
                if (draftState.currentWeekSchedule !== undefined) {
                    let currentUser = (window.location.pathname.substr(window.location.pathname.lastIndexOf('/') + 1));
                    if (currentUser !== "home") {
                        let currentUserIndex = draftState.currentWeekSchedule.findIndex(u => u.member == currentUser)
                        draftState.currentWeekSchedule[currentUserIndex].weekSchedule = action.currentWeekSchedule;
                    } else window.alert("musisz wybrać dietożercę")
                }
            })
        }
        // case SET_CURENT_USER{
        //     action.currentUser;
        //     this.state.weekScheduleReducer.currentUser;
        //     draftState.weekScheduleForCurrentUser = loadMeals()[x]
        // }
        //
        //
        case RANDOM_MEAL_CHANGE: {
            return produce(state, draftState => {
                if (draftState.currentWeekSchedule !== undefined) {
                    draftState.currentWeekSchedule[0].weekSchedule[action.dayNr]["meals"][action.mealNr] = action.randomMeal;
                }
            })
        }

        default:
            return state
    }
};

interface ModalReducerIf {
    visible: boolean
    data?: JSX.Element
}

const MODAL_REDUCER_INIT: ModalReducerIf = {
    visible: false,
    data: undefined,
};

export const modalReducer: Reducer<ModalReducerIf, Types> = (state: ModalReducerIf = MODAL_REDUCER_INIT, action: Types) => {
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

interface SideDrawerReducerIf {
    visible: boolean
}

const SIDEDRAWER_REDUCER_INIT: SideDrawerReducerIf = {
    visible: false,
};

export const sidedrawerReducer: Reducer<SideDrawerReducerIf, Types> = (state: SideDrawerReducerIf = SIDEDRAWER_REDUCER_INIT, action: Types) => {
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

interface ProductListReducerIf {
    categoryListOfProduct: GroupproductsDto,
}

const PRODUCT_LIST_INIT: ProductListReducerIf = {
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

export const productListReducer: Reducer<ProductListReducerIf, Types> = (state: ProductListReducerIf = PRODUCT_LIST_INIT, action: Types) => {
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
