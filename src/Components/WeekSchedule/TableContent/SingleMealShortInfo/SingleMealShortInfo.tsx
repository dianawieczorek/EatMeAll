import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {AppStore} from "../../../../Redux/store";
import {Dispatch} from "redux";
import styles from "./SingleMealShortInfo.module.css"


interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class SingleMealShortInfo extends PureComponent<Props> {
    render() {
        this.dupa()
        return (
            <div className={styles.MealInfo}>
                <div className={styles.TypeOfMeal}>śniadanko</div>
                <div>tatusiowy twarożek</div>
            </div>
        );
    }

    private dupa = () => {
        // let WeekMeal: any = this.props.currentWeekSchedule
        // if (WeekMeal !== undefined) {
        //     return (
        //         console.log(WeekMeal[0]["meals"][0]["title"]))
        // }
    }
}


const mapStateToProps = (state: AppStore) => {

    if(state.weekScheduleReducer.currentWeekSchedule!==undefined){
        console.log(state.weekScheduleReducer.currentWeekSchedule)
        console.log(state.weekScheduleReducer.currentWeekSchedule[0].meals[0])
        return {
            x: state.weekScheduleReducer.currentWeekSchedule
        }

    }
};

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SingleMealShortInfo);
