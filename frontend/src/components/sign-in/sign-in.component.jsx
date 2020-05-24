import React from 'react';

import {LoginFormContainer} from "./sign-in.styles";
import SignInForm from "./sign-in-form.component";
import PasswordResetForm from "./form-reset.component";
import SignUpForm from "./sign-up.component";

const SignInComponent = () => {
    return (
        <React.Fragment>
            <LoginFormContainer>
                <SignInForm/>
                <PasswordResetForm/>
                <SignUpForm/>
            </LoginFormContainer>
        </React.Fragment>
    );
};

export default SignInComponent;
