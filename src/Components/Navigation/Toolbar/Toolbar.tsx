import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import styles from "./Toolbar.module.css"
import NavItems from "../NavItems/NavItems";
import Logo from "../../../LOGO/Logo"

interface OwnProps {
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
            </header>
        )
    }
}

const mapStateToProps = () => {
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
