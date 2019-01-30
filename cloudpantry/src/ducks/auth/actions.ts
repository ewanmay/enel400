import axios from "axios";
import { Dispatch } from "redux";
import * as firebase from "firebase";
import { AsyncStorage } from "react-native";
import { navigate } from "../../utils/navigationService";
import { login, register, doFacebookLogin, loading } from "./operations";
import {
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  FACEBOOK_LOGIN_SUCCESS,
  DONE_LOADING,
  RESET_MESSAGE
} from "./types";

export const emailChanged = (email: string) => {
  return {
    type: EMAIL_CHANGED,
    payload: email
  };
};
export const passwordChanged = (password: string) => {
  return {
    type: PASSWORD_CHANGED,
    payload: password
  };
};
export const loginWithFacebook = () => async (dispatch: Dispatch) => {
  const token = await AsyncStorage.getItem("fb_token");
  if (token) {
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
  } else {
    doFacebookLogin(dispatch);
  }
};

export const loginWithEmail = (email: string, password: string) => async (
  dispatch: Dispatch
) => {
  loading(dispatch);
  try {
    await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    const user = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    login(dispatch, user);
    navigate("Home", {});
  } catch (e) {
    dispatch({
      type: LOGIN_USER_FAILURE,
      payload: "Email password combination did not match, sorry!"
    });
    dispatch({ type: DONE_LOADING });
  }
};

export const stateNavigate = () => (dispatch: Dispatch) => {
  dispatch({ type: RESET_MESSAGE });
}

export const registerUserWithEmail = (
  email: string,
  password: string
) => async (dispatch: Dispatch) => {
  loading(dispatch);
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const user = firebase.auth().currentUser;
    if (user) {
      register(dispatch, user, email, password);
      navigate("Login", {});
    } else {
      const e = { message: "Oops something went wrong, please try again!" };
      throw e;
    }
  } catch (e) {
    dispatch({ type: LOGIN_USER_FAILURE, payload: e.message });
    dispatch({ type: DONE_LOADING });
  }
};

export const logoutUser = () => async (dispatch: Dispatch) => {
  await axios.get("/api/logout");
  dispatch({ type: LOGOUT_USER });
};

export default {
  logoutUser,
  registerUserWithEmail,
  loginWithEmail,
  loginWithFacebook,
  passwordChanged,
  emailChanged,
  stateNavigate
};
