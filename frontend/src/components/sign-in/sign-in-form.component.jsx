import React, {useState} from 'react';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import {selectSignInHidden} from "../../redux/sign-in-sign-up/sign-in-sign-up.selector";

import {
    ForgotPasswordContainer,
    FormControlContainer,
    SignInFormContainer,
    SocialButtonContainer,
    SocialLoginContainer
} from "./sign-in.styles";
import {toggleResetPwd, toggleSignIn, toggleSignUp} from "../../redux/sign-in-sign-up/sign-in-sign-up.actions";
import {emailSignInStart} from "../../redux/user/user.actions";

const SignInForm = ({emailSignInStart, hideSignIn, toggleSignIn, toggleSignUp, toggleResetPwd}) => {
    // This name is for email/username
    // but since in django the primary method of login is username
    // it is named as username
    // but it handles both email and username
    // Dont be confused
    const [userCredentials, setUserCredentials] = useState({username: "", password: ""});
    const {username, password} = userCredentials;

    const handleChange = event => {
        const {value, name} = event.target;

        setUserCredentials({
            ...userCredentials,
            [name]: value
        });
    };

    const handleSubmit = async event => {
        event.preventDefault();

        emailSignInStart(username, password);
    }

    return (
        <React.Fragment>
            <SignInFormContainer hideSignin={hideSignIn} onSubmit={handleSubmit}>
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
                    name="username"
                    id="inputEmail"
                    className="form-control"
                    placeholder="Email address / Username"
                    onChange={handleChange}
                    value={username}
                    required={true}
                    autoFocus={true}
                />
                <FormControlContainer
                    type="password"
                    name="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={handleChange}
                    required={true}
                />
                <button
                    className="btn btn-success btn-block"
                    type="submit"
                ><i className="fas fa-sign-in-alt"/> Sign in
                </button>
                <ForgotPasswordContainer
                    onClick={() => {
                        toggleSignIn();
                        toggleResetPwd();
                    }}
                >
                    Forgot password?
                </ForgotPasswordContainer>
                <hr/>
                <button
                    className="btn btn-primary btn-block"
                    type="submit"
                    onClick={() => {
                        toggleSignIn();
                        toggleSignUp();
                    }}
                >
                    <i className="fas fa-user-plus"/> Sign up New Account
                </button>
            </SignInFormContainer>
        </React.Fragment>
    );
};

const mapStateToProps = createStructuredSelector({
    hideSignIn: selectSignInHidden
});

const mapDispatchToProps = dispatch => ({
    toggleSignIn: () => dispatch(toggleSignIn()),
    toggleSignUp: () => dispatch(toggleSignUp()),
    toggleResetPwd: () => dispatch(toggleResetPwd()),
    emailSignInStart: (username, password) => dispatch(emailSignInStart({username, password}))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
