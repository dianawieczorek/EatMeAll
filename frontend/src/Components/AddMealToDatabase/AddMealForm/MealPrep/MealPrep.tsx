import React, {PureComponent, RefObject} from 'react';

import styles from '../../AddMealToDatabase.module.css'
import ListOfPrepSteps from "./ListOfPrepSteps/ListOfPrepSteps";
import AddPrepStep from "./AddPrepStep/AddPrepStep";
import {AppStore} from "../../../../Redux/store";
import {connect} from "react-redux";
import {Field} from 'redux-form'


type Props = ReturnType<typeof mapStateToProps>;

class AddMealToDatabase extends PureComponent<Props> {
    render() {
        const renderField = ({input, meta: {touched, error}}: any) => (
            <div>
                <input {...input} style={{display:"none"}}/>
                {touched && (error && <span className="text-danger">{error}</span>)}
            </div>
        );
        
        return (
                <div className={styles.Preparation}>
                    <h4>Sposób wykonania</h4>
                    <p>podaj przepis (krok po kroku):</p>
                    <ListOfPrepSteps/>
                    <AddPrepStep/>
                    <Field component={renderField} type="text" name={"mealPrep"}
                           validate={() => this.props.prepSteps.length > 0 ? undefined : 'napisz instrukcję wykonania!'}/>
                </div>
        )}

}

const mapStateToProps = (store: AppStore) => {
    return {
        prepSteps: store.addMealToDatabaseReducer.toSerialize.steps
    };
};

export default connect(mapStateToProps)(AddMealToDatabase);
