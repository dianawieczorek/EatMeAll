import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import styles from './WeekSchedule.module.css'
import ViewOfAllWeek from "./TableContent/ViewOfAllWeek";
import TableHeader from "./TableHeader/TableHeader";
import Modal from "../UI/Modal/Modal";
import MealRecipe from "../MealRecipe/MealRecipe";

interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class WeekSchedule extends PureComponent<Props> {
    state = {
        showModal: false,
        modalData: <MealRecipe/>
    }
    cancelHandler = () => {
        this.setState({showModal: false});
    };

    showModal = (modalData: any) => {
        this.setState({showModal: true, modalData: modalData});

    }

    render() {
        return (
            <React.Fragment>
                <Modal show={this.state.showModal} modalClosed={this.cancelHandler}>
                    {this.state.modalData}
                </Modal>
                <div className={styles.Header}>
                    <TableHeader/>
                    <ViewOfAllWeek openModal={this.showModal}
                                   modalClosed={this.cancelHandler}/>
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
