import {all, call, put, takeLatest} from 'redux-saga/effects';
import UserActionTypes from "./user.types";
import axios from "axios";
import {signInFailure, signInSuccess, signUpFailure, signUpSuccess} from "./user.actions";

export function* signIn({payload}) {
    try {
        const response = yield axios.post("http://127.0.0.1:8000/api/login/", payload);
        const userData = yield response.data;

        console.log(userData);

        yield put(signInSuccess(userData));
    } catch (e) {
        yield put(signInFailure(e));
    }
}

export function* signUp({payload}) {
    try {
        const response = yield axios.post("http://127.0.0.1:8000/api/signup/", payload);
        const userData = yield response.data;

        yield put(signUpSuccess(userData));
    } catch (e) {
        yield put(signUpFailure(e));
    }
}

export function* onSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signIn);
}

export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* userSagas() {
    yield all([
        call(onSignUpStart),
        call(onSignInStart)
    ])
}
