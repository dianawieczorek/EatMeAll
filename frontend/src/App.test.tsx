import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from 'redux-mock-store';
import {Provider} from "react-redux";
import Member from "./Redux/Model/Member";

const mockStore = configureStore([]);

const mockedStore = mockStore(
    {
        weekScheduleReducer: {
            members: [new Member('default')],
            currentMember: new Member('default'),
            choosenMember: 'default',
            allMeals: []
        }
    });
mockedStore.dispatch = jest.fn();

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(
//       <Provider store={mockedStore}>
//         <App />
//       </Provider>, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
