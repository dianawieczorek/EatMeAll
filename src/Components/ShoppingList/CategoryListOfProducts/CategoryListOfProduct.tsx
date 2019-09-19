import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import styles from "./CategoryListOfProduct.module.css";
import {ProductDto} from "../../../ServerConnection/DTOs/ShoppingListDto";


interface OwnProps {
    category: string
    productList: Array<ProductDto>
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class CategoryListOfProduct extends PureComponent<Props> {
    render() {
        return (
            <div className={styles.Category}>
                <div className={styles.ProductLabel}>{this.props.category}</div>
                <ul>
                    {this.createList()}
                </ul>
            </div>

        )
    }
    private createList = () => {
        return this.props.productList.map((prod:ProductDto) => <li>{prod.name}, {prod.amount}{prod.unit}</li>)
    }
}

const mapStateToProps = () => {
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryListOfProduct);
