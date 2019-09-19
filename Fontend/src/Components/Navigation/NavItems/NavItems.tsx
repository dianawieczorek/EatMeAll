import React, {PureComponent} from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';
import styles from "./NavItems.module.css"



class NavItems extends PureComponent {
render() {
    return (
        <ul className={styles.NavigationItems}>
            <NavigationItem link="/home/" >home</NavigationItem>
            <NavigationItem link="/shopping-list">lista zakupów</NavigationItem>
            <NavigationItem link="/add-meal">dodaj posiłek</NavigationItem>
            <NavigationItem link="/about">o nas</NavigationItem>
            <NavigationItem link="/contact">kontakt</NavigationItem>
            <NavigationItem link="/profile">profil</NavigationItem>
        </ul>
    )

}

}


export default(NavItems);
