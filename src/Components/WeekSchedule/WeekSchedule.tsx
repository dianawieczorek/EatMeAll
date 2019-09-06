import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import styles from './WeekSchedule.module.css'
import ViewOfAllWeek from "./TableContent/ViewOfAllWeek";
import TableHeader from "./TableHeader/TableHeader";
import Modal from "../UI/Modal/Modal";
import PanelForUsers from "./PanelForUsers/PanelForUsers";

interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class WeekSchedule extends PureComponent<Props> {

    render() {
        return (
            <React.Fragment>
                <Modal/>
                <div className={styles.PageSettings}>
                    <TableHeader/>
                    <PanelForUsers/>
                    <ViewOfAllWeek/>
                </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(WeekSchedule);
