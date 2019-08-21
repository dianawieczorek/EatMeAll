import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import styles from "./ListOfMeals.module.css"

interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class ListOfMeals extends PureComponent<Props> {

    render() {
        return (
            <div className={styles.MealList}>
                <h2>Wybierz posiłek</h2>
                <ul className={styles.mealButtons}>
                    <li> posiłek</li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = () => {

};

const mapDispatchToProps = () => {

};
export default connect(mapStateToProps, mapDispatchToProps)(ListOfMeals);
