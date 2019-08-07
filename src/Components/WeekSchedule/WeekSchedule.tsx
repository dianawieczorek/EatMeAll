import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import TableHeader from "./TableHeader/TableHeader";
import TableContent from "./TableContent/TableContent";

interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class WeekSchedule extends PureComponent<Props> {
    render() {
        return (
            <div>
                <TableHeader/>
                <TableContent/>
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
