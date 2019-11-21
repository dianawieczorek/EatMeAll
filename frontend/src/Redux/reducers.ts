import {
    CLOSE_MODAL, OPEN_MODAL, RANDOM_MEAL_CHANGE, SET_CURRENT_WEEK_SCHEDULE, OPEN_SIDEDRAWER, CLOSE_SIDEDRAWER,
    Types, SET_PRODUCT_LIST, ADD_MEMBER_NAME, DELETE_MEMBER, DELETE_MEMBERS, SET_CURRENT_MEMBER, CHANGE_CHECKED_DAY,
    COPY_MEAL, PASTE_MEAL, ADD_PREP_STEP, DELETE_PREP_STEP, CHANGE_NAME_OF_RECIPE, CHANGE_CHECKED_MEALTIME,
    CHANGE_AUTHOR_OF_RECIPE, CHANGE_PREP_TIME, CHOOSE_MEMBER_TO_COPY, ALL_PRODUCTS, ADD_PRODUCT, CHANGE_PART_AMOUNT,
    ALL_MEALS, CHANGE_DESCRIPTION_OF_RECIPE, DELETE_PRODUCT
} from "./actionTypes";
import {produce} from "immer"
import {loadMembers, saveMealToCopy} from "../ServerConnection/localStorage";
import {GroupproductsDto} from "../ServerConnection/DTOs/ShoppingListDto";
import Member from './Model/Member';
import {DayOfWeekDto} from "../ServerConnection/DTOs/DayOfWeekDto";
import {ProductWholeDataDto, SingleCategoryDto} from "../ServerConnection/DTOs/AllProductsDto";
import {MealRecipeDto, PostMealRecipieDto} from "../ServerConnection/DTOs/MealRecipeDto";
import {Reducer} from "redux";

interface weekScheduleReducerIf {
    members: Array<Member>
    currentMember: Member
    choosenMember: string
    allMeals: Array<MealRecipeDto>
}

const WEEK_INIT: weekScheduleReducerIf = {
    members: loadMembers(),
    currentMember: loadMembers()[0],
    choosenMember: loadMembers()[0].name,
    allMeals: []
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
                draftState.members[currentMemberIndex].weekSchedule.days[action.dayNr].meals[action.mealNr] = action.randomMeal;
                draftState.currentMember.weekSchedule.days[action.dayNr].meals[action.mealNr] = action.randomMeal;
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
                draftState.members[currentMemberIndex].weekSchedule.days[action.dayNr].meals[action.mealNr] = action.mealToPaste;
                draftState.currentMember.weekSchedule.days[action.dayNr].meals[action.mealNr] = action.mealToPaste;
            })
        }
        case CHOOSE_MEMBER_TO_COPY: {
            return produce(state, draftState => {
                draftState.choosenMember = action.member
            })
        }
        case ALL_MEALS: {
            return produce(state, draftState => {
                draftState.allMeals = action.allMeals;
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
    mealTimes: Array<DayOfWeekDto>
    allProducts: Array<SingleCategoryDto>
    selectedProducts: Array<ProductWholeDataDto>
    toSerialize: PostMealRecipieDto;
}

const ADD_MEAL_TO_DATABASE_INIT: AddMealToDatabaseReducerIf = {
    mealTimes: [
        {id: 0, value: "śniadanie", isChecked: false},
        {id: 1, value: "2 śniadanie", isChecked: false},
        {id: 2, value: "obiad", isChecked: false},
        {id: 3, value: "podwieczorek", isChecked: false},
        {id: 4, value: "kolacja", isChecked: false},
    ],
    allProducts: [],
    selectedProducts: [],
    toSerialize: {
        name: "",
        description: "",
        mealTimes: [],
        prepareTime: 0,
        author: "",
        parts: [],
        steps: []
    }
};

export const addMealToDatabaseReducer: Reducer<AddMealToDatabaseReducerIf, Types> = (state: AddMealToDatabaseReducerIf = ADD_MEAL_TO_DATABASE_INIT, action: Types) => {
        switch (action.type) {
            case ADD_PREP_STEP: {
                return produce(state, draftState => {
                    draftState.toSerialize.steps.push(action.step)
                })
            }
            case DELETE_PREP_STEP: {
                return produce(state, draftState => {
                    draftState.toSerialize.steps = draftState.toSerialize.steps.filter(step => step !== action.step);
                })
            }
            case CHANGE_NAME_OF_RECIPE: {
                return produce(state, draftState => {
                    draftState.toSerialize.name = action.name;
                })
            }
            case CHANGE_DESCRIPTION_OF_RECIPE: {
                return produce(state, draftState => {
                    draftState.toSerialize.description = action.description;
                })
            }
            case CHANGE_CHECKED_MEALTIME: {
                return produce(state, draftState => {
                        let selectedMealTime = state.mealTimes.filter((mealTimes: any) => mealTimes.value === action.mealTimes);
                        selectedMealTime[0].isChecked = !selectedMealTime[0].isChecked;
                        let selectedTime = draftState.mealTimes.filter(mealTime => mealTime.isChecked === true).map(mt => mt.id);
                        draftState.toSerialize.mealTimes = selectedTime;
                    }
                )
            }
            case CHANGE_AUTHOR_OF_RECIPE: {
                return produce(state, draftState => {
                    draftState.toSerialize.author = action.author;
                })
            }
            case CHANGE_PREP_TIME: {
                return produce(state, draftState => {
                    draftState.toSerialize.prepareTime = action.time;
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
                    draftState.toSerialize.parts.push({
                        id: action.product.id,
                        name: action.product.name,
                        amount: 100,
                        specialAmount: ""
                    });
                })
            }
            case CHANGE_PART_AMOUNT: {
                return produce(state, draftState => {
                    let part = draftState.toSerialize.parts.filter(p => Number(action.part.id) === p.id);
                    part[0].amount = action.part.amount;
                })
            }
            case DELETE_PRODUCT: {
                return produce(state, draftState => {
                    draftState.toSerialize.parts = draftState.toSerialize.parts.filter(product => product.name !== action.product);
                    draftState.selectedProducts = draftState.selectedProducts.filter(product => product.name !== action.product)
                })
            }
            default:
                return state
        }
    }
;