import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import OneDayMealSchedule from "./OneDayMealSchedule/OneDayMealSchedule";
import styles from "./ViewOfAllWeek.module.css"
import {AppStore} from "../../../Redux/store";

interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class ViewOfAllWeek extends PureComponent<Props> {
    render() {
        return (
            <React.Fragment>
                <div className={styles.MealPlan}>
                    <React.Fragment>
                        <OneDayMealSchedule dayNumber={0}/>
                        <OneDayMealSchedule dayNumber={1}/>
                        <OneDayMealSchedule dayNumber={2}/>
                        <OneDayMealSchedule dayNumber={3}/>
                        <OneDayMealSchedule dayNumber={4}/>
                        <OneDayMealSchedule dayNumber={5}/>
                        <OneDayMealSchedule dayNumber={6}/>
                    </React.Fragment>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state: AppStore) => {
    return {}
};

const mapDispatchToProps = () => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(ViewOfAllWeek);
