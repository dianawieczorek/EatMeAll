import {
    CLOSE_MODAL, OPEN_MODAL, RANDOM_MEAL_CHANGE, SET_CURRENT_WEEK_SCHEDULE, OPEN_SIDEDRAWER, CLOSE_SIDEDRAWER,
    Types, SET_PRODUCT_LIST, ADD_MEMBER_NAME, DELETE_MEMBER, DELETE_MEMBERS, SET_CURRENT_MEMBER
} from "./actionTypes";
import {Reducer} from "redux";
import {produce} from "immer"
import {loadMembers} from "../ServerConnection/localStorage";
import {GroupproductsDto} from "../ServerConnection/DTOs/ShoppingListDto";
import Member from './Model/Member';
import {DayOfWeekDto} from "../ServerConnection/DTOs/DayOfWeekDto";

interface weekScheduleReducerIf {
    members: Array<Member>
    currentMember: Member
}

const WEEK_INIT: weekScheduleReducerIf = {
    members: loadMembers(),
    currentMember: loadMembers()[0]
};

export const weekScheduleReducer: Reducer<weekScheduleReducerIf, Types> = (state: weekScheduleReducerIf = WEEK_INIT, action: Types) => {
    let selectedMember = (window.location.pathname.substr(window.location.pathname.lastIndexOf('/') + 1));
    let currentMemberIndex = state.members.findIndex(u => u.name == selectedMember);
    switch (action.type) {
        case SET_CURRENT_WEEK_SCHEDULE: {
            return produce(state, draftState => {
                    draftState.currentMember = loadMembers()[currentMemberIndex];
                    draftState.members[currentMemberIndex].weekSchedule = action.currentWeekSchedule;
                    draftState.currentMember.weekSchedule = action.currentWeekSchedule;
            })
        }
        case RANDOM_MEAL_CHANGE: {
            return produce(state, draftState => {
                draftState.currentMember = loadMembers()[currentMemberIndex];
                draftState.members[currentMemberIndex].weekSchedule[action.dayNr]["meals"][action.mealNr] = action.randomMeal;
                draftState.currentMember.weekSchedule[action.dayNr]["meals"][action.mealNr] = action.randomMeal;

            })
        }
        case SET_CURRENT_MEMBER: {
            return produce(state, draftState => {
                draftState.currentMember = state.members.filter(member => member.name === action.memberName)[0];
            })
        }

        case ADD_MEMBER_NAME: {
            return produce(state, draftState => {
                draftState.members.push(new Member(action.userName));
            })
        }
        case DELETE_MEMBERS: {
            return produce(state, draftState => {
                draftState.members = [new Member('default')]
            })
        }
        case DELETE_MEMBER: {
            return produce(state, draftState => {
                draftState.members = draftState.members.filter(member => member.name !== action.userName);
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

interface ShoppingListReducerIf {
    days: Array<DayOfWeekDto>,
}

const SHOPPING_LIST_INIT: ShoppingListReducerIf = {
    days: [
        {id:0, value:"Pon", isChecked:false},
        {id:1, value:"Wt", isChecked:false},
        {id:2, value:"Śr", isChecked:false},
        {id:3, value:"Czw", isChecked:false},
        {id:4, value:"Pt", isChecked:false},
        {id:5, value:"Sob", isChecked:false},
        {id:6, value:"Nd", isChecked:false},
    ]
};

export const shoppingListReducer: Reducer<ShoppingListReducerIf, Types> = (state: ShoppingListReducerIf = SHOPPING_LIST_INIT, action: Types) => {
    switch (action.type) {
        case SET_PRODUCT_LIST: {
            return produce(state, draftState => {
            })
        }
        default:
            return state
    }
};
