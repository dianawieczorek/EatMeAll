import React from 'react';
import styles from './Button.module.css'

const button = (props:any) => (
    <button
        className={[styles.Button, styles[props.btnType]].join(' ')}
onClick={props.onClick}>{props.children}</button>
);

export default button;