import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import styles from "./ShoppingList.module.css" ;
import classes from "../WeekSchedule/TableHeader/TableHeader.module.css";
import style from '..//WeekSchedule/WeekSchedule.module.css'
import {AppStore} from "../../Redux/store";
import Button from "../UI/Button/Button"
import CategoryListOfProduct from "./CategoryListOfProducts/CategoryListOfProduct";
import {setProductList} from "../../Redux/actions";
import {Dispatch} from "redux";
import {GroupproductsDto} from "../../ServerConnection/DTOs/ShoppingListDto";


interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class ShoppingList extends PureComponent<Props> {

    constructor(aProps: Props) {
        super(aProps)
    }

    render() {
        return (
            <div className={style.PageSettings}>
                <div className={classes.TableHeader}>
                    <div className={classes.Label}>Lista Zakupów</div>
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
        // let mealIds = [this.props.Meal.filter((dayOfWeekPlan,i) => x.contains(i)).map(dayOfWeekPlan => dayOfWeekPlan["meals"].map(meal => meal.idMeal))];
        // let mealIds=[this.props.Meal.map((dayOfWeekPlan: any) => dayOfWeekPlan["meals"].map((meal: any) => meal.idMeal))][0];
        let mealIds=[this.props.Meal.map((dayOfWeekPlan: any) => dayOfWeekPlan["meals"].map((meal: any) => meal.idMeal))][0];
        // let arrayOfMealIds= mealIds[0].concat(mealIds[1]).concat(mealIds[2]).concat(mealIds[3]).concat(mealIds[4]).concat(mealIds[5]).concat(mealIds[6]);
        let arrayOfMealIds= [...mealIds[0],...mealIds[1],...mealIds[2],...mealIds[3],...mealIds[4],...mealIds[5],...mealIds[6]];
        fetch("http://217.182.78.23:100/app/shoppingList/order/id/" + arrayOfMealIds)
            .then((response) => response.json())
            .then((json: GroupproductsDto) => {
                    this.props.setProductList(json)
                }
            );
    }
}

const mapStateToProps = (state: AppStore) => {
    if (state.weekScheduleReducer.members !== undefined) {
        return {
            Meal: state.weekScheduleReducer.members[0].weekSchedule,
            ProductList: state.productListReducer.categoryListOfProduct
        }
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setProductList: (aProductList: GroupproductsDto) => dispatch(setProductList(aProductList))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);
