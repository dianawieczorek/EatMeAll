import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {AppStore} from "../../../../Redux/store";
import {Dispatch} from "redux";
import styles from "./SingleMealShortInfo.module.css"


interface OwnProps {}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class SingleMealShortInfo extends PureComponent<Props> {
  render() {
      console.log(this.props.currentWeekSchedule)
    return (
        <div className={styles.MealInfo}>
            <div className={styles.TypeOfMeal}>śniadanko</div>
            <div>tatusiowy twarożek</div>
        </div>
    );
  }
}

const mapStateToProps = (state: AppStore) => {
    return {
        currentWeekSchedule: state.weekScheduleReducer.currentWeekSchedule
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleMealShortInfo);
