import React, {useState} from 'react';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import {ForgotPasswordContainer, FormControlContainer, FormResetContainer} from "./sign-in.styles";
import {selectResetPwdHidden} from "../../redux/sign-in-sign-up/sign-in-sign-up.selector";
import {toggleResetPwd, toggleSignIn, toggleSignUp} from "../../redux/sign-in-sign-up/sign-in-sign-up.actions";

const PasswordResetForm = ({hideResetPwd, toggleSignIn, toggleResetPwd}) => {
    const [email, setUserCredentials] = useState("");

    const handleChange = event => {
        setUserCredentials(event.target.value);
    };

    return (
        <React.Fragment>
            <FormResetContainer
                action="/reset/password/"
                hideResetPwd={hideResetPwd}
            >
                <FormControlContainer
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
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
                        toggleResetPwd();
                        toggleSignIn();
                    }}
                >
                    <i className="fas fa-angle-left"/> Back
                </ForgotPasswordContainer>
            </FormResetContainer>
        </React.Fragment>
    );
};

const mapStateToProps = createStructuredSelector({
    hideResetPwd: selectResetPwdHidden
});

const mapDispatchToProps = dispatch => ({
    toggleSignIn: () => dispatch(toggleSignIn()),
    toggleResetPwd: () => dispatch(toggleResetPwd())
});

export default connect(mapStateToProps, mapDispatchToProps)(PasswordResetForm);
