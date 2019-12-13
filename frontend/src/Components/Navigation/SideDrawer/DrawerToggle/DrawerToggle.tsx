import React, {PureComponent} from 'react';
import styles from './DrawerToggle.module.css'

interface OwnProps {
    clicked:any
}

type Props = OwnProps

class DrawerToggle extends PureComponent<Props> {
    render() {
        return (
            <div className={styles.DrawerToggle} onClick={this.props.clicked}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    }
}

export default (DrawerToggle);
