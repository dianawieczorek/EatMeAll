import React, {Component} from 'react';
import {connect} from 'react-redux';
import SearchArea from "./SearchArea/SearchArea";
import styles from "./SideMenu.module.css"
import {PRODUCT_INFORMATION} from "../../../ServerConnection/RestCommunication/fileWithConstants";
import {Dispatch} from "redux";
import {AppStore} from "../../../Redux/store";
import {setAllProducts} from "../../../Redux/actions";

interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

type State = {
    products: Array<string>;
}

class SideMenu extends Component<Props, State> {
    // constructor(props: Props, state: State) {
    //     super(props, state);
    //     this.state = {
    //         products: [],
    //     }
    // }

    componentDidMount() {
        fetch(PRODUCT_INFORMATION)
            .then(response => response.json())
            .then((json: any) => {
                this.props.setAllProducts(json)
            });
    }

    render() {
        return (
            <React.Fragment>
                <SearchArea/>
                {this.props.allProducts.map((products: any) =>
                    <div className={styles.Dropdown}>
                        <button className={styles.ProductCategory}
                                onClick={this.productSelectionList}>{products.type}</button>
                        <div id={products.type} className={styles.DropdownContent}>
                            {products.products.map((name: any) => <a>{name.name}</a>)}
                        </div>
                    </div>
                )}
            </React.Fragment>
        )
    }

    private productSelectionList = (e: any) => {
        let innerValue = e.target.innerHTML;
        document.getElementById(innerValue)!.classList.toggle(styles.show);
        fetch(PRODUCT_INFORMATION)
            .then(response => response.json())
            .then((json: any) => {
                let products = json.filter((category: any) => category.type == innerValue)[0].products;
                this.showListOfProducts(products)
            });
    };

    private showListOfProducts = (selectedMealJson: any) => {
        let dupa = <div>{selectedMealJson.map((product: any) => <button>{product}</button>)}</div>;
        console.log(dupa)
    };


}

const mapStateToProps = (store: AppStore) => {
    return {
        allProducts: store.addMealToDatabaseReducer.allProducts
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setAllProducts: (allProducts: any) => dispatch(setAllProducts(allProducts)),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
