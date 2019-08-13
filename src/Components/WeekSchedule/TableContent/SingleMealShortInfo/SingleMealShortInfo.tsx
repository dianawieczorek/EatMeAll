import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {AppStore} from "../../../../Redux/store";
import {Dispatch} from "redux";
import styles from "./SingleMealShortInfo.module.css"
import {element} from "prop-types";
import ReactDOM from 'react-dom';


interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class SingleMealShortInfo extends PureComponent<Props> {
    render() {
        if (this.props.MealInfo !== undefined) {
            return (
                <div className={styles.MealInfo}>
                    <div className={styles.TypeOfMeal}>śniadanko</div>
                    <div>{this.props.MealInfo.title}</div>
                </div>
            );
        } else {
            return (
                <div className={styles.MealInfo}>
                    <div className={styles.TypeOfMeal}>śniadanko</div>
                    <div> </div>
                </div>
            )
        }
    }
}


const mapStateToProps = (state: AppStore) => {

    if (state.weekScheduleReducer.currentWeekSchedule !== undefined) {
        return {
            MealInfo: state.weekScheduleReducer.currentWeekSchedule[0].meals[0]
        }

    }
};

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SingleMealShortInfo);
