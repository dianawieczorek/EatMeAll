import React, {Component} from 'react';
import {connect} from 'react-redux';
import SearchArea from "./SearchArea/SearchArea";
import styles from "./SideMenu.module.css"
import {PRODUCT_INFORMATION} from "../../../ServerConnection/RestCommunication/fileWithConstants";

interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

type State = {
    products: Array<string>;
}

class SideMenu extends Component<Props, State> {
    constructor(props: Props, state: State) {
        super(props, state);
        this.state = {
            products: [],
        }
    }

    componentDidMount() {
        fetch(PRODUCT_INFORMATION)
            .then(response => response.json())
            .then((json: any) => {
                this.setState({
                    products: json.map((category: any) => category.type)
                });

            });
    }

    render() {
        return (
            <React.Fragment>
                <SearchArea/>
                {this.state.products.map(category =>
                    <div className={styles.Dropdown}>
                        <button className={styles.ProductCategory}
                                onClick={this.productSelectionList}>{category}</button>
                        <div id={category} className={styles.DropdownContent}>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
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

    };



}

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = () => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
