import React, {Component, RefObject} from 'react';
import {connect} from 'react-redux';
import styles from '../../AddMealToDatabase.module.css'
import {AppStore} from "../../../../Redux/store";
import {ProductWholeDataDto} from "../../../../ServerConnection/DTOs/AllProductsDto";
import {Dispatch} from "redux";
import {addProduct} from "../../../../Redux/actions";
import {GET_PRODUCT_BY_ID_URL} from "../../../../ServerConnection/RestCommunication/fileWithConstants";

interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

interface State {
    currentProductInputValue: string
}

class SideMenu extends Component<Props, State> {
    readonly productInput: RefObject<HTMLInputElement>;

    constructor(Props: any, State: any) {
        super(Props, State);
        this.productInput = React.createRef();
        this.state = {
            currentProductInputValue: ""
        }
    }


    render() {
        return (
            <div className={styles.SearchArea}>
                <form action="">
                    <div className=" bg-light rounded rounded-pill shadow-sm search-box">
                        <div className="input-group">
                            <input type="search" onChange={this.changeCurrentProductInputValue} ref={this.productInput}
                                   placeholder="czego szukasz" aria-describedby="button-addon3"
                                   className="form-control bg-none border-0"/>
                        </div>
                        <div className={[styles.SearchResults, "result"].join(" ")}>
                            {this.createListOfMatchingProducts()}
                        </div>
                    </div>
                </form>
                <p>rodzaj</p>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="protein" value="protein"/>
                    <label className="form-check-label">białkowy</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="carbs" value="carbs"/>
                    <label className="form-check-label">węglowy</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="fat" value="fat"/>
                    <label className="form-check-label">tłuszczowy</label>
                </div>
            </div>
        )
    }

    private changeCurrentProductInputValue = () => {
        document.querySelector(".result")!.classList.add(styles.show);
        let innerValue = this.productInput.current!.value;
        this.setState({currentProductInputValue: innerValue});
    };

    private createListOfMatchingProducts() {
        const flatProducts = this.props.allProducts.flatMap(category => category.products);
        return flatProducts.filter(p => p.name.toLocaleLowerCase().includes(this.state.currentProductInputValue.toLocaleLowerCase())
        ).map(p => <li id={p.id.toString()}
                       onClick={this.selectProduct}>{p.name}</li>)
    }

    private selectProduct = (e: any) => {
        let id = e.target.id;
        fetch(GET_PRODUCT_BY_ID_URL + id)
            .then(response => response.json())
            .then((json: ProductWholeDataDto) => {
                this.props.addProductToTable(json)
            });
        document.querySelector(".result")!.classList.toggle(styles.show);
        this.productInput.current!.value = ""

    }
}

const mapStateToProps = (store: AppStore) => {
    return {
        allProducts: store.addMealToDatabaseReducer.allProducts
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addProductToTable: (aProduct: ProductWholeDataDto) => dispatch(addProduct(aProduct))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
