import React from 'react';
import configureStore from 'redux-mock-store';
import {Provider} from "react-redux";
import renderer from 'react-test-renderer';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import AddUserForm from "./AddUserForm";
import {ADD_MEMBER_NAME, DELETE_MEMBERS} from "../../../Redux/actionTypes";

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

const mockStore = configureStore([]);
let mockedStore: any;
let component: any;

beforeEach(() => {
    mockedStore = mockStore({});
    mockedStore.dispatch = jest.fn();

    component = renderer.create(
        <Provider store={mockedStore}>
            <AddUserForm/>
        </Provider>
    );
});


describe('My Connected React-Redux Component', () => {
    it('should render with given state from Redux store', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('should remove all dietożercy', () => {
        renderer.act(() => {
            component.root.findAllByType('button')[1].props.onClick();
        });

        expect(mockedStore.dispatch).toHaveBeenCalledWith({type: DELETE_MEMBERS});
    });

    it('should dispatch an action on button click', () => {
        renderer.act(() => {
            component.root.findAllByType('button')[0].props.onClick();
        });
        expect(mockedStore.dispatch).toHaveBeenCalledWith(
            {type: ADD_MEMBER_NAME, userName: ''}
        );
        expect(mockedStore.dispatch).toHaveBeenCalledTimes(1);
    });

});