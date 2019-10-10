import React, {PureComponent, RefObject} from 'react';
import {connect} from 'react-redux';
import {Dispatch} from "redux";
import {deletePrepStep} from "../../../../../Redux/actions";
import {AppStore} from "../../../../../Redux/store";
import styles from "./ListOfPrepSteps.module.css"

interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class AddMealToDatabase extends PureComponent<Props> {
    readonly stepInput: RefObject<HTMLInputElement>;

    constructor(Props:any) {
        super(Props);
        this.stepInput = React.createRef();
    }

    render() {
        if (this.props.prepSteps !== undefined) {
            return (
                <React.Fragment>
                    <ol>
                        {this.props.prepSteps.map((step: string) => <li className={styles.Step}>{step}
                            <button type="button" className="btn btn-secondary  btn-number"
                                    onClick={this.deletePrepStep}>-
                            </button>
                        </li>)}
                    </ol>
                </React.Fragment>
            );
        } else {
            return (
                <div>

                </div>
            );
        }
    }

    private deletePrepStep = (e:any) => {
        let innerValue = e.target.parentElement.innerHTML.split("<")[0];
        this.props.deletePrepStep(innerValue)
    }
}

const mapStateToProps = (store: AppStore) => {
    return {
        prepSteps: store.addMealToDatabaseReducer.preparation.map(step => step)
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        deletePrepStep: (aStep: string) => dispatch(deletePrepStep(aStep))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMealToDatabase);
