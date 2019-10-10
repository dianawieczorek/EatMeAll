import React, {PureComponent, RefObject} from 'react';

import styles from '../../AddMealToDatabase.module.css'
import ListOfPrepSteps from "./ListOfPrepSteps/ListOfPrepSteps";
import AddPrepStep from "./AddPrepStep/AddPrepStep";

class AddMealToDatabase extends PureComponent {
    render() {
        return (
                <div className={styles.Preparation}>
                    <h4>Sposób wykonania</h4>
                    <p>podaj przepis (krok po kroku):</p>
                    <ListOfPrepSteps/>
                    <AddPrepStep/>
                </div>
        )}

}

export default(AddMealToDatabase);
