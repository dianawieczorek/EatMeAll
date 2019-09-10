import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {AppStore} from "../../Redux/store";
import {Dispatch} from "redux";
import styles from "./CaloriesAndMakroPerDay.module.css"


interface OwnProps {
    dayNumber: number
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class CaloriesAndMakroPerDay extends PureComponent<Props> {
    // makroCounter() {
    //     let dayDetails = this.props.DayInfo;
    //     if(dayDetails !== undefined) {
    //         let amountCalories=
    //             dayDetails.reduce((accumulator, dayDetails) => accumulator + dayDetails.amountCalories, 0);
    //         let amountCarbs=
    //             dayDetails.reduce((accumulator, dayDetails) => accumulator + dayDetails.amountCarbohydrates, 0);
    //         let amountFat=
    //             dayDetails.reduce((accumulator, dayDetails) => accumulator + dayDetails.amountFat, 0);
    //         let amountProtein=
    //             dayDetails.reduce((accumulator, dayDetails) => accumulator + dayDetails.amountProtein, 0);
    //         return (
    //             <tr>
    //                 <td>{amountCalories}</td>
    //                 <td>{amountCarbs}</td>
    //                 <td>{amountFat}</td>
    //                 <td>{amountProtein}</td>
    //             </tr>)
    // } else {
    //         return (
    //             <tr>
    //                 <td>0</td>
    //                 <td>0</td>
    //                 <td>0</td>
    //                 <td>0</td>
    //             </tr>
    //         )
    //     }
    // }

    render() {
        return (
            <div>
                <table className={styles.Table}>
                    <tr>
                        <th>kcal</th>
                        <th>W</th>
                        <th>T</th>
                        <th>B</th>
                    </tr>
                    {/*{this.makroCounter()}*/}
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStore, ownProps: any) => {
    if (state.weekScheduleReducer.currentWeekSchedule !== undefined) {
        return {
            // DayInfo: state.weekScheduleReducer.currentWeekSchedule[ownProps.dayNumber].meals
        }
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CaloriesAndMakroPerDay);
