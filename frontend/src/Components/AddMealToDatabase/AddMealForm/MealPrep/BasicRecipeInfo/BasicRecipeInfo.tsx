import React, {PureComponent, RefObject} from 'react';
import {connect} from 'react-redux';
import styles from '../../../AddMealToDatabase.module.css'
import {
    changeAuthorOfRecipe, changeMealTimeCheckbox, changeNameOfRecipe,
    changePrepTime,
} from "../../../../../Redux/actions";
import {Dispatch} from "redux";
import {AppStore} from "../../../../../Redux/store";

interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class AddMealToDatabase extends PureComponent<Props> {
    readonly nameInput: RefObject<HTMLInputElement>;
    readonly creatorInput: RefObject<HTMLInputElement>;
    readonly prepTime: RefObject<HTMLInputElement>;

    constructor(Props: any) {
        super(Props);
        this.nameInput = React.createRef();
        this.creatorInput = React.createRef();
        this.prepTime = React.createRef();
    }

    render() {
        return (
            <React.Fragment>
                <input className={styles.NameInput} type="text" name="title" ref={this.nameInput}
                       onChange={this.changeNameOfRecipe}
                       placeholder="nazwa posiłku"/>
                <div className={styles.ProductAndInfo}>
                    <div className={styles.BasicInfo}>
                        <p>Pora posiłku: </p>
                        {this.props.mealTimes.map((mealTimes:any) =>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id={mealTimes.value}
                                       value={mealTimes.value} onClick={this.selectedMeal} key={mealTimes.id}/>
                                <label className="form-check-label">{mealTimes.value}</label>
                            </div>
                        )}
                        <p>czas przygotowania: <input type="number" name="5"
                                                      placeholder="podaj ilość minut" ref={this.prepTime}
                                                      onChange={this.changePrepTime}/></p>
                        <p>autor przepisu: <input type="text" name="authorReceipt" ref={this.creatorInput}
                                                  onChange={this.changeAuthorOfRecipe}/></p>
                        <p>dodatkowe informacje<input className={styles.NameInput} placeholder="tu możesz wpisać dodatkowe informacje dotyczące posiłku"/></p>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    private changeNameOfRecipe = () => {
        this.props.changeNameOfRecipe(this.nameInput.current!.value)
    };

    private selectedMeal = (e: any) => {
        let selectedMeal = e.target.value;
        this.props.changeMealTimeCheckbox(selectedMeal)
    };

    private changeAuthorOfRecipe = () => {
        this.props.changeAuthorOfRecipe(this.creatorInput.current!.value)
    };

    private changePrepTime = () => {
        this.props.changePrepTime(parseInt(this.prepTime.current!.value))
    };

}

const mapStateToProps = (store: AppStore) => {
    return {
        mealTimes: store.addMealToDatabaseReducer.mealTimes
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        changeNameOfRecipe: (aName: string) => dispatch(changeNameOfRecipe(aName)),
        changeAuthorOfRecipe: (aAuthor: string) => dispatch(changeAuthorOfRecipe(aAuthor)),
        changePrepTime: (aTime: number) => dispatch(changePrepTime(aTime)),
        changeMealTimeCheckbox: (aMealTimes: Array<string>) => dispatch(changeMealTimeCheckbox(aMealTimes))

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMealToDatabase);
