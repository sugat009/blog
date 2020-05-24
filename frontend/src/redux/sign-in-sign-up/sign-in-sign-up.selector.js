import {createSelector} from "reselect";

const selectSignInSignUpStates = state => state.signInSignUp;

export const selectSignUpHidden = createSelector(
    [selectSignInSignUpStates],
    signInSignUpStates => signInSignUpStates.hideSignup
);

export const selectSignInHidden = createSelector(
    [selectSignInSignUpStates],
    signInSignUpStates => signInSignUpStates.hideSignin
);

export const selectResetPwdHidden = createSelector(
    [selectSignInSignUpStates],
    signInSignUpStates => signInSignUpStates.hideResetPwd
);
