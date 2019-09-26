import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from "../ShoppingList.module.css"
import {AppStore} from "../../../Redux/store";
import {GroupproductsDto} from "../../../ServerConnection/DTOs/ShoppingListDto";
import {Dispatch} from "redux";
import {changeCheckbox} from "../../../Redux/actions";


interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class WeekCheckbox extends Component<Props> {
    render() {
        return (
            <div>
                {this.props.days.map((day) =>
                    <div className={styles.DayList}>
                        <input value={day.value} key={day.id} type="checkbox" onClick={this.selectedDay}/>
                        <label>{day.value}</label>
                    </div>
                )}
            </div>
        )
    }

    private selectedDay = (e: any) => {
        let selectedDay = e.target.value;
        this.props.changeCheckbox(selectedDay)
    };
}

const mapStateToProps = (store: AppStore) => {
    return {
        days: store.shoppingListReducer.days
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        changeCheckbox: (aDayName: string) => dispatch(changeCheckbox(aDayName))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(WeekCheckbox);
