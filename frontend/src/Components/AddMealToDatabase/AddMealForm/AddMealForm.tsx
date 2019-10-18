import React, {PureComponent, RefObject} from 'react';
import {connect} from 'react-redux';
import styles from '../AddMealToDatabase.module.css'
import MealPrep from "./MealPrep/MealPrep";
import BasicRecipeInfo from "./MealPrep/BasicRecipeInfo/BasicRecipeInfo";
import {AppStore} from "../../../Redux/store";
import {Dispatch} from "redux";
import {changePartAmount} from "../../../Redux/actions";
import {ProductWholeDataDto} from "../../../ServerConnection/DTOs/AllProductsDto";
import {PostProductDto} from "../../../ServerConnection/DTOs/MealRecipeDto";

interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class AddMealForm extends PureComponent<Props> {
    readonly amountInput: RefObject<HTMLInputElement>;

    constructor(Props: any) {
        super(Props);
        this.amountInput = React.createRef()
    }

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
                                <td><input type="number" defaultValue="100" id={product.id.toString()} onChange={this.productAmountChange}/></td>
                                <td><input type="text"/></td>
                                <td>{(product.calorific * this.getAountConverter(product)).toFixed()}</td>
                                <td>{(product.protein  * this.getAountConverter(product)).toFixed()}</td>
                                <td>{(product.fat  * this.getAountConverter(product)).toFixed()}</td>
                                <td>{(product.carbohydrates  * this.getAountConverter(product)).toFixed()}</td>
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
        );
    }

    private getAountConverter(product: ProductWholeDataDto) {
        return this.props.selectedProductsToSerialize.filter(p => p.id === product.id)[0].amount/100;
    }

    private productAmountChange = (e:any) => {
        let id = e.target.id;
        this.props.onAmountChange({id:id, amount:e.target.value, specialAmount:""})
    }
}

const mapStateToProps = (store: AppStore) => {
    return {
        selectedProducts: store.addMealToDatabaseReducer.selectedProducts,
        selectedProductsToSerialize: store.addMealToDatabaseReducer.toSerialize.parts
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onAmountChange: (aPart: PostProductDto) => dispatch(changePartAmount(aPart)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMealForm);
