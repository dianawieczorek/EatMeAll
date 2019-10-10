import React, {Component} from 'react';
import {connect} from 'react-redux';
import classes from "../WeekSchedule/TableHeader/TableHeader.module.css";
import style from '..//WeekSchedule/WeekSchedule.module.css'
import {AppStore} from "../../Redux/store";
import Button from "../UI/Button/Button"
import CategoryListOfProduct from "./CategoryListOfProducts/CategoryListOfProduct";
import {setProductList} from "../../Redux/actions";
import {Dispatch} from "redux";
import {GroupproductsDto} from "../../ServerConnection/DTOs/ShoppingListDto";
import WeekCheckbox from "./WeekCheckbox/WeekCheckbox";
import {SHOPPING_LIST_URL} from "../../ServerConnection/RestCommunication/fileWithConstants";


interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class ShoppingList extends Component<Props> {
    constructor(aProps: Props) {
        super(aProps);
    }

    render() {
        return (
            <div className={style.PageSettings}>
                <div className={classes.TableHeader}>
                    <div className={classes.Label}>Lista Zakupów</div>
                    <WeekCheckbox/>
                    <div className={classes.Buttons}>
                        <Button onClick={this.shoppingList}>
                            Wygeneruj listę zakupów
                        </Button>

                    </div>
                </div>
                <CategoryListOfProduct category={"Owoce"} productList={this.props.ProductList.fruit}/>
                <CategoryListOfProduct category={"Warzywa"} productList={this.props.ProductList.vegetable}/>
                <CategoryListOfProduct category={"Pieczywo"} productList={this.props.ProductList.baking}/>
                <CategoryListOfProduct category={"Nabiał"} productList={this.props.ProductList.dairy}/>
                <CategoryListOfProduct category={"Mięso"} productList={this.props.ProductList.meat}/>
                <CategoryListOfProduct category={"Ryby"} productList={this.props.ProductList.fish}/>
                <CategoryListOfProduct category={"Napoje"} productList={this.props.ProductList.drink}/>
                <CategoryListOfProduct category={"Ziarna"} productList={this.props.ProductList.grains}/>
                <CategoryListOfProduct category={"Przyprawy"} productList={this.props.ProductList.spice}/>
                <CategoryListOfProduct category={"Inne"}
                                       productList={this.props.ProductList.other && this.props.ProductList.unknown}/>
            </div>
        )
    }

    private shoppingList = () => {
        let checkedDays = this.props.days.map(day => day.id).map(dayId => dayId);
        if (checkedDays.length > 0) {
            let mealIds = [this.props.Meal.map((member: any) => member.weekSchedule.map((dayOfWeekPlan: any) => dayOfWeekPlan["meals"].map((meal: any) => meal.idMeal)))][0];
            let mealIdsForSelectedDays = [];
            for (let m = 0; m < this.props.memberList.length; m++) {
                for (let x = 0; x < checkedDays.length; x++) {
                    let idsOfSingleDay = mealIds[m][checkedDays[x]];
                    mealIdsForSelectedDays.push(idsOfSingleDay)
                }
            }
            let arrayOfIdsMeals = mealIdsForSelectedDays.reduce((arr, el) => arr.concat(el));
            fetch(SHOPPING_LIST_URL + arrayOfIdsMeals)
                .then((response) => response.json())
                .then((json: GroupproductsDto) => {
                        this.props.setProductList(json)
                    }
                );
        } else {
            window.alert("musisz wybrać co najmniej 1 dzień")
        }
    }

}

const mapStateToProps = (store: AppStore) => {
    if (store.weekScheduleReducer.members !== undefined) {
        return {
            Meal: store.weekScheduleReducer.members,
            memberList: store.weekScheduleReducer.members.map(member => member.name),
            ProductList: store.productListReducer.categoryListOfProduct,
            days: store.shoppingListReducer.days.filter(day => day.isChecked === true)
        }
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setProductList: (aProductList: GroupproductsDto) => dispatch(setProductList(aProductList))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);
