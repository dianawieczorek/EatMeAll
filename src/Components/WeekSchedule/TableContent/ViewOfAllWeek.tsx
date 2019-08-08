import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import OneDayMealSchedule from "./OneDayMealSchedule/OneDayMealSchedule";
import styles from "./ViewOfAllWeek.module.css"

interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class ViewOfAllWeek extends PureComponent<Props> {
    render() {
        return (
            <React.Fragment>
                <div className={styles.MealPlan}>
                    <React.Fragment>
                        <OneDayMealSchedule/>
                        <OneDayMealSchedule/>
                        <OneDayMealSchedule/>
                        <OneDayMealSchedule/>
                        <OneDayMealSchedule/>
                        <OneDayMealSchedule/>
                        <OneDayMealSchedule/>
                    </React.Fragment>
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
export default connect(mapStateToProps, mapDispatchToProps)(ViewOfAllWeek);
