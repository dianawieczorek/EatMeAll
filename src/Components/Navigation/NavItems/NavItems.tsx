import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import NavigationItem from '../NavigationItem/NavigationItem';
import styles from "./NavItems.module.css"


interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class NavItems extends PureComponent<Props> {
render() {
    return (
        <ul className={styles.NavigationItems}>
            <NavigationItem link="/home" >home</NavigationItem>
            <NavigationItem link="/shopping-list">lista zakupów</NavigationItem>
            <NavigationItem link="/about">o nas</NavigationItem>
            <NavigationItem link="/contact">kontakt</NavigationItem>
            <NavigationItem link="/profile">profil</NavigationItem>
        </ul>
    )

}

}

const mapStateToProps = () => {
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NavItems);
