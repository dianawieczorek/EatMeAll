import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {AppStore} from "../../../Redux/store";
import {Dispatch} from "redux";
import {deleteUser} from "../../../Redux/actions";
import styles from "./ListOfUsers.module.css"


interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class ListOfUsers extends PureComponent<Props> {
    render() {
        if (this.props.listofUsers !== undefined) {
            return (
                <div>
                    <ol>
                        {this.props.listofUsers.map((item: string) => <li className={styles.UserName}>{item}
                            <button className={styles.Button} onClick={this.deleteUserName} type="submit">skasuj
                                dietożercę
                            </button>
                        </li>)}
                    </ol>
                </div>
            );
        } else {
            return (
                <div>

                </div>
            )
        }
    }

    private deleteUserName = (e: any) => {
        let innerValue = e.target.parentElement.innerHTML.split("<")[0];
        this.props.deleteSingleUser(innerValue)
    }

}

const mapStateToProps = (state: AppStore) => {
    return {
        listofUsers: state.listOfUsersReducer.userList
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    deleteSingleUser: (userName: string) => dispatch(deleteUser(userName)),

});

export default connect(mapStateToProps, mapDispatchToProps)(ListOfUsers);
