import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from "../../../ShoppingList/ShoppingList.module.css"
import {AppStore} from "../../../../Redux/store";


interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class WeekCheckbox extends Component<Props> {
    render() {
        return (
            <div>
                {this.props.days.map((day) =>
                    <div className={styles.DayList}>
                        <input value={day.value} type="checkbox"/>
                        <label>{day.value}</label>
                    </div>
                )}
                </div>
        )
    }
}

const mapStateToProps = (store: AppStore) => {
    return {
        days: store.shoppingListReducer.days
    }
};

const mapDispatchToProps = () => {

};

export default connect(mapStateToProps, mapDispatchToProps)(WeekCheckbox);
