import {weekScheduleReducer} from "./reducers";
import {deleteUsers} from "./actions";

describe('My Connected React-Redux Component', () => {
    it('should render with given state from Redux store', () => {
        expect(weekScheduleReducer(undefined, deleteUsers())).toEqual({
            members: []
        });
    });
});

