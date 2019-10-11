import React, {Component} from 'react';
import {connect} from 'react-redux';
import SearchArea from "./SearchArea/SearchArea";
import styles from "./SideMenu.module.css"

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
            products: []
        }
    }

    componentDidMount() {
        fetch("jsonMocks/allProducts.json")
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
                    <button className={styles.ProductCategory}>{category}</button>
                )}
            </React.Fragment>
        )
    }


}

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = () => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
