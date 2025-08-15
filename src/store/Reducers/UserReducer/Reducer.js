import {
  CREATE_ACCOUNT_REQUEST,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_FAIL,
  GET_PROFILE_REQUEST,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
  LOGIN_USER_REQUEST,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_FAIL,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  CLEAR_ERRORS,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  OTP_VERIFY_REQUEST,
  OTP_VERIFY_SUCCESS,
  OTP_VERIFY_FAIL,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
} from "./UserConstants";

const UserReducer = (
  state = {
    user: { loading: false, user: null, isAuthenticated: false,  isVerified: false, error:null},
  },
  action
) => {
  switch (action.type) {
    case CREATE_ACCOUNT_REQUEST:
    case GET_PROFILE_REQUEST:
    case LOGIN_USER_REQUEST:
    case LOGOUT_USER_REQUEST:

      return { loading: true, user: null, isAuthenticated: false,  isVerified: false,  };
    case CREATE_ACCOUNT_SUCCESS:
    case GET_PROFILE_SUCCESS:
    case LOGIN_USER_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        isAuthenticated: true,
        isVerified: action.payload.verified,
        isTwoFactorEnabled: action.payload.twoFactorEnabled,
      };
    case LOGOUT_USER_SUCCESS:
      return { loading: false, user: action.payload, isAuthenticated: false,  isVerified: false,  };
    case CREATE_ACCOUNT_FAIL:

    case LOGIN_USER_FAIL:
    case LOGOUT_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.err,
        isVerified: false,
      };
    case GET_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.err,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

const UserProfileReducer = (
  state = {
    message: "",
  },
  action
) => {
  switch (action.type) {
    case FORGOT_PASSWORD_REQUEST:
    case OTP_VERIFY_REQUEST:
    case RESET_PASSWORD_REQUEST:
    case UPDATE_PASSWORD_REQUEST:
    case UPDATE_PROFILE_REQUEST:
      return {
        loading: true,
        message: null,
        success: false,
        type: action.type,
      };
    case FORGOT_PASSWORD_SUCCESS:
    case OTP_VERIFY_SUCCESS:
    case RESET_PASSWORD_SUCCESS:
    case UPDATE_PASSWORD_SUCCESS:
    case UPDATE_PROFILE_SUCCESS:
      return {
        loading: false,
        message: action.payload,
        success: true,
        type: action.type,
      };
    case FORGOT_PASSWORD_FAIL:
    case OTP_VERIFY_FAIL:
    case RESET_PASSWORD_FAIL:
    case UPDATE_PASSWORD_FAIL:
    case UPDATE_PROFILE_FAIL:
      return {
        loading: false,
        error: action.err,
        success: false,
        type: action.type,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        success: false,
        error: null,
      };
    default:
      return state;
  }
};

export { UserReducer, UserProfileReducer };
