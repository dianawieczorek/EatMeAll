import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import styles from "./CategoryListOfProduct.module.css";


interface OwnProps {
    category: string
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class CategoryListOfProduct extends PureComponent<Props> {
    render() {
        return (
            <div className={styles.Category}>
                <div className={styles.ProductLabel}>{this.props.category}</div>
                <ul>
                    <li className={styles.Done}>produkt</li>
                    <li>produkt</li>
                    <li>produkt</li>
                    <li>produkt</li>
                </ul>
            </div>

        )
    }
}

const mapStateToProps = () => {
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryListOfProduct);
