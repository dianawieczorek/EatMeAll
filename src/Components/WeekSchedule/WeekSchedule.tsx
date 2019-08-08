import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import styles from './WeekSchedule.module.css'
import ViewOfAllWeek from "./TableContent/ViewOfAllWeek";
import TableHeader from "./TableHeader/TableHeader";

interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class WeekSchedule extends PureComponent<Props> {
    render() {
        return (
            <div className={styles.Header}>
                <TableHeader/>
                <ViewOfAllWeek/>
            </div>
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
