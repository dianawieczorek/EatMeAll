import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import styles from "./ShoppingList.module.css"
import {AppStore} from "../../Redux/store";
import CategoryListOfProduct from "./CategoryListOfProducts/CategoryListOfProduct";
import {MealRecipeDto} from "../../ServerConnection/DTOs/MealRecipeDto";


interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class ShoppingList extends PureComponent<Props> {
    render() {
        let mealIds= this.props.Meal.map(dayOfWeekPlan => dayOfWeekPlan["meals"].map(meal => meal.idMeal));
        console.log(mealIds)
        console.log("http://eatmeall.pl:100/app/shoppingList/order/id/"+mealIds);
        return (
            <div className={styles.About}>
                <h1>Lista zakupów</h1>
                <CategoryListOfProduct category={"Owoce"}/>
                <CategoryListOfProduct category={"Warzywa"}/>
                <CategoryListOfProduct category={"Pieczywo"}/>
                <CategoryListOfProduct category={"Nabiał"}/>
                <CategoryListOfProduct category={"Mięso"}/>
                <CategoryListOfProduct category={"Ryby"} />
                <CategoryListOfProduct category={"Napoje"}/>
                <CategoryListOfProduct category={"Ziarna"}/>
                <CategoryListOfProduct category={"Przyprawy"}/>
                <CategoryListOfProduct category={"Inne"}/>
            </div>
        )
    }


}

const mapStateToProps = (state: AppStore) => {
    if (state.weekScheduleReducer.currentWeekSchedule !== undefined) {
        return {
            Meal: state.weekScheduleReducer.currentWeekSchedule
        }
    }
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);
