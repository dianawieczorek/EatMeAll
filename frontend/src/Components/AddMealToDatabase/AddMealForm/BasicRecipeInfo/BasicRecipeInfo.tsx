import React, {PureComponent, RefObject} from 'react';
import {connect} from 'react-redux';
import styles from '../../AddMealToDatabase.module.css'
import {
    changeAuthorOfRecipe, changeDescriptionOfRecipe, changeMealTimeCheckbox, changeNameOfRecipe,
    changePrepTime,
} from "../../../../Redux/actions";
import {Dispatch} from "redux";
import {AppStore} from "../../../../Redux/store";
import {Field} from 'redux-form'

interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class AddMealToDatabase extends PureComponent<Props> {
    readonly nameInput: RefObject<HTMLInputElement>;
    readonly creatorInput: RefObject<HTMLInputElement>;
    readonly prepTime: RefObject<HTMLInputElement>;
    readonly descriptionInput: RefObject<HTMLInputElement>;

    constructor(Props: any) {
        super(Props);
        this.nameInput = React.createRef();
        this.creatorInput = React.createRef();
        this.prepTime = React.createRef();
        this.descriptionInput = React.createRef();
    }

    render() {
        const required = (value: any) => value ? undefined : 'pole nie może być puste';
        const minValue =  (value:any) =>
            value && value < 1 ? `Czas przygotowania musi wynosić minimum 1min` : undefined;

        const renderField = ({input, label, className, type, meta: {touched, error, warning}}: any) => (
            <div>
                <input {...input} className={["form-control", className].join(" ")} placeholder={label} type={type}/>
                {touched && ((error && <span className="text-danger">{error}</span>) || (warning &&
                    <span>{warning}</span>))}
            </div>
        );

        return (
            <React.Fragment>
                <Field className={styles.NameInput} type="text" name="title" onBlur={this.changeNameOfRecipe}
                       label="nazwa posiłku" component={renderField} validate={required}/>
                <div className={styles.ProductAndInfo}>
                    <div className={styles.BasicInfo}>
                        <p>Pora posiłku: </p>
                        {this.props.mealTimes.map((mealTimes: any) =>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id={mealTimes.value}
                                       value={mealTimes.value} onClick={this.selectedMeal}  key={mealTimes.id}/>
                                <label className="form-check-label">{mealTimes.value}</label>
                            </div>
                        )}
                        <p>czas przygotowania: <Field type="number" name="prepareTime" className={styles.TimeInput}
                               onBlur={this.changePrepTime} label="ilość minut" component={renderField}
                               validate={[required, minValue]}/></p>
                        <Field type="text" name="authorReceipt" className={styles.NameInput}
                               onBlur={this.changeAuthorOfRecipe} label="autor przepisu" component={renderField}
                               validate={required}/>
                        <Field className={styles.NameInput} type="text" onBlur={this.changeDescription}
                               label="tu możesz wpisać dodatkowe informacje dotyczące posiłku" component={renderField}/>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    private changeNameOfRecipe = (e: any) => {
        this.props.changeNameOfRecipe(e.currentTarget.defaultValue)
    };

    private selectedMeal = (e: any) => {
        let selectedMeal = e.target.value;
        this.props.changeMealTimeCheckbox(selectedMeal)
    };

    private changeAuthorOfRecipe = (e: any) => {
        this.props.changeAuthorOfRecipe(e.currentTarget.defaultValue)
    };

    private changePrepTime = (e: any) => {
        this.props.changePrepTime(parseInt(e.currentTarget.defaultValue))
    };

    private changeDescription = (e: any) => {
        this.props.changeDescription(e.currentTarget.defaultValue)
    }
}

const mapStateToProps = (store: AppStore) => {
    return {
        mealTimes: store.addMealToDatabaseReducer.mealTimes,
        selectedMealTimes: store.addMealToDatabaseReducer.toSerialize.mealTimes
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        changeNameOfRecipe: (aName: string) => dispatch(changeNameOfRecipe(aName)),
        changeDescription: (aDescription: string) => dispatch(changeDescriptionOfRecipe(aDescription)),
        changeAuthorOfRecipe: (aAuthor: string) => dispatch(changeAuthorOfRecipe(aAuthor)),
        changePrepTime: (aTime: number) => dispatch(changePrepTime(aTime)),
        changeMealTimeCheckbox: (aMealTimes: string) => dispatch(changeMealTimeCheckbox(aMealTimes))

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMealToDatabase);
