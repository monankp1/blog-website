import { LOGIN_USER, LOGOUT_USER, ADD_USER, SET_USERS } from "./types";

export const loginUser = (user) => ({
    type: LOGIN_USER,
    payload: user,
});

export const logoutUser = () => ({
    type: LOGOUT_USER,
});

export const addUser = (user) => ({
    type: ADD_USER,
    payload: user,
});

export const setUsers = (users) => ({
    type: SET_USERS,
    payload: users,
});
