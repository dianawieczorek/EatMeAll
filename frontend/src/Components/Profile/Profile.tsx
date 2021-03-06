import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import classes from "../WeekSchedule/TableHeader/TableHeader.module.css";
import style from '..//WeekSchedule/WeekSchedule.module.css'
import styles from "./Profile.module.css"
import ListOfUsers from "./ListOfUsers/ListOfUsers";
import AddUserForm from "./AddUserForm/AddUserForm";

interface OwnProps {
}

type Props = OwnProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class Profile extends PureComponent<Props> {
    render() {
        return (
            <div className={style.PageSettings}>
                <div className={classes.TableHeader}>
                    <div className={classes.Label}>Zarządzaj listą dietożerców</div>
                </div>
                <div className={styles.Content}>
                    <ListOfUsers/>
                    <AddUserForm/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = () => {
};

const mapDispatchToProps = () => {
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
