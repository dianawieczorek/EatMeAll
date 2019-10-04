import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import styles from '../AddMealToDatabase.module.css'
import MealPrep from "./MealPrep/MealPrep";
import BasicRecipeInfo from "./MealPrep/BasicRecipeInfo/BasicRecipeInfo";

interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class AddMealToDatabase extends PureComponent<Props> {
    render() {
        return (
            <form>
                <BasicRecipeInfo/>
                <div className={styles.Products}>
                    <h4 className={styles.MealRecipe}>Składniki</h4>
                    <table className={[styles.Table, "table table-striped"].join(" ")}>
                        <thead>
                        <tr>
                            <th scope="col">Nazwa</th>
                            <th scope="col">ilość g/ml</th>
                            <th scope="col">ilość słownie</th>
                            <th scope="col">kcal</th>
                            <th scope="col">białko</th>
                            <th scope="col">tłuszcz</th>
                            <th scope="col">węgle</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">chleb żytni</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">SUMA:</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <MealPrep/>
            </form>
        )
    }
}

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = () => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMealToDatabase);
