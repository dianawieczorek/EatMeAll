import {weekScheduleReducer} from "./reducers";
import Member from "./Model/Member";
import {setUserName} from "./actions";

describe('WeekScheduleReducerTests', () => {
    it('reducer should have correct initial state', () => {
        expect(weekScheduleReducer(undefined, {})).toEqual({
            members: [new Member('default')],
            currentMember: new Member('default'),
            choosenMember: 'default',
            allMeals: []
        });
    });
});

describe('WeekScheduleReducerTests', () => {
    it('should add user with empty meal list', () => {
        expect(weekScheduleReducer(undefined, setUserName('test-1'))).toEqual({
            members: [new Member('default'), new Member('test-1')],
            currentMember: new Member('default'),
            choosenMember: 'default',
            allMeals: []
        });
    });
});


