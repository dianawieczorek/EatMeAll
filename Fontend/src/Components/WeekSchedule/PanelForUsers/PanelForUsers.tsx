import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Button from "../../UI/Button/Button"
import styles from "./PanelForUsers.module.css"
import {AppStore} from "../../../Redux/store";
import {Dispatch} from "redux";
import {setCurrentMember} from "../../../Redux/actions";
import {NavLink} from "react-router-dom";


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
        console.log(e.target.value);

    };

    private copyWholeWeekToSelectedMember = () => {
        console.log(this.props.currentMember)
        console.log(this.changeSelectedMember)
    }
}


const mapStateToProps = (store: AppStore) => {
    return {
        memberList: store.weekScheduleReducer.members.map(member => member.name),
        currentMember: store.weekScheduleReducer.currentMember
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setCurrentMember: (memberName: string) => dispatch(setCurrentMember(memberName)),

    }
};
export default connect(mapStateToProps, mapDispatchToProps)(PanelForUsers);
