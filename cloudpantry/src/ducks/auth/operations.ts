import {
  LOGIN_USER_SUCCESS,
  REGISTER_USER_SUCCESS,
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL,
  START_LOADING,
  DONE_LOADING,
  RESET_MESSAGE,
  RESET_PASSWORD
} from "./types";
import { AsyncStorage } from "react-native";
import { Dispatch } from "redux";
import firebase from "firebase";
import v4 from "uuid";
import { navigate } from "../../utils/navigationService";

export const loading = (dispatch: Dispatch) => {
  dispatch({ type: RESET_MESSAGE });
  dispatch({ type: START_LOADING });
};

export const login = (
  dispatch: Dispatch,
  user: firebase.auth.UserCredential
) => {
  dispatch({ type: RESET_PASSWORD });
  dispatch({ type: LOGIN_USER_SUCCESS, user });
  dispatch({ type: DONE_LOADING });
};

export const register = (
  dispatch: Dispatch,
  user: firebase.User,
  email: string,
  password: string
) => {
  firebase
    .database()
    .ref("users/" + user.uid)
    .set({
      groups: [],
      email,
      userId: v4()
    });
  dispatch({ type: RESET_PASSWORD });
  dispatch({
    type: REGISTER_USER_SUCCESS,
    payload: {
      message: "New account created, let's see if you can log in a second time!",
      password: password
    }
  });
  dispatch({ type: DONE_LOADING });
};

