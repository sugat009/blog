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

export const SocialLoginContainer = styled.div`
    width:210px !important;
    margin: 0 auto;
  
    @media screen and (max-width: 500px) {
        width:200px;
        margin: 0 auto 10px;
    }
`;

const facebookColor = css`
  background-color: #3C589C;
`;

const googleColor = css`
  background-color: #DF4B3B;
`;

const getButtonColor = props => {
    return props.buttonColor === "facebook" ? facebookColor : googleColor;
}

export const SocialButtonContainer = styled.button`
    font-weight: 100;
    color: white;
    font-size: 0.9rem;
    width: 210px;
    ${getButtonColor}

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
      
      .facebook-btn:after {
        content: "Facebook";
      }
      
      .google-btn:after {
        content: "Google+";
      }
    }
`;

export const FormSignUpContainer = styled.form`
  display: none;
  
  input {
    margin-bottom: 2px;
  }
`;