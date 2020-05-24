import {SignInSignUpTypes} from "./sign-in-sign-up.types";

export const toggleSignUp = () => ({
    type: SignInSignUpTypes.TOGGLE_SIGNUP
});

export const toggleSignIn = () => ({
    type: SignInSignUpTypes.TOGGLE_SIGNIN
});

export const toggleResetPwd = () => ({
    type: SignInSignUpTypes.TOGGLE_RESET_PWD
});
