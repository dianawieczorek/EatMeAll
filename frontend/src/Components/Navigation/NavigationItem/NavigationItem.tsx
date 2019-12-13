import React, {PureComponent} from 'react';
import {NavLink} from 'react-router-dom';
import styles from "./NavigationItem.module.css"


interface OwnProps {
    link:any
}

type Props = OwnProps

class NavItems extends PureComponent<Props> {
    render() {
        return (
            <li className={styles.NavigationItem}>
                <NavLink
                    to={this.props.link}
                    activeClassName={styles.active}>{this.props.children}
                </NavLink>
            </li>
        )
    }
}

export default (NavItems);
