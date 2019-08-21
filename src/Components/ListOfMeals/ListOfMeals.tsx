import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import styles from "./ListOfMeals.module.css"
import {RandomMealDto} from "../../ServerConnection/DTOs/randomMealDto";

interface OwnProps {
    randomMealList: Array<RandomMealDto>
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class ListOfMeals extends PureComponent<Props> {
    prepareMealList(mealList: Array<RandomMealDto>) {
        return mealList.map(meal => <li>
            <button
                className={styles.mealButton}
                onClick={this.clickHandler}>{meal.title}</button>
        </li>)
    };

    clickHandler = () => {
    };

    render() {
        return (
            <div className={styles.MealList}>
                <h2>Wybierz posiłek</h2>
                <ul className={styles.mealButtons}>
                    {this.prepareMealList(this.props.randomMealList)}</ul>
            </div>
        )
    }
}

const mapStateToProps = () => {

};

const mapDispatchToProps = () => {

};
export default connect(mapStateToProps, mapDispatchToProps)(ListOfMeals);
