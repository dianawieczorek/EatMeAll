import React from 'react';
import WeekSchedule from "./Components/WeekSchedule/WeekSchedule";
import styles from "./App.module.css"
class App extends React.Component {

    render() {
        return (
            <div className={styles.Container}>
                HELLO WORLD!
<WeekSchedule/>
            </div>
        );
    }
}

export default App;
