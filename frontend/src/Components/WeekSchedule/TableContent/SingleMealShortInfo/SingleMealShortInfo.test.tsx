import React from 'react';
import configureStore from 'redux-mock-store';
import {Provider} from "react-redux";
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SingleMealShortInfo from "./SingleMealShortInfo";

Enzyme.configure({adapter: new Adapter()});


//CONTRACT:
//1. What should be rendered?
//
//
//2. What component pass to his childs as props?
//
//
//3. How user can affects to component?
//
//
//4. Component has any cifecycle behaviour?
//

const mockStore = configureStore([]);
let mockedStore: any;
let component: any;

beforeEach(() => {
    mockedStore = mockStore(
        {
            weekScheduleReducer:
                {
                    currentMember:
                        {
                            name: 'test',
                            weekSchedule: {
                                id: 1,
                                version: 0,
                                days: [
                                    {
                                        id: 1,
                                        meals: [
                                            {name: 'test-meal'}
                                        ]
                                    }
                                ]
                            }

                        }
                }
        });
    mockedStore.dispatch = jest.fn();

    component = renderer.create(
        <Provider store={mockedStore}>
            <SingleMealShortInfo mealNumber={0} dayNumber={0}/>
        </Provider>
    );
});

// DOESN'T work because FontAwesomeIcon generates random ids and we cannot inject other for test
// describe('My Connected React-Redux Component', () => {
//     it('should render with given state from Redux store', () => {
//         expect(component.toJSON()).toMatchSnapshot();
//     });
// });