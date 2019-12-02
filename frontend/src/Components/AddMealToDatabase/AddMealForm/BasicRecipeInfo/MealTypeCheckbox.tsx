import React, {PureComponent, RefObject} from 'react';
import {Dispatch} from "redux";
import {AppStore} from "../../../../Redux/store";
import {connect} from "react-redux";
import {changeMealTimeCheckbox} from "../../../../Redux/actions";


interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class MealTypeCheckbox extends PureComponent<Props> {
    render() {
        return (
            <React.Fragment>
                {this.props.mealTimes.map((mealTimes: any) =>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id={mealTimes.value}
                               value={mealTimes.value} onClick={this.selectedMeal} key={mealTimes.id}/>
                        <label className="form-check-label">{mealTimes.value}</label>
                    </div>
                )}
            </React.Fragment>
        )
    }

    private selectedMeal = (e: any) => {
        let selectedMeal = e.target.value;
        this.props.changeMealTimeCheckbox(selectedMeal)
    };
}


const mapStateToProps = (store: AppStore) => {
    return {
        mealTimes: store.addMealToDatabaseReducer.mealTimes,
        selectedMealTimes: store.addMealToDatabaseReducer.toSerialize.mealTimes
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        changeMealTimeCheckbox: (aMealTimes: string) => dispatch(changeMealTimeCheckbox(aMealTimes))

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MealTypeCheckbox)