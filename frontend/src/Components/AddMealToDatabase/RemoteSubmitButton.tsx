import React from 'react';
import {connect} from 'react-redux';
import {submit} from 'redux-form';
import Button from "../UI/Button/Button"
import classes from "../WeekSchedule/TableHeader/TableHeader.module.css";


const RemoteSubmitButton = ({dispatch}:any) => (
    <div className={classes.Buttons}>
        <Button type="button" onClick={() => dispatch(submit('addMealForm'))}>
            Dodaj posiłek do bazy
        </Button>
    </div>
);

export default connect()(RemoteSubmitButton);