import styled, {css} from "styled-components";

export const ProfileContainer = styled.div`
  padding: 5rem 0;
  
  &::after {
    content: "";
    display: block;
    clear: both;
  }
  
  @media screen and (max-width: 40rem) {
    display: flex;
    flex-wrap: wrap;
    padding: 4rem 0;
    
    &::after  {
      display: none;
    }
  }
`;

export const ProfileImageContainer = styled.div`
  float: left;
  width: calc(33.333% - 1rem);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 3rem;
  
  img {
    border-radius: 50%;
  }
  
  @media screen and (max-width: 40rem) {
    float: none;
    width: auto;
    
    img {
      width: 7rem;
    }
  }
`;

const ProfileCssData = css`
  float: left;
  width: calc(66.666% - 2rem);
`;

export const ProfileUserSettingsContainer = styled.div`
  ${ProfileCssData};
  margin-top: 1.1rem;
  
  @media screen and (max-width: 40rem) {
    float: none;
    width: auto;
    flex-basis: calc(100% - 10.7rem);
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;
  }
`;

export const ProfileUsernameContainer = styled.h1`
    display: inline-block;
    font-size: 3.2rem;
    font-weight: 300;
    
    @media screen and (max-width: 40rem) {
      font-size: 2.2rem;
    }
`;

export const ProfileEditButtonContainer = styled.button`
    font-size: 1.4rem;
    line-height: 1.8;
    border: 0.1rem solid #dbdbdb;
    border-radius: 0.3rem;
    padding: 0 2.4rem;
    margin-left: 2rem;
    font-weight: 600;

    @media screen and (max-width: 40rem) {
        order: 1;
        padding: 0;
        text-align: center;
        margin-top: 1rem;
        margin-left: 0;
        flex-basis: 100%;
    }
`;

export const ProfileSettingsButtonContainer = styled.button`
    font-size: 2rem;
    margin-left: 1rem;
`;

export const ProfileStatsContainer = styled.div`
  ${ProfileCssData};
  margin-top: 2.3rem;
  
  li {
    display: inline-block;
    font-size: 1.6rem;
    line-height: 1.5;
    margin-right: 4rem;
    cursor: pointer;
    
    &:last-of-type {
      margin-right: 0;
    }
  }
  
  @media screen and (max-width: 40rem) {
    float: none;
    width: auto;
    flex-basis: 100%;
    order: 1;
    margin-top: 1.5rem;
    
    ul {
        display: flex;
        text-align: center;
        padding: 1.2rem 0;
        border-top: 0.1rem solid #dadada;
        border-bottom: 0.1rem solid #dadada;
    }
    
    li {
        font-size: 1.4rem;
        flex: 1;
        margin: 0;
    }
  }
`;

export const ProfileBioContainer = styled.div`
  ${ProfileCssData};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.5;
  margin-top: 2.3rem;
    
  @media screen and (max-width: 40rem) {
    float: none;
    width: auto;
    font-size: 1.4rem;
    margin-top: 1.5rem;
    flex-basis: 100%;
  }
`;

export const ProfileFontWeight600 = css`
  font-weight: 600;
`;

export const ProfileRealNameContainer = styled.span`
  ${ProfileFontWeight600};
`;

export const ProfileStatCountContainer = styled.span`
  ${ProfileFontWeight600};
  
  @media screen and (max-width: 40rem) {
    display: block;
  }
`;
