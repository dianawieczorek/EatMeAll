import React, {PureComponent, RefObject} from 'react';
import {Field} from 'redux-form'
import styles from '../../../AddMealToDatabase.module.css'

interface OwnProps {
    type:string;
    name:string;
    onBlur:any;
    label:string
}

type Props = OwnProps

class InputFieldTypeNumber extends PureComponent<Props>  {
    render() {
        const required = (value: any) => value ? undefined : 'pole nie może być puste';
        const minValue = (value: any) =>
            value && value < 1 ? `Czas przygotowania musi wynosić minimum 1min` : undefined;

        const renderField = ({input, label, className, type, meta: {touched, error}}: any) => (
            <div>
                <label className={styles.Label}>{label}:</label>
                <input {...input} className={["form-control", className].join(" ")} placeholder="ilość minut" type={type}/>
                {touched && (error && <span className="text-danger">{error}</span>)}
            </div>
        );

        return (
            <Field className={styles.TimeInput} type={this.props.type} name={this.props.name} onBlur={this.props.onBlur}
                   label={this.props.label} component={renderField} validate={[required, minValue]}/>
        )
    }
}

export default (InputFieldTypeNumber)