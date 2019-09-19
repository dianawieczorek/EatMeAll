import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import styles from "./NavigationItem.module.css"


interface OwnProps {
    link:any
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

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

const mapStateToProps = () => {
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NavItems);
