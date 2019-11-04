import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import styles from './WeekSchedule.module.css'
import ViewOfAllWeek from "./TableContent/ViewOfAllWeek";
import TableHeader from "./TableHeader/TableHeader";
import Modal from "../UI/Modal/Modal";
import PanelForUsers from "./PanelForUsers/PanelForUsers";
import {SHOW_DETAIL_URL} from "../../ServerConnection/RestCommunication/fileWithConstants";
import {setAllMeals} from "../../Redux/actions";
import {Dispatch} from "redux";
import {MealRecipeDto} from "../../ServerConnection/DTOs/MealRecipeDto";

interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class WeekSchedule extends PureComponent<Props> {
    componentDidMount() {
        fetch(SHOW_DETAIL_URL)
            .then(response => response.json())
            .then((json: any) => {
                this.props.setAllMeals(json)
            });
    }
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

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setAllMeals: (allMeals: Array<MealRecipeDto>) => dispatch(setAllMeals(allMeals)),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(WeekSchedule);
