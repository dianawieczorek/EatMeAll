import React, {PureComponent, RefObject} from 'react';
import {connect} from 'react-redux';
import {addItem} from "../../Redux/actions";
import {AppStore} from "../../Redux/store";
import {Dispatch} from "redux";
import Button from '../UI/Button/Button'

interface OwnProps {

}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class SimpleForm extends PureComponent<Props> {
    readonly movieInput: RefObject<HTMLInputElement>;

    constructor(aProps: Props) {
        super(aProps);
        this.movieInput = React.createRef();
    }

    render() {
        return (
            <div>
                Some text: <input ref={this.movieInput} type="text"/>
                <Button onClick={this.addItem} type="submit">PRESS ME</Button>
            </div>
        );
    }

    private addItem = () => {
        this.props.add(this.movieInput.current!.value);
    }

}

const mapStateToProps = (state: AppStore) => {
    return {};
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
    add: (aItem: string) => dispatch(addItem(aItem))
});

export default connect(mapStateToProps, mapDispatchToProps)(SimpleForm);