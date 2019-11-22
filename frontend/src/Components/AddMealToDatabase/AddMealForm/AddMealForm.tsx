import React, {PureComponent, RefObject} from 'react';
import {connect} from 'react-redux';
import styles from '../AddMealToDatabase.module.css'
import MealPrep from "./MealPrep/MealPrep";
import BasicRecipeInfo from "./BasicRecipeInfo/BasicRecipeInfo";
import SelectedProductsTable from './SelectedProductsTable/SelectedProductsTable';

interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class AddMealForm extends PureComponent<Props> {
    render() {
        return (
            <form >
                <BasicRecipeInfo/>
                <div className={styles.Products}>
                    <SelectedProductsTable/>
                </div>
                <MealPrep/>
            </form>
        );
    }
}

const mapStateToProps = () => {
    return {
    };
};

const mapDispatchToProps = () => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMealForm);
