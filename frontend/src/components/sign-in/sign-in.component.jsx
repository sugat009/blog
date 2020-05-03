import React, {useState} from 'react';

import {
    ForgotPasswordContainer,
    FormControlContainer,
    FormResetContainer,
    FormSignUpContainer,
    LoginFormContainer,
    SignInFormContainer,
    SocialButtonContainer,
    SocialLoginContainer
} from "./sign-in.styles";

const SignInComponent = () => {
    const [hideSignup, toggleSignup] = useState(true);
    const [hideSignin, toggleSignin] = useState(false);
    const [hideResetPwd, toggleResetPwd] = useState(true);

    return (
        <React.Fragment>
            <LoginFormContainer>
                <SignInFormContainer hideSignin={hideSignin}>
                    <h1
                        className="h3 mb-3 font-weight-normal text-center"
                    > Sign in</h1>
                    <SocialLoginContainer socialLoginType="SignIn">
                        <SocialButtonContainer
                            className="btn"
                            type="button"
                            buttonType="SignIn"
                            buttonColor="facebook"
                        ><span><i className="fab fa-facebook-f"/> Sign in with Facebook</span></SocialButtonContainer>
                        <SocialButtonContainer
                            className="btn"
                            type="button"
                            buttonType="SignIn"
                            buttonColor="google"
                        ><span><i className="fab fa-google-plus-g"/> Sign in with Google+</span></SocialButtonContainer>
                    </SocialLoginContainer>
                    <p className="text-center"> OR </p>
                    <FormControlContainer
                        type="email"
                        id="inputEmail"
                        className="form-control"
                        placeholder="Email address"
                        required=""
                        autoFocus=""
                    />
                    <FormControlContainer
                        type="password"
                        id="inputPassword"
                        className="form-control"
                        placeholder="Password"
                        required=""
                    />
                    <button
                        className="btn btn-success btn-block"
                        type="submit"
                    ><i className="fas fa-sign-in-alt"/> Sign in
                    </button>
                    <ForgotPasswordContainer
                        onClick={() => {
                            toggleSignin(!hideSignin);
                            toggleResetPwd(!hideResetPwd);
                        }}
                    >
                        Forgot password?
                    </ForgotPasswordContainer>
                    <hr/>
                    <button
                        className="btn btn-primary btn-block"
                        type="button"
                        onClick={() => {
                            toggleSignin(!hideSignin);
                            toggleSignup(!hideSignup);
                        }}
                    >
                        <i className="fas fa-user-plus"/> Sign up New Account
                    </button>
                </SignInFormContainer>

                <FormResetContainer
                    action="/reset/password/"
                    hideResetPwd={hideResetPwd}
                >
                    <FormControlContainer
                        type="email"
                        id="resetEmail"
                        className="form-control"
                        placeholder="Email address"
                        required=""
                        autoFocus=""
                    />
                    <button
                        className="btn btn-primary btn-block"
                        type="submit"
                    >Reset Password
                    </button>
                    <ForgotPasswordContainer
                        onClick={() => {
                            toggleResetPwd(!hideResetPwd);
                            toggleSignin(!hideSignin);
                        }}
                    >
                        <i className="fas fa-angle-left"/> Back
                    </ForgotPasswordContainer>
                </FormResetContainer>

                <FormSignUpContainer
                    action="/signup/"
                    hideSignup={hideSignup}
                >
                    <SocialLoginContainer socialLoginType="SignUp">
                        <SocialButtonContainer
                            className="btn facebook-btn"
                            type="button"
                            buttonType="SignUp"
                            buttonColor="facebook"
                        ><span><i className="fab fa-facebook-f"/> Sign up with Facebook</span></SocialButtonContainer>
                    </SocialLoginContainer>
                    <SocialLoginContainer socialLoginType="SignUp">
                        <SocialButtonContainer
                            className="btn google-btn"
                            type="button"
                            buttonColor="google"
                        ><span><i className="fab fa-google-plus-g"/> Sign up with Google+</span></SocialButtonContainer>
                    </SocialLoginContainer>

                    <p className="text-center">OR</p>

                    <FormControlContainer
                        type="text"
                        id="user-name"
                        className="form-control"
                        placeholder="Full name"
                        required=""
                        autoFocus=""
                    />
                    <FormControlContainer
                        type="email"
                        id="user-email"
                        className="form-control"
                        placeholder="Email address"
                        required
                        autoFocus=""
                    />
                    <FormControlContainer
                        type="password"
                        id="user-pass"
                        className="form-control"
                        placeholder="Password"
                        required
                        autoFocus=""
                    />
                    <FormControlContainer
                        type="password"
                        id="user-repeatpass"
                        className="form-control"
                        placeholder="Repeat Password"
                        required
                        autoFocus=""
                    />
                    <button
                        className="btn btn-primary btn-block"
                        type="submit"
                    ><i className="fas fa-user-plus"/> Sign Up
                    </button>
                    <ForgotPasswordContainer
                        onClick={() => {
                            toggleSignup(!hideSignup);
                            toggleSignin(!hideSignin);
                        }}
                    >
                        <i className="fas fa-angle-left"/> Back
                    </ForgotPasswordContainer>
                </FormSignUpContainer>
                <br/>
            </LoginFormContainer>
        </React.Fragment>
    );
};

export default SignInComponent;