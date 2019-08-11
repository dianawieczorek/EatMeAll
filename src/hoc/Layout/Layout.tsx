import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import WeekSchedule from "../../Components/WeekSchedule/WeekSchedule";
import styles from "./Layout.module.css"
import RestCommunication from "../../ServerConnection/RestCommunication/RestCommunication";

interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class Layout extends PureComponent<Props> {
    render() {
        return (
            <React.Fragment>
                <RestCommunication/>
                <main className={styles.Content}>
                    <WeekSchedule/>
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
