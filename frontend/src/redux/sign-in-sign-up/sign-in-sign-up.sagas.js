// This file is not used
import {all, call, put, takeLatest} from 'redux-saga/effects';

import {SignInSignUpTypes} from "./sign-in-sign-up.types";
import {toggleResetPwd, toggleSignIn, toggleSignUp} from "./sign-in-sign-up.actions";

export function* toggleResetPwdHidden() {
    yield put(toggleResetPwd());
}

export function* onToggleResetPwdHidden() {
    yield takeLatest(SignInSignUpTypes.TOGGLE_RESET_PWD, toggleResetPwdHidden);
}

export function* toggleSignUpHidden() {
    yield put(toggleSignUp());
}

export function* onToggleSignUp() {
    yield takeLatest(SignInSignUpTypes.TOGGLE_SIGNUP, toggleSignUpHidden);
}

export function* toggleSignInHidden() {
    yield put(toggleSignIn());
}

export function* onToggleSignIn() {
    yield takeLatest(SignInSignUpTypes.TOGGLE_SIGNIN, toggleSignInHidden);
}

export function* signInSignUpSagas() {
    yield all([
        call(onToggleSignIn),
        call(onToggleSignUp),
        call(onToggleResetPwdHidden)
    ]);
}
