import {createStore} from "redux";
import {rootReducer} from "../Redux/bundle";

const store = createStore(rootReducer);

export default store;
export type AppStore = ReturnType<typeof rootReducer>