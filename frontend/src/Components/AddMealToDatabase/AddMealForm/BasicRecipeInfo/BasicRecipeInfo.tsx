import React, {PureComponent, RefObject} from 'react';
import {connect} from 'react-redux';
import styles from '../../AddMealToDatabase.module.css'
import {
    changeAuthorOfRecipe, changeDescriptionOfRecipe, changeNameOfRecipe,
    changePrepTime,
} from "../../../../Redux/actions";
import {Dispatch} from "redux";
import {Field} from 'redux-form'
import MealTypeCheckbox from "./MealTypeCheckbox";

interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class AddMealToDatabase extends PureComponent<Props> {
    render() {
        const required = (value: any) => value ? undefined : 'pole nie może być puste';
        const minValue = (value: any) =>
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
                        <MealTypeCheckbox/>
                        <p>czas przygotowania: <Field type="number" name="prepareTime" className={styles.TimeInput}
                                                      onBlur={this.changePrepTime} label="ilość minut"
                                                      component={renderField}
                                                      validate={[required, minValue]}/></p>
                        <Field type="text" name="authorReceipt" className={styles.NameInput}
                               onBlur={this.changeAuthorOfRecipe} label="autor przepisu" component={renderField}
                               validate={required}/>
                        <Field name="description" className={styles.NameInput} type="text"
                               onBlur={this.changeDescription}
                               label="tu możesz wpisać dodatkowe informacje dotyczące posiłku" component={renderField}/>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    private changeNameOfRecipe = (e: any) => {
        this.props.changeNameOfRecipe(e.currentTarget.defaultValue)
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

const mapStateToProps = () => {
    return {
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        changeNameOfRecipe: (aName: string) => dispatch(changeNameOfRecipe(aName)),
        changeDescription: (aDescription: string) => dispatch(changeDescriptionOfRecipe(aDescription)),
        changeAuthorOfRecipe: (aAuthor: string) => dispatch(changeAuthorOfRecipe(aAuthor)),
        changePrepTime: (aTime: number) => dispatch(changePrepTime(aTime)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMealToDatabase);
