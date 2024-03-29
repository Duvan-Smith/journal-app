import {
  logoutFirebase,
  registerUserWithEmalPassword,
  signInWithEmailPassword,
  signInWithGoogle,
} from "../../firebase/providers";
import { clearNoteLogout } from "../journal";
import { checkingCredentials, logout, login } from "./";

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSingIn = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await signInWithGoogle();
    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};

export const startEmailSingIn = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await signInWithEmailPassword({ email, password });
    console.log(result);
    if (!result.ok) return dispatch(logout(result));

    dispatch(login(result));
  };
};

export const startCreatingUserWithEmailPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const { ok, uid, photoURL, errorMessage } =
      await registerUserWithEmalPassword({
        email,
        password,
        displayName,
      });

    if (!ok) return dispatch(logout({ errorMessage }));

    dispatch(login({ uid, displayName, email, photoURL }));
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();
    dispatch(clearNoteLogout());
    dispatch(logout({}));
  };
};
