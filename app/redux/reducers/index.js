import { combineReducers } from "redux"
import { coursesReducer } from "./courses.reducer"
import { usersReducer } from "./users.reducer"


export const reducers = combineReducers({
    courses: coursesReducer,
    user: usersReducer,
});
