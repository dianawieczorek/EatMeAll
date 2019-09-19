import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Button from "../../UI/Button/Button"
import styles from "./TableHeader.module.css"
import {Dispatch} from "redux";
import {setCurrentWeekSchedule} from "../../../Redux/actions";
import {DayDto} from "../../../ServerConnection/DTOs/WeekScheduleDto";

interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class TableHeader extends PureComponent<Props> {
    render() {
        return (
            <div className={styles.TableHeader}>
                <div className={styles.Label}>Plan posiłków</div>
                <div className={styles.Buttons}>
                    <Button onClick={this.randomCurrentWeekSchedule}>
                        Wygeneruj posiłki
                    </Button>
                    <Button>
                        Obecny tydzień
                    </Button>
                    <Button>
                        Kalendarz
                    </Button>
                </div>
            </div>
        );
    }

    private randomCurrentWeekSchedule = (e: MouseEvent) => {
        fetch("http://217.182.78.23:100/app/schedule")
            .then(response => response.json())
            .then((json: Array<DayDto>) => {
                this.props.setCurrentWeekSchedule(json);
            })
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
export default connect(mapStateToProps, mapDispatchToProps)(TableHeader);
