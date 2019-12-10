import React, {PureComponent} from 'react';
import Backdrop from "../../UI/Backdrop/Backdrop"
import Logo from "../../LOGO/Logo"
import NavItems from "../../Navigation/NavItems/NavItems"
import styles from './SideDrawer.module.css'
import {connect} from "react-redux";
import {AppStore} from "../../../Redux/store";
import {closeSidedrawer} from "../../../Redux/actions";
import {Dispatch} from "redux";

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class SideDrawer extends PureComponent<Props> {
    render() {
        let attachedStyles = [styles.SideDrawer, styles.Close];
        if (this.props.visible) {
            attachedStyles = [styles.SideDrawer, styles.Open];
        }
        return (
            <React.Fragment>
                <Backdrop show={this.props.visible} clicked={this.closeSidedrawer}/>
                <div className={attachedStyles.join(' ')}>
                    <div className={styles.Logo}>
                        <Logo />
                    </div>
                    <nav>
                        <NavItems />
                    </nav>
                </div>
            </React.Fragment>
        );
    }
    closeSidedrawer = () => {
        this.props.closeSidedrawer();
    };
}

const mapStateToProps = (store:AppStore) => {
    return {
        visible: store.sidedrawerReducer.visible,
    };
};

const mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        closeSidedrawer: () => dispatch(closeSidedrawer())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer);
