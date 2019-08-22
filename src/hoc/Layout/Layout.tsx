import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import WeekSchedule from "../../Components/WeekSchedule/WeekSchedule";
import styles from "./Layout.module.css"
import RestCommunication from "../../ServerConnection/RestCommunication/RestCommunication";
import NavItems from "../../Components/Navigation/NavItems/NavItems";
import Toolbar from "../../Components/Navigation/Toolbar/Toolbar";

interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class Layout extends PureComponent<Props> {
    render() {
        return (
            <React.Fragment>
                <RestCommunication/>
                <Toolbar/>
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

const mapDispatchToProps = () => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
