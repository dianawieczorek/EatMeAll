import React, {PureComponent, RefObject} from 'react';
import {connect} from 'react-redux';
import {ProductWholeDataDto} from "../../../../../ServerConnection/DTOs/AllProductsDto";
import {AppStore} from "../../../../../Redux/store";
import {changePartAmount} from "../../../../../Redux/actions";
import {PostProductDto} from "../../../../../ServerConnection/DTOs/MealRecipeDto";
import {Dispatch} from "redux";

interface OwnProps {
    product:ProductWholeDataDto
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class SelectedProduct extends PureComponent<Props> {

    render() {
        return (
            <tr>
                <th scope="row">{this.props.product.name}</th>
                <td><input type="number" defaultValue="100" id={this.props.product.id.toString()} onChange={this.productAmountChange}/></td>
                <td><input type="text"/></td>
                <td>{(this.props.product.calorific * this.getAmountConverter(this.props.product)).toFixed()}</td>
                <td>{(this.props.product.protein  * this.getAmountConverter(this.props.product)).toFixed()}</td>
                <td>{(this.props.product.fat  * this.getAmountConverter(this.props.product)).toFixed()}</td>
                <td>{(this.props.product.carbohydrates  * this.getAmountConverter(this.props.product)).toFixed()}</td>
                <button>-</button>
            </tr>
        );
    }

    private getAmountConverter(product: ProductWholeDataDto) {
        return this.props.selectedProductsToSerialize.filter(p => p.id === product.id)[0].amount / 100;
    }

    private productAmountChange = (e: any) => {
        let id = e.target.id;
        let name = e.target.name;
        this.props.onAmountChange({id: id, name: name, amount: parseInt(e.target.value), specialAmount: ""})
    }
}

const mapStateToProps = (store:AppStore) => {
    return {
        selectedProductsToSerialize: store.addMealToDatabaseReducer.toSerialize.parts
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onAmountChange: (aPart: PostProductDto) => dispatch(changePartAmount(aPart)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SelectedProduct);
