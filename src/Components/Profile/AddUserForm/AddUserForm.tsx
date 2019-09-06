import React, {PureComponent, RefObject} from 'react';
import {connect} from 'react-redux';
import Button from "../../UI/Button/Button"
import {deleteUsers, setUserName} from "../../../Redux/actions";
import {Dispatch} from "redux";


interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class AddUserForm extends PureComponent<Props> {
    readonly userNameInput: RefObject<HTMLInputElement>;

    constructor(Props:any) {
        super(Props);
        this.userNameInput = React.createRef();
    }

    render() {
        return (
            <div>
                <input ref={this.userNameInput} type="text"/>
                <Button onClick={this.addUser} type="submit">dodaj dietożercę</Button>
                <Button onClick={this.deleteUsers} type="submit">skasuj wszystkich dietożerców</Button>
            </div>
        )
    }

    private addUser = () => {
        this.props.addUser(this.userNameInput.current!.value)
    }
    private deleteUsers = () => {
        this.props.deleteAll();
    }
}

const mapStateToProps = () => {
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addUser: (aUserName: string) => dispatch(setUserName(aUserName)),
        deleteAll: () => dispatch(deleteUsers()),

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUserForm);
