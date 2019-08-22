import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import styles from "./ListOfMeals.module.css"
import {RandomMealDto} from "../../ServerConnection/DTOs/randomMealDto";
import {closeModal, randomMealChange} from "../../Redux/actions";
import {Dispatch} from "redux";

interface OwnProps {
    randomMealList: Array<RandomMealDto>
    mealNumber: number
    dayNumber: number
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class ListOfMeals extends PureComponent<Props> {
    prepareMealList() {
        return (this.props.randomMealList.map((meal: RandomMealDto, i: number) =>
            <li>
                <button
                    className={styles.mealButton}
                    onClick={this.clickHandler} value={i}>{meal.title}</button>
            </li>))
    }
    ;

    clickHandler = (e: any) => {
        this.changeMealName(e);
        this.props.closeModal();
    };

    changeMealName = (e: any) => {
        this.props.randomMealChange(this.props.randomMealList[e.target.value], this.props.dayNumber, this.props.mealNumber);
    }

    render() {
        return (
            <div className={styles.MealList}>
                <h2>Wybierz posiłek</h2>
                <ul className={styles.mealButtons}>
                    {this.prepareMealList()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = () => {
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        randomMealChange: (randomMeal: RandomMealDto, dayNr: number, mealNr: number) => dispatch(randomMealChange(randomMeal, dayNr, mealNr)),
        closeModal: () => dispatch(closeModal()),

    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ListOfMeals);
