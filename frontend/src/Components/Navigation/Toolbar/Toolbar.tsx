import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import styles from "./Toolbar.module.css"
import NavItems from "../NavItems/NavItems";
import Logo from "../../LOGO/Logo"
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

interface OwnProps {
    drawerToggleClicked:any
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class Toolbar extends PureComponent<Props> {
    render() {
        let navigation = <NavItems/>;
        return (
            <header className={styles.Toolbar}>
                <Logo/>
                <nav className={styles.DesktopOnly}>
                    {navigation}
                </nav>
                <DrawerToggle clicked={this.props.drawerToggleClicked}/>
            </header>
        )
    }
}

const mapStateToProps = () => {
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
