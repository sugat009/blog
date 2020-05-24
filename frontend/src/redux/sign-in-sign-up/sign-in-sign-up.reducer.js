import {SignInSignUpTypes} from "./sign-in-sign-up.types";

const INITIAL_STATE = {
    hideSignup: true,
    hideSignin: false,
    hideResetPwd: true
};

const signInSignUpReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SignInSignUpTypes.TOGGLE_SIGNIN:
            return {
                ...state,
                hideSignin: !state.hideSignin
            };
        case SignInSignUpTypes.TOGGLE_RESET_PWD:
            return {
                ...state,
                hideResetPwd: !state.hideResetPwd
            };
        case SignInSignUpTypes.TOGGLE_SIGNUP:
            return {
                ...state,
                hideSignup: !state.hideSignup
            }
        default:
            return state;
    }
}

export default signInSignUpReducer;
