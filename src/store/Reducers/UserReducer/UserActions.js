import {
  CREATE_ACCOUNT_REQUEST,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_FAIL,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAIL,
  FORGOT_PASSWORD_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  VERIFY_USER_REQUEST,
  VERIFY_USER_SUCCESS,
  VERIFY_USER_FAIL,
  CLEAR_ERRORS,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  OTP_VERIFY_REQUEST,
  OTP_VERIFY_SUCCESS,
  OTP_VERIFY_FAIL
} from "./UserConstants";
import axios from "axios";

let url = `http://localhost:8080/v1/api/user-service`;

const CreateAccount = (body) => {
  return async (dispatch) => {
    try {
      dispatch({ type: CREATE_ACCOUNT_REQUEST });
      const { data } = await axios.post(`${url}/user/new`, body);
      dispatch({ type: CREATE_ACCOUNT_SUCCESS, payload: data.user });
    } catch (e) {
      console.log(e);
      dispatch({
        type: CREATE_ACCOUNT_FAIL,
        err: e.response?.data?.error || e.message,
      });
    }
  };
};

const LoginUser = (body) => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOGIN_USER_REQUEST });
      const { data } = await axios.post(`${url}/user/login`, body, { withCredentials: true });
      console.log(data);
      dispatch({ type: LOGIN_USER_SUCCESS, payload: data.user });
    } catch (e) {
      dispatch({
        type: LOGIN_USER_FAIL,
        err: e.response?.data?.error || e.message,
      });
    }
  };
};

const GetProfile = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_PROFILE_REQUEST });
      const { data } = await axios.get(`${url}/user/profile`, {withCredentials: true});
      console.log(data);
      dispatch({ type: GET_PROFILE_SUCCESS, payload: data.user });
    } catch (e) {
      dispatch({ type: GET_PROFILE_FAIL,  err: e.response?.data?.error || e.message });
    }
  };
};

const LogoutUser = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOGOUT_USER_REQUEST });
      const { data } = await axios.post(`${url}/user/logout`, {}, {withCredentials: true});
      dispatch({ type: LOGOUT_USER_SUCCESS, payload: data.user });
    } catch (e) {
      dispatch({ type: LOGOUT_USER_FAIL,  err: e.response?.data?.error || e.message });
    }
  };
};

const ForgotUserPassword = (body) => {
  return async (dispatch) => {
    try {
      dispatch({ type: FORGOT_PASSWORD_REQUEST });
      const { data } = await axios.post(`${url}/user/forgot`, body);
      dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: data.message });
    } catch (e) {
      dispatch({ type: FORGOT_PASSWORD_FAIL, err: e.response?.data?.error || e.message });
    }
  };
};

const ResetPasswordUser = (body, user_id, token) => {
    return async (dispatch) => {
        try {
            dispatch({type: RESET_PASSWORD_REQUEST});
            const {data} = await axios.post(`${url}/user/${user_id}/reset/${token}`, body);
            dispatch({type: RESET_PASSWORD_SUCCESS, payload: data.message});
        } catch (e) {
            dispatch({type: RESET_PASSWORD_FAIL, err: e.response?.data?.error || e.message})
        }
    }
}


const OtpVerify = (body) => {
    return async (dispatch) => {
        try {
            dispatch({type: OTP_VERIFY_REQUEST});
            const {data} = await axios.post(`${url}/user/verify-otp`, body, {withCredentials: true});
            dispatch({type: OTP_VERIFY_SUCCESS, payload: data.message});
        } catch (e) {
            dispatch({type: OTP_VERIFY_FAIL, err: e.response?.data?.error || e.message})
        }
    }
}


const UpdatePasswordUser = (body) => {
  return async (dispatch) => {
    try {
      dispatch({ type: UPDATE_PASSWORD_REQUEST });
      const { data } = await axios.patch(`${url}/user/reset`, body);
      dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: data.message });
    } catch (e) {
      dispatch({ type: UPDATE_PASSWORD_FAIL, err: e.response?.data?.error || e.message });
    }
  };
};

const UpdateProfileUser = (body, user_id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: UPDATE_PROFILE_REQUEST });
      const { data } = await axios.patch(`${url}/user/update/${user_id}`, body);
      dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data.message });
    } catch (e) {
      dispatch({ type: UPDATE_PROFILE_FAIL, err: e.response?.data?.error || e.message });
    }
  };
};

const ClearError = () => {
  return async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };
};

const VerifyUserAction = (user, token) => {
  return async (dispatch) => {
    try {
      dispatch({ type: VERIFY_USER_REQUEST });
      const { data } = await axios.patch(`${url}/user/${user}/verify/${token}`);
      dispatch({ type: VERIFY_USER_SUCCESS, payload: data.verify });
    } catch (e) {
      dispatch({ type: VERIFY_USER_FAIL, err: e.response?.data?.error || e.message });
    }
  };
};

export {
    CreateAccount,
    LoginUser,
    GetProfile,
    LogoutUser,
    UpdatePasswordUser,
    VerifyUserAction,
    UpdateProfileUser,
    ClearError,
    ForgotUserPassword,
    ResetPasswordUser,
    OtpVerify
};
