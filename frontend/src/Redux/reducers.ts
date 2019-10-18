import {
    CLOSE_MODAL, OPEN_MODAL, RANDOM_MEAL_CHANGE, SET_CURRENT_WEEK_SCHEDULE, OPEN_SIDEDRAWER, CLOSE_SIDEDRAWER,
    Types, SET_PRODUCT_LIST, ADD_MEMBER_NAME, DELETE_MEMBER, DELETE_MEMBERS, SET_CURRENT_MEMBER, CHANGE_CHECKED_DAY,
    COPY_MEAL, PASTE_MEAL, ADD_PREP_STEP, DELETE_PREP_STEP, CHANGE_NAME_OF_RECIPE, CHANGE_CHECKED_MEALTIME,
    CHANGE_AUTHOR_OF_RECIPE, CHANGE_PREP_TIME, CHOOSE_MEMBER_TO_COPY, ALL_PRODUCTS, ADD_PRODUCT, CHANGE_PART_AMOUNT
} from "./actionTypes";
import {Reducer} from "redux";
import {produce} from "immer"
import {loadMembers, saveMealToCopy} from "../ServerConnection/localStorage";
import {GroupproductsDto} from "../ServerConnection/DTOs/ShoppingListDto";
import Member from './Model/Member';
import {DayOfWeekDto} from "../ServerConnection/DTOs/DayOfWeekDto";
import {ProductsInCategoryDto, ProductWholeDataDto, SingleCategoryDto} from "../ServerConnection/DTOs/AllProductsDto";
import {PostMealRecipieDto} from "../ServerConnection/DTOs/MealRecipeDto";

interface weekScheduleReducerIf {
    members: Array<Member>
    currentMember: Member
    choosenMember: string
}

const WEEK_INIT: weekScheduleReducerIf = {
    members: loadMembers(),
    currentMember: loadMembers()[0],
    choosenMember: loadMembers()[0].name
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
        case COPY_MEAL: {
            return produce(state, draftState => {
                saveMealToCopy(action.mealToCopy)
            })
        }
        case PASTE_MEAL: {
            return produce(state, draftState => {
                draftState.currentMember = loadMembers()[currentMemberIndex];
                draftState.members[currentMemberIndex].weekSchedule[action.dayNr]["meals"][action.mealNr] = action.mealToPaste;
                draftState.currentMember.weekSchedule[action.dayNr]["meals"][action.mealNr] = action.mealToPaste;
            })
        }
        case CHOOSE_MEMBER_TO_COPY: {
            return produce(state, draftState => {
                draftState.choosenMember = action.member
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
        {id: 0, value: "Pon", isChecked: false},
        {id: 1, value: "Wt", isChecked: false},
        {id: 2, value: "Śr", isChecked: false},
        {id: 3, value: "Czw", isChecked: false},
        {id: 4, value: "Pt", isChecked: false},
        {id: 5, value: "Sob", isChecked: false},
        {id: 6, value: "Nd", isChecked: false},
    ]
};

export const shoppingListReducer: Reducer<ShoppingListReducerIf, Types> = (state: ShoppingListReducerIf = SHOPPING_LIST_INIT, action: Types) => {
    switch (action.type) {
        case CHANGE_CHECKED_DAY: {
            return produce(state, draftState => {
                let selectedDay = draftState.days.filter(day => day.value === action.dayName);
                selectedDay[0].isChecked = !selectedDay[0].isChecked
            })
        }
        default:
            return state
    }
};


interface AddMealToDatabaseReducerIf {
    preparation: Array<string>
    nameOfRecipe: string
    mealTime: Array<DayOfWeekDto>
    authorOfRecipe: string
    prepTime: number
    allProducts: Array<SingleCategoryDto>
    selectedProducts: Array<ProductWholeDataDto>

    toSerialize: PostMealRecipieDto;
}

const ADD_MEAL_TO_DATABASE_INIT: AddMealToDatabaseReducerIf = {
    preparation: [],
    nameOfRecipe: "",
    mealTime: [
        {id: 0, value: "śniadanie", isChecked: false},
        {id: 1, value: "2 śniadanie", isChecked: false},
        {id: 2, value: "obiad", isChecked: false},
        {id: 3, value: "podwieczorek", isChecked: false},
        {id: 4, value: "kolacja", isChecked: false},
    ],
    authorOfRecipe: "",
    prepTime: 0,
    allProducts: [],
    selectedProducts: [],
    toSerialize: {
        name:"",
        description: "",
        mealTime:[],
        prepareTime:0,
        author:"",
        parts:[],
        steps:[]
    }
};

export const addMealToDatabaseReducer: Reducer<AddMealToDatabaseReducerIf, Types> = (state: AddMealToDatabaseReducerIf = ADD_MEAL_TO_DATABASE_INIT, action: Types) => {
    switch (action.type) {
        case ADD_PREP_STEP: {
            return produce(state, draftState => {
                draftState.preparation.push(action.step)
            })
        }
        case DELETE_PREP_STEP: {
            return produce(state, draftState => {
                draftState.preparation = draftState.preparation.filter(step => step !== action.step);
            })
        }
        case CHANGE_NAME_OF_RECIPE: {
            return produce(state, draftState => {
                draftState.nameOfRecipe = action.name;
            })
        }
        case CHANGE_CHECKED_MEALTIME: {
            return produce(state, draftState => {
                let selectedMeal = draftState.mealTime.filter(meal => meal.value === action.mealTime);
                selectedMeal[0].isChecked = !selectedMeal[0].isChecked
            })
        }
        case CHANGE_AUTHOR_OF_RECIPE: {
            return produce(state, draftState => {
                draftState.authorOfRecipe = action.author;
            })
        }
        case CHANGE_PREP_TIME: {
            return produce(state, draftState => {
                draftState.prepTime = action.time;
            })
        }
        case ALL_PRODUCTS: {
            return produce(state, draftState => {
                draftState.allProducts = action.allProducts;
            })
        }
        case ADD_PRODUCT: {
            return produce(state, draftState => {
                draftState.selectedProducts.push(action.product);
                draftState.toSerialize.parts.push({id: action.product.id, amount:100, specialAmount: ""});
            })
        }
        case CHANGE_PART_AMOUNT:{
            return produce(state, draftState => {
                let part = state.toSerialize.parts.filter(p => Number(action.part.id) === p.id)[0];
                part.amount = action.part.amount;

                //podmieniać oelement zamiast dodawać
                draftState.toSerialize.parts.push(part);
            })
        }
        default:
            return state
    }
};