import React, {useState} from 'react';
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";

import {
    ForgotPasswordContainer,
    FormControlContainer,
    FormSignUpContainer,
    SocialButtonContainer,
    SocialLoginContainer
} from "./sign-in.styles";
import {selectSignUpHidden} from "../../redux/sign-in-sign-up/sign-in-sign-up.selector";
import {toggleSignIn, toggleSignUp} from "../../redux/sign-in-sign-up/sign-in-sign-up.actions";
import {signUpStart} from "../../redux/user/user.actions";

const SignUpForm = ({signUpStart, hideSignUp, toggleSignIn, toggleSignUp}) => {
    const [userCredentials, setUserCredentials] = useState({email: "", password: "", username: "", repeatpass: ""});
    const {email, password, username, repeatpass} = userCredentials;

    const handleChange = event => {
        const {value, name} = event.target;

        setUserCredentials({
            ...userCredentials,
            [name]: value
        });
    };

    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== repeatpass) {
            alert("Passwords do not match");
            return;
        }

        signUpStart(email, username, password);
    }

    return (
        <React.Fragment>
            <FormSignUpContainer
                onSubmit={handleSubmit}
                hideSignup={hideSignUp}
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
                    name="username"
                    value={username}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Username"
                    required=""
                    autoFocus=""
                />
                <FormControlContainer
                    type="email"
                    id="user-email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Email address"
                    required
                    autoFocus=""
                />
                <FormControlContainer
                    type="password"
                    id="user-pass"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Password"
                    required
                    autoFocus=""
                />
                <FormControlContainer
                    type="password"
                    id="user-repeatpass"
                    name="repeatpass"
                    value={repeatpass}
                    className="form-control"
                    onChange={handleChange}
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
                        toggleSignUp();
                        toggleSignIn();
                    }}
                >
                    <i className="fas fa-angle-left"/> Back
                </ForgotPasswordContainer>
            </FormSignUpContainer>
            <br/>
        </React.Fragment>
    );
};

const mapStateToProps = createStructuredSelector({
    hideSignUp: selectSignUpHidden
});

const mapDispatchToProps = dispatch => ({
    toggleSignUp: () => dispatch(toggleSignUp()),
    toggleSignIn: () => dispatch(toggleSignIn()),
    signUpStart: (email, username, password) => dispatch(signUpStart({email, username, password}))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
