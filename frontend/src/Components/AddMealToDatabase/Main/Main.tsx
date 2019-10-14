import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import styles from '../AddMealToDatabase.module.css'
import MealPrep from "./MealPrep/MealPrep";
import BasicRecipeInfo from "./MealPrep/BasicRecipeInfo/BasicRecipeInfo";
import {
    ALL_PRODUCTS_INFORMATION,
    SINGLE_PRODUCT_INFORMATION
} from "../../../ServerConnection/RestCommunication/fileWithConstants";
import {AppStore} from "../../../Redux/store";

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
                        {this.props.selectedProducts.map(product =>
                        <tr>
                            <th scope="row">{product.name}</th>
                            <td><input  type="number" defaultValue="100"/></td>
                            <td><input type="text"/></td>
                            <td>{product.calorific}</td>
                            <td>{product.protein}</td>
                            <td>{product.fat}</td>
                            <td>{product.carbohydrates}</td>
                        </tr>)}
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

const mapStateToProps = (store: AppStore) => {
    return {
        selectedProducts: store.addMealToDatabaseReducer.selectedProducts
    };
};

const mapDispatchToProps = () => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMealToDatabase);
