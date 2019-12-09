import React, {PureComponent, RefObject} from 'react';
import {connect} from 'react-redux';
import {Dispatch} from "redux";
import {addPrepStep} from "../../../../../Redux/actions";

interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapDispatchToProps>;

class AddMealToDatabase extends PureComponent<Props> {
    readonly stepInput: RefObject<HTMLInputElement>;

    constructor(Props:any) {
        super(Props);
        this.stepInput = React.createRef();
    }

    render() {
        return (
            <React.Fragment>
                    <input id="preparationInput" type="text" onKeyDown={this.addPrepStepOnEnter} name="receiptDTO" ref={this.stepInput}/>
                    <button type="button" className="btn btn-dark  btn-number" onClick={this.addPrepStep}>+</button>
            </React.Fragment>
        )}

    private addPrepStep = () => {
        if(this.stepInput.current!.value !== "") {
            this.props.addPrepStep(this.stepInput.current!.value);
            this.stepInput.current!.value = "";
            document.getElementById("preparationInput")!.focus();
            document.getElementById("addMeal")!.scrollTop += 200;
        }
    };

    private addPrepStepOnEnter = (e:any) => {
        if (e.keyCode === 13) {
            this.props.addPrepStep(this.stepInput.current!.value);
            this.stepInput.current!.value = "";
            document.getElementById("addMeal")!.scrollTop +=200;
        }
    };
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPrepStep: (aStep: string) => dispatch(addPrepStep(aStep)),
    };
};

export default connect( mapDispatchToProps)(AddMealToDatabase);
