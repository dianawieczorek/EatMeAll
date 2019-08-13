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
    state = {
        mealName: ''
    };

    render() {
        this.dupa()
        return (

            <div className={styles.MealInfo}>
                <div className={styles.TypeOfMeal}>śniadanko</div>
                <div>{this.state.mealName}</div>
            </div>
        );
    }

    private dupa = () => {
        let MealIfo: any = this.props.MealInfo;
        if (MealIfo !== undefined) {
            return (
                this.state.mealName = MealIfo.title
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
