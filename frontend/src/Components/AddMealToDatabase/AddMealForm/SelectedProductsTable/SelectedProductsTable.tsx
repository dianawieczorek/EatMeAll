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

                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (store: AppStore) => {
    return {
        selectedProducts: store.addMealToDatabaseReducer.selectedProducts,
    };
};

const mapDispatchToProps = () => {
    return {
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SelectedProductsTable);
