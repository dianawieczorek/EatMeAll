import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import SearchArea from "./SearchArea/SearchArea";
import styles from "./SideMenu.module.css"

interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class SideMenu extends PureComponent<Props> {
    render() {
        return (
            <React.Fragment>
                <SearchArea/>
                <button className={styles.ProductCategory}>Owoce</button>
                <button className={styles.ProductCategory}>Warzywa</button>
                <button className={styles.ProductCategory}>Pieczywo</button>
                <button className={styles.ProductCategory}>Nabiał</button>
                <button className={styles.ProductCategory}>Mięso</button>
                <button className={styles.ProductCategory}>Ryby</button>
                <button className={styles.ProductCategory}>Napoje</button>
                <button className={styles.ProductCategory}>Ziarna</button>
                <button className={styles.ProductCategory}>Przyprawy</button>
                <button className={styles.ProductCategory}>Inne</button>
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
