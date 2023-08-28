import {
    USER_LOGOUT_FAIL,
    USER_LOGOUT_REQUEST,
    USER_LOGOUT_RESET,
    USER_LOGOUT_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNUP_FAIL,
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_RESET,
    USER_SIGNUP_SUCCESS
} from "../constants/userConstants";

const initialState = {
    loading: false,
    userInfo: null,
    isAuthenticated: false,
    error: null,
  };

export const userSignInReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_SIGNIN_REQUEST:
            return {
                loading: true, userInfo: null, isAuthenticated: false
            }
        case USER_SIGNIN_SUCCESS:
            return {
                loading: false, userInfo: action.payload, isAuthenticated: true
            }
        case USER_SIGNIN_FAIL:
            return { loading: false, userInfo: null, isAuthenticated: false, error: action.payload }
        // case USER_SIGNIN_RESET:
        //     return {}
        default:
            return state;
    }
}


export const userSignUpReducer = (state = {}, action) => {
    switch (action.types) {
        case USER_SIGNUP_REQUEST:
            return {
                loading: true,
                userInfo: null,
                isAuthenticated: false
            }
        case USER_SIGNUP_SUCCESS:
            return {
                loading: false,
                useInfo: action.payload,
                isAuthenticated: true
            }
        case USER_SIGNUP_FAIL:
            return {
                loading: false, userInfo: null, isAuthenticated: false, error: action.payload
            }
        // case USER_SIGNUP_RESET:
        //     return {}
        default:
            return state;
    }
}

export const userReducerLogout = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGOUT_REQUEST:
            return { loading: true }
        case USER_LOGOUT_SUCCESS:
            return {
                loading: false,
                user: action.payload,
            }
        case USER_LOGOUT_FAIL:
            return { loading: false, error: action.payload }
        case USER_LOGOUT_RESET:
            return {}
        default:
            return state;
    }

}