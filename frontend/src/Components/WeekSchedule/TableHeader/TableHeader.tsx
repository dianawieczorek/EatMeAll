import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Button from "../../UI/Button/Button"
import styles from "./TableHeader.module.css"
import {Dispatch} from "redux";
import {setCurrentWeekSchedule} from "../../../Redux/actions";
import {DayDietDto, WeekScheduleDto} from "../../../ServerConnection/DTOs/WeekScheduleDto";
import {SCHEDULE} from "../../../ServerConnection/RestCommunication/fileWithConstants";

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
        fetch(SCHEDULE)
            .then(response => response.json())
            .then((json: WeekScheduleDto) => {
                this.props.setCurrentWeekSchedule(json);
            })
    }
}


const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setCurrentWeekSchedule: (aCurrentWeekSchedule: WeekScheduleDto) => dispatch(setCurrentWeekSchedule(aCurrentWeekSchedule))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(TableHeader);
