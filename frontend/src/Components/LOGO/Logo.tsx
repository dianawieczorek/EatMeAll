import React from 'react';

import Logo from "../../assets/EMAlogo.png"
import styles from './Logo.module.css';


const logo = () => (
    <div className={styles.Logo}>
        <a href="/">
            <img src={Logo} alt="Eat Me All"/>
        </a>
    </div>
);

export default logo;