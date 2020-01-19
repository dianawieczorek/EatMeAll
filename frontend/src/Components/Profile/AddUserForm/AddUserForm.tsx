import React from 'react';
import {connect} from 'react-redux';
import Button from "../../UI/Button/Button"
import {deleteUsers, setUserName} from "../../../Redux/actions";
import {Dispatch} from "redux";
import styles from "./AddUserForm.module.css"

interface OwnProps {
}

interface OwnState{
    userToAdd: string;
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
type State = OwnState;

class AddUserForm extends React.Component<Props, State> {

    constructor(props:any) {
        super(props);
        this.state = {userToAdd: ''};
    }

    render() {
        return (
            <div>
                <input className={styles.Input} onChange={this.inputChanged} value={this.state.userToAdd}
                       type="text"/>
                <Button onClick={this.addUser} type="submit">dodaj dietożercę</Button>
                <Button onClick={this.deleteUsers} type="submit">skasuj wszystkich dietożerców</Button>
            </div>
        )
    }

    private addUser = () => {
        console.log(this.state)
        this.props.addUser(this.state.userToAdd);
        this.setState({userToAdd: ""})
    };

    private deleteUsers = () => {
        this.props.deleteAll();
    };

    private inputChanged = (e: any) => {
        console.log(this.state)
        console.log(e.target.value)
        this.setState({userToAdd: e.target.value})
        console.log(this.state)
        console.log(e.target.value)
    };
}

const mapStateToProps = () => {
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addUser: (aUserName: string) => dispatch(setUserName(aUserName)),
        deleteAll: () => dispatch(deleteUsers()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUserForm)