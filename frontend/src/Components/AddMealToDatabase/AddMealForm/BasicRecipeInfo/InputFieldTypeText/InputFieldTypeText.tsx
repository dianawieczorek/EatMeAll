import React, {PureComponent, RefObject} from 'react';
import {Field} from 'redux-form'
import styles from '../../../AddMealToDatabase.module.css'

interface OwnProps {
    type:string;
    name:string;
    onBlur:any;
    label:string
    placeholder:string
}

type Props = OwnProps

class InputFieldTypeText extends PureComponent<Props>  {
    render() {
        const required = (value: any) => value ? undefined : 'pole nie może być puste';

        const renderField = ({input,placeholder, label, className, type, meta: {touched, error}}: any) => (
            <div>
                <label className={styles.Label}>{label}:</label>
                <input {...input} className={["form-control", className].join(" ")} placeholder={placeholder} type={type}/>
                {touched && (error && <span className="text-danger">{error}</span>)}
            </div>
        );

        return (
            <Field className={styles.NameInput} type={this.props.type} name={this.props.name} onBlur={this.props.onBlur}
                   label={this.props.label} component={renderField} validate={required} placeholder={this.props.placeholder}/>
        )
    }
}

export default (InputFieldTypeText)