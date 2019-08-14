import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {AppStore} from "../../../../Redux/store";
import {Dispatch} from "redux";
import styles from  "./OneDayMealSchedule.module.css"
import SingleMealShortInfo from "../SingleMealShortInfo/SingleMealShortInfo";
import DateLabel from "../DateLabel/DateLabel";

interface OwnProps {
    dayNumber:number
    openModal:any
    modalClosed:any
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class OneDayMealSchedule extends PureComponent<Props> {
  render() {
    return (
        <div className={styles.Day}>
            <DateLabel/>
            <SingleMealShortInfo mealNumber={0} dayNumber={this.props.dayNumber} openModal={this.props.openModal} modalClosed={this.props.modalClosed}/>
            <SingleMealShortInfo mealNumber={1} dayNumber={this.props.dayNumber} openModal={this.props.openModal} modalClosed={this.props.modalClosed}/>
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

const mapDispatchToProps = (dispatch: Dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(OneDayMealSchedule);
