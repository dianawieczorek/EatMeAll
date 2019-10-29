import React, {PureComponent, RefObject} from 'react';
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

interface State {
    currentMealInputValue: string
}

class ListOfMeals extends PureComponent<Props, State> {
    readonly mealInput: RefObject<HTMLInputElement>;

    constructor(Props: any, State: any) {
        super(Props, State);
        this.mealInput = React.createRef();
        this.state= {
            currentMealInputValue: ""
        }
    }

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
    };

    render() {
        return (
            <div className={styles.MealList}>
                <h2>Wybierz posiłek</h2>
                <div className=" bg-light rounded rounded-pill shadow-sm search-box">
                    <div className="input-group">
                        <input type="search" onChange={this.changeCurrentMealInputValue} ref={this.mealInput}
                               placeholder="czego szukasz" aria-describedby="button-addon3"
                               className="form-control bg-none border-0"/>
                    </div>
                    <div className={[styles.SearchResults, "result"].join(" ")}>
                        {/*{this.createListOfMatchingMeals()}*/}
                    </div>
                </div>
                <ul className={styles.mealButtons}>
                    {this.prepareMealList()}
                </ul>
            </div>
        )
    }
    private changeCurrentMealInputValue = () => {
        document.querySelector(".result")!.classList.add(styles.show);
        let innerValue = this.mealInput.current!.value;
        this.setState({currentMealInputValue: innerValue});
    };

    private createListOfMatchingMeals() {

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
