import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {AppStore} from "../../../../Redux/store";
import {Dispatch} from "redux";
import styles from "./SingleMealShortInfo.module.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBook, faCalendarTimes, faCopy, faListUl, faPaste, faRetweet} from "@fortawesome/free-solid-svg-icons";
import {openModal, randomMealChange} from "../../../../Redux/actions";
import MealRecipe from "../../../MealRecipe/MealRecipe";
import {MealRecipeDto} from "../../../../ServerConnection/DTOs/MealRecipeDto";
import {RandomMealDto} from "../../../../ServerConnection/DTOs/randomMealDto";
import ListOfMeals from "../../../ListOfMeals/ListOfMeals";
import {Simulate} from "react-dom/test-utils";


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
                            <button className={styles.Button} /*onClick={this.copyActionHandler}*/>
                                <FontAwesomeIcon className={styles.Icon} icon={faCopy} title="kopiuj"/>
                            </button>
                            <button className={styles.Button} /*onClick={this.pasteActionHandler}*/>
                                <FontAwesomeIcon className={styles.Icon} icon={faPaste} title="wklej"/>
                            </button>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className={styles.MealInfo}>
                    <div className={styles.TypeOfMeal}></div>
                    <div></div>
                </div>
            )
        }
    }

    private showDetails = () => {
        fetch("http://217.182.78.23:100/app/meals/"+ this.props.MealInfo.idMeal)
            .then(response => response.json())
            .then((json: Array<MealRecipeDto>) => {
                this.showDetailsPopup(json[0]);
            })
    };

    private randomizeMeal = () => {
        let dayNumber = this.props.dayNumber;
        let mealNumber = this.props.mealNumber;
        fetch("http://217.182.78.23:100/app/meals/short/mealTime?mealTime="+this.props.MealInfo.mealTime)
            .then(response => response.json())
            .then((json: Array<RandomMealDto>) => {
                const meal = json[0];
                this.props.randomMealChange(meal, dayNumber, mealNumber)

            })
    };

    private deleteMealFromList = () => {
        let dayNumber = this.props.dayNumber;
        let mealNumber = this.props.mealNumber;
        fetch("jsonMocks/emptyMeal.json")
            .then(response => response.json())
            .then((json: Array<RandomMealDto>) => {
                const meal = json[0];
                this.props.randomMealChange(meal, dayNumber, mealNumber)
            })
    };

    private changeMealFromList = () => {
        let dayNumber = this.props.dayNumber;
        let mealNumber = this.props.mealNumber;
        fetch("http://217.182.78.23:100/app/meals/short/mealTime?mealTime="+this.props.MealInfo.mealTime)
            .then(response => response.json())
            .then((json: Array<RandomMealDto>) => {
                this.showMealsListPopup(json, dayNumber, mealNumber);
            })
    };

    private showDetailsPopup = (selectedMealJson: MealRecipeDto) => {
        this.props.openModal(<MealRecipe
            mealRecipe={selectedMealJson}
            typeOfMeal={this.typeOfMeal()}
        />);
    };

    private showMealsListPopup(selectedMealJson: Array<RandomMealDto>, dayNumber: number, mealNumber: number) {
        this.props.openModal(
            <ListOfMeals
                randomMealList={selectedMealJson}
                dayNumber={dayNumber}
                mealNumber={mealNumber}
            />
        )
    }

    public typeOfMeal = () => {
        if (this.props.MealInfo.mealTime === "BREAKFAST") {
            return "śniadanko"
        } else if (this.props.MealInfo.mealTime === "DINNER") {
            return "obiad"
        } else if (this.props.MealInfo.mealTime === "LUNCH") {
            return "drugie śniadanie"
        } else if (this.props.MealInfo.mealTime === "SNACK") {
            return "podwieczorek"
        } else if (this.props.MealInfo.mealTime === "SUPPER") {
            return "kolacja"
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
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleMealShortInfo);
