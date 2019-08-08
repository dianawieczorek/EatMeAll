import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {AppStore} from "../../../../Redux/store";
import {Dispatch} from "redux";
import styles from  "./OneDayMealSchedule.module.css"
import SingleMealShortInfo from "../SingleMealShortInfo/SingleMealShortInfo";
import DateLabel from "../DateLabel/DateLabel";

interface OwnProps {}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class OneDayMealSchedule extends PureComponent<Props> {
  render() {
    return (
        <div className={styles.Day}>
            <DateLabel/>
            <SingleMealShortInfo/>
            <SingleMealShortInfo/>
            <SingleMealShortInfo/>
            <SingleMealShortInfo/>
            <SingleMealShortInfo/>
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
