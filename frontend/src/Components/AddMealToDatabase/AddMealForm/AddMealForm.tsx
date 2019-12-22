import React, {PureComponent, RefObject} from 'react';
import styles from '../AddMealToDatabase.module.css'
import MealPrep from "./MealPrep/MealPrep";
import BasicRecipeInfo from "./BasicRecipeInfo/BasicRecipeInfo";
import SelectedProductsTable from './SelectedProductsTable/SelectedProductsTable';
import {InjectedFormProps, reduxForm} from 'redux-form'
import submitForm from "../submitForm";

interface OwnProps {
    handleSubmit:any
}

type Props = OwnProps

class AddMealForm extends PureComponent<InjectedFormProps<Props>> {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <BasicRecipeInfo/>
                <div className={styles.Products}>
                    <SelectedProductsTable/>
                </div>
                <MealPrep/>
            </form>
        );
    }
}

export default reduxForm<Props>({
    form: "addMealForm",
    onSubmit: submitForm
})(AddMealForm);

