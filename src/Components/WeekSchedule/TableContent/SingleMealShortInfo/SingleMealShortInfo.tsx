import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {AppStore} from "../../../../Redux/store";
import {Dispatch} from "redux";
import styles from "./SingleMealShortInfo.module.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBook, faCalendarTimes, faCopy, faListUl, faPaste, faRetweet} from "@fortawesome/free-solid-svg-icons";
import MealRecipe from "../../../MealRecipe/MealRecipe";


interface OwnProps {
    mealNumber: number
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
                            <button className={styles.Button} /*onClick={this.randomizeMeal}*/>
                                <FontAwesomeIcon className={styles.Icon} icon={faRetweet} title="wylosuj inną potrawę"/>
                            </button>
                            <button className={styles.Button} /*onClick={this.changeMealFromList}*/>
                                <FontAwesomeIcon className={styles.Icon} icon={faListUl}
                                                 title="wybierz inną potrawę z listy"/>
                            </button>
                            <button className={styles.Button} /*onClick={this.deleteMealFromList}*/>
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

    private showDetailsPopup = () => {
        this.props.openModal(
            <MealRecipe/>)
    }

    private showDetails = (e: any) => {
        let mealDetails = "http:eatmeall.pl:100/app/meals/" + this.props.MealInfo.idMeal;
        console.log(mealDetails)
        this.showDetailsPopup()
        // fetch("http:eatmeall.pl:100/app/meals/94")
        //     .then((response) => response.json())
        //     .then((json:any) => {
        //        console.log(json[0]);
        //     });
    }
    private typeOfMeal = () => {
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
        }
    }
}


const mapStateToProps = (state: AppStore, ownProps: any) => {
    if (state.weekScheduleReducer.currentWeekSchedule !== undefined) {
        return {
            MealInfo: state.weekScheduleReducer.currentWeekSchedule[ownProps.dayNumber].meals[ownProps.mealNumber]
        }
    }

};

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SingleMealShortInfo);
