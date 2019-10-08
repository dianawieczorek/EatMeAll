import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import SearchArea from "./SearchArea/SearchArea";
import styles from "./SideMenu.module.css"

interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class SideMenu extends PureComponent<Props> {
    render() {
        const categoryListOfProduct = ["Owoce","Warzywa","Pieczywo","Nabiał", "Mięso","Ryby","Napoje","Ziarna","Przyprawy","Inne"];

        return (
            <React.Fragment>
                <SearchArea/>
                {categoryListOfProduct.map(category =>
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
