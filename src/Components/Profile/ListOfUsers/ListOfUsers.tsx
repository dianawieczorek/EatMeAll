import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {AppStore} from "../../../Redux/store";
import {Dispatch} from "redux";
import {deleteUser} from "../../../Redux/actions";


interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class ListOfUsers extends PureComponent<Props> {
    render() {
        return (
            <div>
                <ol>
                    {this.props.listofUsers.map((item: string) => <li>{item}
                        <button onClick={this.deleteUserName} type="submit">skasuj dietożercę</button>
                    </li>)}
                </ol>
            </div>
        );
    }

    private deleteUserName = (e:any)  => {
        let innerValue=e.target.parentElement.innerHTML.split("<")[0];
        this.props.deleteSingleUser(innerValue)
    }

}

const mapStateToProps  = (state: AppStore) => {
    return {
        listofUsers: state.listOfUsersReducer.userList
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    deleteSingleUser: (userName: string) => dispatch(deleteUser(userName)),

});

export default connect(mapStateToProps, mapDispatchToProps)(ListOfUsers);
