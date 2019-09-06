import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Button from "../../UI/Button/Button"
import styles from "./PanelForUsers.module.css"
import {Dispatch} from "redux";
import {setCurrentWeekSchedule} from "../../../Redux/actions";
import {DayDto} from "../../../ServerConnection/DTOs/WeekScheduleDto";
import {AppStore} from "../../../Redux/store";

interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class PanelForUsers extends PureComponent<Props> {
    render() {
        return (
            <div className={styles.Wrapper}>
                <div>
                    Wybierz dietożercę
                </div>
                {this.props.userList.map((userName:string) => <Button>{userName}</Button>)}

            </div>
        );
    }

}


const mapStateToProps = (store: AppStore) => {
    return {
        userList: store.listOfUsersReducer.userList
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setCurrentWeekSchedule: (aCurrentWeekSchedule: Array<DayDto>) => dispatch(setCurrentWeekSchedule(aCurrentWeekSchedule))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(PanelForUsers);
