import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Button from "../../UI/Button/Button"
import styles from "./PanelForUsers.module.css"
import {AppStore} from "../../../Redux/store";
import {NavLink} from "react-router-dom";
import {Dispatch} from "redux";
import {setCurrentMember} from "../../../Redux/actions";


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
                        <Button
                            onClick={this.changeScheduleForSelectedUser}>
                            <NavLink className={styles.Nav}
                                     to={"/home/" + userName}>{userName}
                            </NavLink>
                        </Button>)
                    }

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
    }
}


const mapStateToProps = (store: AppStore) => {
    return {
        memberList: store.weekScheduleReducer.members.map(member => member.name),
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setCurrentMember: (memberName: string) => dispatch(setCurrentMember(memberName)),

    }
};
export default connect(mapStateToProps, mapDispatchToProps)(PanelForUsers);