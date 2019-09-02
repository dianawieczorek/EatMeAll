import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import styles from "./App.module.css"
import Layout from "./hoc/Layout/Layout";
import WeekSchedule from "./Components/WeekSchedule/WeekSchedule";
import ShoppingList from "./Components/ShoppingList/ShoppingList";

class App extends React.Component {

    render() {
        return (
            <div className={styles.Container}>
                <Layout>
                    <Switch>
                        <Route path="/home" component={WeekSchedule}/>}
                        <Redirect from="/" exact to='/home'/>
                        <Route from="/shopping-list" component={ShoppingList}/>
                        <Route render={() => <h1>Sorry but our devs still working on this page, see You soon! </h1>}/>
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;
