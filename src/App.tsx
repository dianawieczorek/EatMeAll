import React from 'react';
import styles from "./App.module.css"
import Layout from "./hoc/Layout/Layout";
class App extends React.Component {

    render() {
        return (
            <div className={styles.Container}>
                HELLO WORLD!
<Layout/>
            </div>
        );
    }
}

export default App;
