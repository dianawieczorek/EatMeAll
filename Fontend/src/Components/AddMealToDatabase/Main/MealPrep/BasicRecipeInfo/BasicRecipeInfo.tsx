import React, {PureComponent, RefObject} from 'react';
import {connect} from 'react-redux';
import styles from '../../../AddMealToDatabase.module.css'
import {
    changeCheckbox, changeCreatorOfRecipe, changeMealTimeCheckbox, changeNameOfRecipe,
    deletePrepStep
} from "../../../../../Redux/actions";
import {Dispatch} from "redux";
import {AppStore} from "../../../../../Redux/store";

interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class AddMealToDatabase extends PureComponent<Props> {
    readonly nameInput: RefObject<HTMLInputElement>;
    readonly creatorInput: RefObject<HTMLInputElement>;

    constructor(Props:any) {
        super(Props);
        this.nameInput = React.createRef();
        this.creatorInput = React.createRef();
    }
    render() {
        return (
            <React.Fragment>
                <input className={styles.NameInput} type="text" name="title" ref={this.nameInput} onChange={this.changeNameOfRecipe}
                       placeholder="nazwa posiłku"/>
                <div className={styles.ProductAndInfo}>
                    <div className={styles.BasicInfo}>
                        <p>Pora posiłku: </p>
                        {this.props.mealTime.map((mealTime) =>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id={mealTime.value}
                                       value={mealTime.value} onClick={this.selectedMeal} key={mealTime.id}/>
                                <label className="form-check-label">{mealTime.value}</label>
                            </div>
                        )}
                        <p>czas przygotowania: <input type="text" name="5"
                                                      placeholder="podaj ilość minut" /></p>
                        <p>autor przepisu: <input type="text" name="authorReceipt" ref={this.creatorInput} onChange={this.changeCreatorOfRecipe}/></p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
    private changeNameOfRecipe = () => {
        this.props.changeNameOfRecipe(this.nameInput.current!.value)
    };

    private selectedMeal = (e:any) => {
        let selectedMeal = e.target.value;
        this.props.changeMealTimeCheckbox(selectedMeal)
    };
    private changeCreatorOfRecipe = () => {
        this.props.changeCreatorOfRecipe(this.creatorInput.current!.value)
    };

}

const mapStateToProps = (store: AppStore) => {
    return {
        mealTime: store.addMealToDatabaseReducer.mealTime
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        changeNameOfRecipe: (aName: string) => dispatch(changeNameOfRecipe(aName)),
        changeCreatorOfRecipe: (aCreator: string) => dispatch(changeCreatorOfRecipe(aCreator)),
        changeMealTimeCheckbox: (aMealTime: string) => dispatch(changeMealTimeCheckbox(aMealTime))

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMealToDatabase);
