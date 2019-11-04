import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {AppStore} from "../../../../Redux/store";
import {Dispatch} from "redux";
import styles from "./SingleMealShortInfo.module.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBook, faCalendarTimes, faCopy, faListUl, faPaste, faRetweet} from "@fortawesome/free-solid-svg-icons";
import {copyMeal, openModal, pasteMeal, randomMealChange} from "../../../../Redux/actions";
import MealRecipe from "../../../MealRecipe/MealRecipe";
import {MealRecipeDto} from "../../../../ServerConnection/DTOs/MealRecipeDto";
import {RandomMealDto} from "../../../../ServerConnection/DTOs/randomMealDto";
import ListOfMeals from "../../../ListOfMeals/ListOfMeals";
import {EmptyMeal} from "../../../../Redux/Model/Schedule";
import {RANDOM_MEAL_URL, SHOW_DETAIL_URL} from "../../../../ServerConnection/RestCommunication/fileWithConstants";
import {loadMealToPaste} from "../../../../ServerConnection/localStorage";


interface OwnProps {
    mealNumber: number
    dayNumber: number
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class SingleMealShortInfo extends PureComponent<Props> {
    render() {
        if (this.props.MealInfo !== undefined) {
            return (
                <div className={styles.ChangeDiv}>
                    <div className={styles.MealInfo}>
                        <div className={styles.TypeOfMeal}>{this.typeOfMeal()}</div>
                        <div className={styles.MealName}>{this.props.MealInfo.title}</div>
                        <div className={styles.HoverButtons}>
                            <button className={styles.Button} onClick={this.showDetails}>
                                <FontAwesomeIcon className={styles.Icon} icon={faBook} title="przeczytaj przepis"/>
                            </button>
                            <button className={styles.Button} onClick={this.randomizeMeal}>
                                <FontAwesomeIcon className={styles.Icon} icon={faRetweet} title="wylosuj inną potrawę"/>
                            </button>
                            <button className={styles.Button} onClick={this.changeMealFromList}>
                                <FontAwesomeIcon className={styles.Icon} icon={faListUl}
                                                 title="wybierz inną potrawę z listy"/>
                            </button>
                            <button className={styles.Button} onClick={this.deleteMealFromList}>
                                <FontAwesomeIcon className={styles.Icon} icon={faCalendarTimes}
                                                 title="wyczyść/jem na mieście"/>
                            </button>
                            <button className={styles.Button} onClick={this.copyMeal}>
                                <FontAwesomeIcon className={styles.Icon} icon={faCopy} title="kopiuj"/>
                            </button>
                            <button className={styles.Button} onClick={this.pasteMeal}>
                                <FontAwesomeIcon className={styles.Icon} icon={faPaste} title="wklej"/>
                            </button>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className={styles.MealInfo}>
                    <div className={styles.TypeOfMeal}> </div>
                    <div> </div>
                </div>
            )
        }
    }

    private showDetails = () => {
        fetch(SHOW_DETAIL_URL + this.props.MealInfo.idMeal)
            .then(response => response.json())
            .then((json: Array<MealRecipeDto>) => {
                this.showDetailsPopup(json[0]);
            })
    };

    private randomizeMeal = () => {
        let dayNumber = this.props.dayNumber;
        let mealNumber = this.props.mealNumber;
        fetch(RANDOM_MEAL_URL + this.typeOfMealForEmpty())
            .then(response => response.json())
            .then((json: Array<RandomMealDto>) => {
                const meal = json[0];
                this.props.randomMealChange(meal, dayNumber, mealNumber)

            })
    };

    private deleteMealFromList = () => {
        let dayNumber = this.props.dayNumber;
        let mealNumber = this.props.mealNumber;
        this.props.randomMealChange(new EmptyMeal(), dayNumber, mealNumber)
    };

    private changeMealFromList = () => {
        let dayNumber = this.props.dayNumber;
        let mealNumber = this.props.mealNumber;
        this.showMealsListPopup(dayNumber, mealNumber);

    };

    private copyMeal = () => {
        this.props.copyMeal(this.props.MealInfo)
    };

    private pasteMeal = () => {
        let dayNumber = this.props.dayNumber;
        let mealNumber = this.props.mealNumber;
        this.props.pasteMeal(loadMealToPaste(), dayNumber, mealNumber)
    };

    private showDetailsPopup = (selectedMealJson: MealRecipeDto) => {
        this.props.openModal(<MealRecipe
            mealRecipe={selectedMealJson}
            typeOfMeal={this.typeOfMeal()}
        />);
    };

    private showMealsListPopup(dayNumber: number, mealNumber: number) {
        this.props.openModal(
            <ListOfMeals
                dayNumber={dayNumber}
                mealNumber={mealNumber}
            />
        )
    }

    public typeOfMeal = () => {
        if (this.props.MealInfo.mealTimes =["BREAKFAST"]) {
            return "śniadanko"
        } else if (this.props.MealInfo.mealTimes=["DINNER"]) {
            return "obiad"
        } else if (this.props.MealInfo.mealTimes=["LUNCH"]) {
            return "drugie śniadanie"
        } else if (this.props.MealInfo.mealTimes=["SNACK"]) {
            return "podwieczorek"
        } else if (this.props.MealInfo.mealTimes=["SUPPER"]) {
            return "kolacja"
        } else {
            return ""
        }
    };

    public typeOfMealForEmpty = () => {
        if (this.props.mealNumber === 0) {
            return "BREAKFAST"
        } else if (this.props.mealNumber === 1) {
            return "DINNER"
        } else if (this.props.mealNumber === 2) {
            return "LUNCH"
        } else if (this.props.mealNumber === 3) {
            return "SNACK"
        } else if (this.props.mealNumber === 4) {
            return "SUPPER"
        } else {
            return ""
        }
    }
}

const mapStateToProps = (state: AppStore, ownProps: any) => {
    return {
        MealInfo: state.weekScheduleReducer.currentMember.weekSchedule[ownProps.dayNumber].meals[ownProps.mealNumber]
    };
};


const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        openModal: (aData: JSX.Element) => dispatch(openModal(aData)),
        randomMealChange: (randomMeal: RandomMealDto, dayNr: number, mealNr: number) => dispatch(randomMealChange(randomMeal, dayNr, mealNr)),
        copyMeal: (mealToCopy: RandomMealDto) => dispatch(copyMeal(mealToCopy)),
        pasteMeal: (meal:RandomMealDto, dayNr: number, mealNr: number) => dispatch(pasteMeal(meal, dayNr, mealNr)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleMealShortInfo);
