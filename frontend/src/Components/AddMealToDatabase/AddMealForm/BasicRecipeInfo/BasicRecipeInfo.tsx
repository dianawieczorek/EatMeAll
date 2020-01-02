import React, {PureComponent, RefObject} from 'react';
import {connect} from 'react-redux';
import styles from '../../AddMealToDatabase.module.css'
import {
    changeAuthorOfRecipe, changeDescriptionOfRecipe, changeNameOfRecipe,
    changePrepTime,
} from "../../../../Redux/actions";
import {Dispatch} from "redux";
import MealTypeCheckbox from "./MealTypeCheckbox";
import InputFieldTypeText from "./InputFieldTypeText/InputFieldTypeText";
import InputFieldTypeNumber from "./InputFieldTypeNumber/InputFieldTypeNumber";

interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapDispatchToProps>;

class AddMealToDatabase extends PureComponent<Props> {
    render() {
        return (
            <React.Fragment>
                <InputFieldTypeText type="text" name="title" onBlur={this.changeNameOfRecipe}
                                    label="nazwa posiłku" placeholder="pyszny przepis"/>
                <MealTypeCheckbox/>
                <InputFieldTypeNumber type="number" name="prepareTime"
                                      onBlur={this.changePrepTime} label="czas przygotowania w minutach"/>
                <InputFieldTypeText type="text" name="authorReceipt"
                                    onBlur={this.changeAuthorOfRecipe} label="autor przepisu" placeholder="Janina"/>
                <InputFieldTypeText name="description" type="text"
                                    onBlur={this.changeDescription}
                                    label="dodatkowy opis"
                                    placeholder="tu możesz wpisać dodatkowe informacje dotyczące posiłku"/>
            </React.Fragment>
        )
    }

    public changeNameOfRecipe = (e: any) => {
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

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        changeNameOfRecipe: (aName: string) => dispatch(changeNameOfRecipe(aName)),
        changeDescription: (aDescription: string) => dispatch(changeDescriptionOfRecipe(aDescription)),
        changeAuthorOfRecipe: (aAuthor: string) => dispatch(changeAuthorOfRecipe(aAuthor)),
        changePrepTime: (aTime: number) => dispatch(changePrepTime(aTime)),
    };
};

export default connect(null, mapDispatchToProps)(AddMealToDatabase);
