import React, {Component} from 'react';
import {connect} from 'react-redux';
import SearchArea from "./SearchArea/SearchArea";
import styles from "./SideMenu.module.css"
import {
    ALL_PRODUCTS_INFORMATION, GET_PRODUCT_BY_ID_URL,
} from "../../../ServerConnection/RestCommunication/fileWithConstants";
import {Dispatch} from "redux";
import {AppStore} from "../../../Redux/store";
import {addProduct, setAllProducts} from "../../../Redux/actions";
import {
    ProductsInCategoryDto, ProductWholeDataDto,
    SingleCategoryDto
} from "../../../ServerConnection/DTOs/AllProductsDto";

interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;


class SideMenu extends Component<Props> {
    componentDidMount() {
        fetch(ALL_PRODUCTS_INFORMATION)
            .then(response => response.json())
            .then((json: any) => {
                this.props.setAllProducts(json)
            });
    }

    render() {
        return (
            <React.Fragment>
                <SearchArea/>
                {this.props.allProducts.map((products: SingleCategoryDto) =>
                    <div className={styles.Dropdown}>
                        <button className={styles.ProductCategory}
                                onClick={this.productSelectionList}>{products.name}</button>
                        <div id={products.name} className={styles.DropdownContent}>
                            {products.products.map((productsInCategory: ProductsInCategoryDto) => <button
                                id={productsInCategory.id.toString()}
                                onClick={this.selectProduct}>{productsInCategory.name}</button>)}
                        </div>
                    </div>
                )}
            </React.Fragment>
        )
    }

    private productSelectionList = (e: any) => {
        let innerValue = e.target.innerHTML;
        document.getElementById(innerValue)!.classList.toggle(styles.show);
        let products = this.props.allProducts.filter((category: any) => category.name == innerValue)[0].products;
        return <div>{products.map((product: any) => <button>{product}</button>)}</div>;
    };

    private selectProduct = (e: any) => {
        let id = e.target.id;
        fetch(GET_PRODUCT_BY_ID_URL + id)
            .then(response => response.json())
            .then((json:ProductWholeDataDto)=> {
                this.props.addProductToTable(json)
            })
    }
}

const mapStateToProps = (store: AppStore) => {
    return {
        allProducts: store.addMealToDatabaseReducer.allProducts
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setAllProducts: (allProducts: Array<SingleCategoryDto>) => dispatch(setAllProducts(allProducts)),
        addProductToTable: (aProduct: ProductWholeDataDto) => dispatch(addProduct(aProduct))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
