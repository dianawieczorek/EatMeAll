import React, {PureComponent} from 'react';
import style from '..//WeekSchedule/WeekSchedule.module.css'
import styles from './AddMealToDatabase.module.css'
import SideMenu from "./SideMenu/SideMenu";
import AddMealForm from "./AddMealForm/AddMealForm";
import RemoteSubmitButton from "./RemoteSubmitButton";
import classes from "../WeekSchedule/TableHeader/TableHeader.module.css";


interface OwnProps {
    handleSubmit: any
}

type Props = OwnProps

class AddMealToDatabase extends PureComponent<Props> {
    render() {
        return (
            <div className={style.PageSettings}>
                <div className={classes.TableHeader}>
                    <div className={classes.Label}>Dodaj swój posiłek do bazy</div>
                    <RemoteSubmitButton/>
                </div>
                <div className={["Container", styles.Content].join(' ')}>
                    <div className="row">
                        <div className={["col-md-3", styles.SideMenu].join(" ")}>
                            <SideMenu/>
                        </div>
                        <div id="addMeal" className={["col-md-9", styles.Main].join(" ")}>
                            <AddMealForm onSubmit={this.props.handleSubmit}/>
                        </div>
                    </div>


                </div>
            </div>);
    }

}


export default (AddMealToDatabase);
