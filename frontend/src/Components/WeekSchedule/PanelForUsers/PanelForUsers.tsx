import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Button from "../../UI/Button/Button"
import styles from "./PanelForUsers.module.css"
import {AppStore} from "../../../Redux/store";
import {Dispatch} from "redux";
import {chooseMemberToCopy, setCurrentMember, setCurrentWeekSchedule} from "../../../Redux/actions";
import {NavLink} from "react-router-dom";
import {DayDietDto} from "../../../ServerConnection/DTOs/WeekScheduleDto";


interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class PanelForUsers extends PureComponent<Props> {
    render() {
        if (this.props.memberList !== undefined) {
            return (
                <div className={styles.Wrapper}>
                    <div>
                        Wybierz dietożercę
                    </div>
                    {this.props.memberList.map((userName: string) =>
                        <NavLink to={"/home/" + userName} className={styles.Nav}>
                            <Button
                                onClick={this.changeScheduleForSelectedUser}
                            >
                                {userName}
                            </Button>
                        </NavLink>)
                    }

                    <select onChange={this.changeSelectedMember}>
                        {this.props.memberList.map((memberName: string) =>
                            <option value={memberName}>{memberName}</option>)}
                    </select>
                    <Button onClick={this.copyWholeWeekToSelectedMember}>skopiuj cały tydzień</Button>

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
        this.props.setCurrentMember(e.target.innerHTML);
    };

    private changeSelectedMember = (e: any) => {
        this.props.setChoosenMember(e.target.value);

    };

    private copyWholeWeekToSelectedMember = () => {
        let weekToCopy = this.props.members.filter(member => member.name === this.props.choosenMember)[0].weekSchedule;
        this.props.setCurrentWeekSchedule(weekToCopy);
    }
}


const mapStateToProps = (store: AppStore) => {
    return {
        memberList: store.weekScheduleReducer.members.map(member => member.name),
        members: store.weekScheduleReducer.members,
        currentMember: store.weekScheduleReducer.currentMember,
        choosenMember: store.weekScheduleReducer.choosenMember
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setCurrentMember: (memberName: string) => dispatch(setCurrentMember(memberName)),
        setChoosenMember: (member: string) => dispatch(chooseMemberToCopy(member)),
        setCurrentWeekSchedule: (aCurrentWeekSchedule: Array<DayDietDto>) => dispatch(setCurrentWeekSchedule(aCurrentWeekSchedule))


    }
};
export default connect(mapStateToProps, mapDispatchToProps)(PanelForUsers);
