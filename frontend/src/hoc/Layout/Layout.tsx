import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import styles from "./Layout.module.css"
import RestCommunication from "../../ServerConnection/RestCommunication/RestCommunication";
import Toolbar from "../../Components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../Components/Navigation/SideDrawer/SideDrawer";
import {Dispatch} from "redux";
import {openSidedrawer} from "../../Redux/actions";

interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class Layout extends PureComponent<Props> {

    sideDrawerOpen = () => {
        this.props.openSidedrawer()
    };

    render() {
        return (
            <React.Fragment>
                <RestCommunication/>
                <Toolbar drawerToggleClicked={this.sideDrawerOpen}/>
                <SideDrawer/>
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </React.Fragment>
        );
    }
}

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        openSidedrawer: () => dispatch(openSidedrawer()),


    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Layout)
