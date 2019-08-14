import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {AppStore} from "../../../../Redux/store";
import {Dispatch} from "redux";
import styles from "./SingleMealShortInfo.module.css"
import {element} from "prop-types";
import ReactDOM from 'react-dom';


interface OwnProps {
    mealNumber:number
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class SingleMealShortInfo extends PureComponent<Props> {
    render() {
        if (this.props.MealInfo !== undefined) {
            return (
                <div className={styles.MealInfo}>
                    <div className={styles.TypeOfMeal}>{this.typeOfMeal()}</div>
                    <div>{this.props.MealInfo.title}</div>
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

    private typeOfMeal = () => {
        if (this.props.MealInfo.mealTime=="BREAKFAST"){
            return "śniadanko"
        } else if (this.props.MealInfo.mealTime == "DINNER") {
            return "obiad"
        } else if (this.props.MealInfo.mealTime == "LUNCH") {
            return "drugie śniadanie"
        }else if (this.props.MealInfo.mealTime == "SNACK") {
            return "podwieczorek"
        }else if (this.props.MealInfo.mealTime == "SUPPER") {
            return "kolacja"
        }
    }
}


const mapStateToProps = (state: AppStore, ownProps:any) => {
    if (state.weekScheduleReducer.currentWeekSchedule !== undefined) {
        return {
            MealInfo: state.weekScheduleReducer.currentWeekSchedule[ownProps.dayNumber].meals[ownProps.mealNumber]
        }
    }

};

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SingleMealShortInfo);
