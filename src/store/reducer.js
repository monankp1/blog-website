import { LOGIN_USER, LOGOUT_USER, ADD_USER, SET_USERS } from "./types";
import initialState from "./state";


function userReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                isLoggedIn: true,
                userName: action.payload.userName,
                userRole: action.payload.role,
            };

        case LOGOUT_USER:
            return {
                ...state,
                isLoggedIn: false,
                userName: '',
                userRole: '',
            };
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload],
            };
        case SET_USERS:
            return {
                ...state,
                users: action.payload,
            };
        default:
            return state;
    }
}

export default userReducer;