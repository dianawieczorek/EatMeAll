import React from 'react';
import List from "./Components/list/List";
import SimpleForm from "./Components/SimpleForm/SimpleForm";

class App extends React.Component {

    render() {
        return (
            <div>
                HELLO WORLD!
                <List></List>
                <SimpleForm></SimpleForm>
            </div>
        );
    }
}

export default App;
