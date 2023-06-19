import {
  REGISTER_USER_LOADING,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from "./actionTypes";
import axios from "axios";

const SIGNUP_USER = (dispatch) => (data) => {
  dispatch({ type: REGISTER_USER_LOADING });
  axios
    .post("http://localhost:8080/api/register")
    .then((res) => {
      dispatch({ type: REGISTER_USER_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: REGISTER_USER_ERROR });
    });
};

export {SIGNUP_USER}
