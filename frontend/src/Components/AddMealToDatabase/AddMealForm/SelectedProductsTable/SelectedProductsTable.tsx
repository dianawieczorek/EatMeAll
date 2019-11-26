import React, {PureComponent, RefObject} from 'react';
import {connect} from 'react-redux';
import styles from '../../AddMealToDatabase.module.css'
import {AppStore} from "../../../../Redux/store";
import SelectedProduct from "./SelectedProduct/SelectedProduct";

interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class SelectedProductsTable extends PureComponent<Props> {
    render() {
        let tableWithAllCalories = this.props.selectedProducts.map(prod => prod.calorific);
        let tableWithAllCarbs = this.props.selectedProducts.map(prod => prod.carbohydrates);
        let tableWithAllProtein = this.props.selectedProducts.map(prod => prod.protein);
        let tableWithAllFat = this.props.selectedProducts.map(prod => prod.fat);
        let tableWithAmoutnts = this.props.selectedProductsToSerialize.map(p => p.amount / 100);

        return (
            <React.Fragment>
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
                    {this.props.selectedProducts.map(product => <SelectedProduct product={product}/>)}
                    {}
                    <tr>
                        <th scope="row">SUMA:</th>
                        <td>{this.props.selectedProductsToSerialize.map(prod => prod).reduce((accumulator, productDetails) => accumulator + productDetails.amount, 0)}</td>
                        <td>-</td>
                        <td>{tableWithAllCalories.reduce((acc, cal, i) => acc + cal * tableWithAmoutnts[i], 0).toFixed()}</td>
                        <td>{tableWithAllProtein.reduce((acc, protein, i) => acc + protein * tableWithAmoutnts[i], 0).toFixed()}</td>
                        <td>{tableWithAllFat.reduce((acc, fat, i) => acc + fat * tableWithAmoutnts[i], 0).toFixed()}</td>
                        <td>{tableWithAllCarbs.reduce((acc, carbs, i) => acc + carbs * tableWithAmoutnts[i], 0).toFixed()}</td>
                    </tr>
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (store: AppStore) => {
    return {
        selectedProducts: store.addMealToDatabaseReducer.selectedProducts,
        selectedProductsToSerialize: store.addMealToDatabaseReducer.toSerialize.parts
    };
};

const mapDispatchToProps = () => {
    return {};
};


export default connect(mapStateToProps, mapDispatchToProps)(SelectedProductsTable);
