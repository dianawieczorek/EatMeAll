import React, {PureComponent} from 'react';

import styles from './DrawerToggle.module.css'
import {connect} from "react-redux";


interface OwnProps {
    clicked:any
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

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
};

const mapStateToProps = () => {
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DrawerToggle);
