import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Button from "../../UI/Button/Button"
import styles from "./PanelForUsers.module.css"
import {AppStore} from "../../../Redux/store";
import {NavLink} from "react-router-dom";
import {DayDto} from "../../../ServerConnection/DTOs/WeekScheduleDto";
import {Dispatch} from "redux";
import {setCurrentWeekSchedule} from "../../../Redux/actions";
import SingleMealShortInfo from "../TableContent/SingleMealShortInfo/SingleMealShortInfo";


interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class PanelForUsers extends PureComponent<Props> {
    render() {
        if (this.props.userList !== undefined) {
            return (
                <div className={styles.Wrapper}>
                    <div>
                        Wybierz dietożercę
                    </div>
                    {this.props.userList.map((userName: string) => <Button onClick={this.changeScheduleForSelectedUser}>
                        <NavLink className={styles.Nav}
                                 to={"/home/" + userName}>{userName}
                        </NavLink>
                    </Button>)}

                </div>
            );
        } else {
            return (
                <div className={styles.Wrapper}>
                    <div>
                        Wybierz dietożercę
                    </div>
                </div>
            )
        }

    }

    private changeScheduleForSelectedUser = (e: any) => {
        // window.location.reload
    }
}


const mapStateToProps = (store: AppStore) => {
    return {
        userList: store.listOfUsersReducer.userList,
    };
};

const mapDispatchToProps = () => {

};
export default connect(mapStateToProps, mapDispatchToProps)(PanelForUsers);
