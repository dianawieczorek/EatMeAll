import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import styles from "./App.module.css"
import Layout from "./hoc/Layout/Layout";
import WeekSchedule from "./Components/WeekSchedule/WeekSchedule";
import ShoppingList from "./Components/ShoppingList/ShoppingList";
import Profile from "./Components/Profile/Profile";
import AddMealToDatabase from "./Components/AddMealToDatabase/AddMealToDatabase";
import {AppStore} from "./Redux/store";
import {connect} from "react-redux";

type Props = ReturnType<typeof mapStateToProps>;

class App extends React.Component<Props> {

    render() {
        const defaultUser= this.props.memberList[0];
        return (
            <div className={styles.Container}>
                <Layout>
                    <Switch>
                        <Route path="/home/:userName" component={WeekSchedule}/>}
                        <Redirect from="/" exact to={'/home/'+defaultUser}/>
                        <Redirect from="/home" exact to={'/home/'+defaultUser}/>
                        <Route from="/shopping-list" component={ShoppingList}/>
                        <Route from="/add-meal" component={AddMealToDatabase}/>
                        <Route from="/profile" component={Profile}/>
                        <Route render={() => <h1>Sorry but our devs still working on this page, see You soon! </h1>}/>
                    </Switch>
                </Layout>
            </div>
        );
    }
}
const mapStateToProps = (store: AppStore) => {
    return {
        memberList: store.weekScheduleReducer.members.map(member => member.name),
    };
};
export default connect(mapStateToProps)(App);
