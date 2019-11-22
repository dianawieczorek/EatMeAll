import React, {PureComponent, RefObject} from 'react';
import {connect} from 'react-redux';
import {ProductWholeDataDto} from "../../../../../ServerConnection/DTOs/AllProductsDto";
import {AppStore} from "../../../../../Redux/store";
import {changePartAmount, deleteProduct} from "../../../../../Redux/actions";
import {PostProductDto} from "../../../../../ServerConnection/DTOs/MealRecipeDto";
import styles from './SelectedProduct.module.css'
import {Dispatch} from "redux";


interface OwnProps {
    product: ProductWholeDataDto
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class SelectedProduct extends PureComponent<Props> {
    readonly amountInput: RefObject<HTMLInputElement>;

    constructor(Props: any) {
        super(Props);
        this.amountInput = React.createRef()
    }

    render() {
        return (
            <React.Fragment>
                <tr>
                    <th scope="row">{this.props.product.name}</th>
                    <td><input type="number" defaultValue="100" id={this.props.product.id.toString()}
                               onChange={this.productAmountChange}/></td>
                    <td><input type="text"/></td>
                    <td>{(this.props.product.calorific * this.getAmountConverter(this.props.product)).toFixed()}</td>
                    <td>{(this.props.product.protein * this.getAmountConverter(this.props.product)).toFixed()}</td>
                    <td>{(this.props.product.fat * this.getAmountConverter(this.props.product)).toFixed()}</td>
                    <td>{(this.props.product.carbohydrates * this.getAmountConverter(this.props.product)).toFixed()}</td>
                    <td><input type="button" value="-" onClick={this.deleteProduct}
                               className={[styles.DeleteButton, "btn btn-secondary  btn-number"].join(" ")}/></td>
                </tr>
            </React.Fragment>
        );
    }

    private getAmountConverter(product: ProductWholeDataDto) {
        return this.props.selectedProductsToSerialize.filter(p => p.id === product.id)[0].amount / 100;
    }

    private productAmountChange = (e: any) => {
        let id = e.target.id;
        let name = e.target.name;
        this.props.onAmountChange({id: id, name: name, amount: parseInt(e.target.value), specialAmount: ""})
    };

    private deleteProduct = () => {
        this.props.deleteProduct(this.props.product.name)
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
        deleteProduct: (aProduct: string) => dispatch(deleteProduct(aProduct))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SelectedProduct);
