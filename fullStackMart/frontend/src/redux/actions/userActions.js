import axios from "axios";
import { toast } from "react-toastify";
import {
    USER_LOGOUT_FAIL,
    USER_LOGOUT_REQUEST, 
    USER_LOGOUT_SUCCESS,
    USER_SIGNIN_FAIL, 
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS, 
    USER_SIGNUP_FAIL,
    USER_SIGNUP_REQUEST, 
    USER_SIGNUP_SUCCESS
} from "../constants/userConstants";


export const userSignInAction = (user) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST });
    try {
        const { data } = await axios.post("/api/signin", user);
        localStorage.setItem('userInfo', JSON.stringify(data));
        dispatch({
            type: USER_SIGNIN_SUCCESS,
            payload: user
        });
        toast.success("login successfully !");
    } catch (error) {
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload: error.response.data.error
        });
        toast.error(error.response.data.error);
    }
};


export const userSignUpAction = (user) => async (dispatch) => {
    dispatch({ type: USER_SIGNUP_REQUEST });
    try {
        const { data } = axios.post("/api/signup", user);
        localStorage.setItem('userInfo', JSON.stringify(data)
        )
        dispatch({
            type: USER_SIGNUP_SUCCESS,
            payload: data
        })
        toast.success("Accout created successfully !")
    } catch (error) {
        dispatch({
            type: USER_SIGNUP_FAIL,
            payload: error.response.data.error
        })
        toast.error(error.response.data.error);
    }
}


export const userLogoutAction = () => async (dispatch) => {
    dispatch({
        typr: USER_LOGOUT_REQUEST
    });
    try {
        const { data } = await axios.get('/api/logout');
        localStorage.removeItem('userInfo');
        dispatch({
            type: USER_LOGOUT_SUCCESS,
            payload: data
        })
        toast.success("logout successfully !")
    } catch (error) {
        dispatch({
            type: USER_LOGOUT_FAIL,
            payload: error.response.data.error
        })
        toast.error(error.response.data.error);
    }
}