import React from 'react';

import {
    FormControlContainer,
    FormSignUpContainer,
    LoginFormContainer,
    SocialButtonContainer,
    SocialLoginContainer
} from "./sign-up.styles";

const SignUpComponent = () => {
    return (
        <React.Fragment>
            <LoginFormContainer>
                <FormSignUpContainer
                    action="/signup/"
                >
                    <SocialLoginContainer>
                        <SocialButtonContainer
                            className="btn facebook-btn"
                            type="button"
                        ><span><i className="fab fa-facebook-f"/> Sign up with Facebook</span></SocialButtonContainer>
                    </SocialLoginContainer>
                    <SocialLoginContainer>
                        <SocialButtonContainer
                            className="btn google-btn"
                            type="button"
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
                    <a
                        href="#"
                        id="cancel_signup"
                    ><i className="fas fa-angle-left"/> Back</a>
                </FormSignUpContainer>
            </LoginFormContainer>
        </React.Fragment>
    );
};

export default SignUpComponent;