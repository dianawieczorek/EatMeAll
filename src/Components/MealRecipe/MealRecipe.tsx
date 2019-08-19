import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import styles from './MealRecipe.module.css'

interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class MealRecipe extends PureComponent<Props> {
    render() {
        return (
            <React.Fragment>
                <h2>Nazwa Przepisu</h2>
                <div className={styles.ProductAndInfo}>
                    <div className={styles.BasicInfo}>
                        <p>rodzaj dania:</p>
                        <p>czas przygotowania:</p>
                        <p>ilość kcal:</p>
                        <p>autor przepisu:</p>
                    </div>
                    <div className={styles.Products}>
                        <h4 className={styles.MealRecipe}>Składniki</h4>
                        <ul>
                            <li>składnik</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.Preparation}>
                    <h4>Sposób wykonania</h4>
                    <ol>
                        <li>zrób to i to</li>
                    </ol>
                </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(MealRecipe);
