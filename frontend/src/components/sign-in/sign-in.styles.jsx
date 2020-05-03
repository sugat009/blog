import styled, {css} from "styled-components";

export const LoginFormContainer = styled.div`
    width:412px;
    margin:10vh auto;
    background-color:#f3f3f3;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    
    a {
      display: block;
      padding-top: 10px;
      color: lightseagreen;
    }
    
    button[type="submit"] {
      margin-top: 10px;
    }
    
    @media screen and (max-width: 500px) {
      width:300px;
    }
`;

export const FormContainer = css`
    width: 100%;
    max-width: 410px;
    padding: 15px;
    margin: auto;
`;

export const FormControlContainer = styled.input`
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
    
    &:focus {
      z-index: 2;
    }
`;

export const SignInFormContainer = styled.form`
  ${FormContainer};
  display: ${({hideSignin}) => hideSignin ? `none` : `block`};
  
  input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  
  input[type="password"] {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  } 
`;

const SignInSocialLogin = css`
    width:390px;
`;

const SignUpSocialLogin = css`
    width:210px !important;
`;

const getSocialLoginType = props => {
    return props.socialLoginType === "SignIn" ? SignInSocialLogin : SignUpSocialLogin;
}

export const SocialLoginContainer = styled.div`
    margin: 0 auto 14px;
    ${getSocialLoginType};
  
  @media screen and (max-width: 500px) {
    width:200px;
    margin: 0 auto 10px;
  }
`;

const width190 = css`
  width: 190px;
`;

const width210 = css`
  width: 210px;
`;

const facebookColor = css`
  background-color: #3C589C;
`;

const googleColor = css`
  background-color: #DF4B3B;
`;

const facebookContent = css`
  content: "Facebook";
`;

const googleContent = css`
  content: "Google +";
`;

const getButtonWidth = props => {
    return props.buttonType === "SignIn" ? width190 : width210;
}

const getButtonColor = props => {
    return props.buttonColor === "facebook" ? facebookColor : googleColor;
}

const getButtonContent = props => {
    return props.buttonColor === "facebook" ? facebookContent : googleContent;
}

export const SocialButtonContainer = styled.button`
    font-weight: 100;
    color: white;
    font-size: 0.9rem;
    ${getButtonWidth};
    ${getButtonColor};
    
    &:hover {
      color: white;
    }
    
    @media screen and (max-width: 500px) {
      font-size: 1.3rem;
      font-weight: 100;
      color:white;
      width:200px;
      height: 56px;
      
      &:nth-child(1) {
        margin-bottom: 5px;
      }
      
      span {
        display: none;
      }
      
      &:after {
        ${getButtonContent};
      }
    }
`;

export const ForgotPasswordContainer = styled.span`
  color: dodgerblue;
  text-decoration: underline;
  display: inline-block;
  margin-top: 10px;
  
  &:hover {
    cursor: pointer;
  }
`;

export const FormResetContainer = styled.form`
  ${FormContainer};
  display: ${({hideResetPwd}) => hideResetPwd ? `none` : `block`};
`;

export const FormSignUpContainer = styled.form`
  ${FormContainer};
  display: ${({hideSignup}) => hideSignup ? `none` : `block`};
  
  input {
    margin-bottom: 2px;
  }
`;
