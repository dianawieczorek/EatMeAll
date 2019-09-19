import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {AppStore} from "../../../../Redux/store";
import {Dispatch} from "redux";
import styles from "./OneDayMealSchedule.module.css"
import SingleMealShortInfo from "../SingleMealShortInfo/SingleMealShortInfo";
import DateLabel from "../DateLabel/DateLabel";
import CaloriesAndMakro from "../../../CaloriesAndMakro/CaloriesAndMakroPerDay";

interface OwnProps {
    dayNumber: number
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class OneDayMealSchedule extends PureComponent<Props> {
    render() {
        return (
            <div className={styles.Day}>
                <DateLabel/>
                <CaloriesAndMakro dayNumber={this.props.dayNumber}/>
                <SingleMealShortInfo mealNumber={0} dayNumber={this.props.dayNumber}/>
                <SingleMealShortInfo mealNumber={1} dayNumber={this.props.dayNumber}/>
                <SingleMealShortInfo mealNumber={2} dayNumber={this.props.dayNumber}/>
                <SingleMealShortInfo mealNumber={3} dayNumber={this.props.dayNumber}/>
                <SingleMealShortInfo mealNumber={4} dayNumber={this.props.dayNumber}/>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStore) => {
    return {};
};

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(OneDayMealSchedule);
