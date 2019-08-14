import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import OneDayMealSchedule from "./OneDayMealSchedule/OneDayMealSchedule";
import styles from "./ViewOfAllWeek.module.css"
import {AppStore} from "../../../Redux/store";

interface OwnProps {
    openModal:any
    modalClosed:any
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class ViewOfAllWeek extends PureComponent<Props> {
    render() {
        return (
            <React.Fragment>
                <div className={styles.MealPlan}>
                    <React.Fragment>
                        <OneDayMealSchedule dayNumber={0} openModal ={this.props.openModal} modalClosed={this.props.modalClosed} />
                        <OneDayMealSchedule dayNumber={1}  openModal={this.props.openModal} modalClosed={this.props.modalClosed} />
                        <OneDayMealSchedule dayNumber={2}  openModal={this.props.openModal} modalClosed={this.props.modalClosed}/>
                        <OneDayMealSchedule dayNumber={3} openModal={this.props.openModal} modalClosed={this.props.modalClosed}/>
                        <OneDayMealSchedule dayNumber={4} openModal={this.props.openModal} modalClosed={this.props.modalClosed}/>
                        <OneDayMealSchedule dayNumber={5} openModal={this.props.openModal} modalClosed={this.props.modalClosed}/>
                        <OneDayMealSchedule dayNumber={6} openModal={this.props.openModal} modalClosed={this.props.modalClosed}/>
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
