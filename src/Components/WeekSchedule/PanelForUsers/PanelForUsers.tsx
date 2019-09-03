import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Button from "../../UI/Button/Button"
import styles from "./PanelForUsers.module.css"
import {Dispatch} from "redux";
import {setCurrentWeekSchedule} from "../../../Redux/actions";
import {DayDto} from "../../../ServerConnection/DTOs/WeekScheduleDto";

interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class PanelForUsers extends PureComponent<Props> {
    render() {
        return (
            <div className={styles.Wrapper}>
                <div>
                    Wybierz dietożercę
                </div>

                <Button>
                    Dianka
                </Button>
                <Button>
                    Przemek
                </Button>

            </div>
        );
    }

}


const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setCurrentWeekSchedule: (aCurrentWeekSchedule: Array<DayDto>) => dispatch(setCurrentWeekSchedule(aCurrentWeekSchedule))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(PanelForUsers);
