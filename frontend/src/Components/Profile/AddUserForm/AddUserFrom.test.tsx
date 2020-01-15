import React from 'react';
import configureStore from 'redux-mock-store';
import {Provider} from "react-redux";
import renderer from 'react-test-renderer';

import AddUserForm from "./AddUserForm";
import {AnyAction, Store} from "redux";

//CONTRACT:
//1. What should be rendered?
// one test input and two buttons add and delete wrapped by div
//
//2. What component pass to his childs as props?
//  methods to add and delete user, methods implementations come from redux
//
//3. How user can affects to component?
// click on any button and change store
//
//4. Component has any cifecycle behaviour?
// --

// Static HTML
const STATIC_HTML = `<div>
//     <input type="text" class="Input"/>
//     <button class="Button undefined">dodaj dietożercę</button>
//     <button class="Button undefined">skasuj wszystkich dietożerców</button>
// </div>`.replace(/(\r\n|\n|\r)/gm, '').replace(/  +/g, '');


const mockStore = configureStore([]);
let mockedStore: any;
let component: any;

beforeEach(() => {
    mockedStore = mockStore({
        myState: 'sample text',
    });

    component = renderer.create(
        <Provider store={mockedStore}>
            <AddUserForm />
        </Provider>
    );
});


describe('My Connected React-Redux Component', () => {
    it('should render with given state from Redux store', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });
    
    it('should dispatch an action on button click', () => {
    });
});

