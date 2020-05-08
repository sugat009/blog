import React from "react";

import {
    ProfileBioContainer,
    ProfileContainer,
    ProfileEditButtonContainer,
    ProfileImageContainer,
    ProfileRealNameContainer,
    ProfileSettingsButtonContainer,
    ProfileStatCountContainer,
    ProfileStatsContainer,
    ProfileUsernameContainer,
    ProfileUserSettingsContainer
} from "./user-profile.header.styles";

const UserProfileHeaderComponent = () => {
    return (
        <header>
            <div className="container">
                <ProfileContainer>
                    <ProfileImageContainer>
                        <img
                            src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces"
                            alt=""
                        />
                    </ProfileImageContainer>
                    <ProfileUserSettingsContainer>
                        <ProfileUsernameContainer>janedoe_</ProfileUsernameContainer>
                        <ProfileEditButtonContainer>Edit Profile</ProfileEditButtonContainer>
                        <ProfileSettingsButtonContainer
                            className="btn"
                            aria-label="profile settings"
                        ><i
                            className="fas fa-cog"
                            aria-hidden="true"
                        /></ProfileSettingsButtonContainer>
                    </ProfileUserSettingsContainer>
                    <ProfileStatsContainer>
                        <ul>
                            <li><ProfileStatCountContainer>164</ProfileStatCountContainer> posts</li>
                            <li><ProfileStatCountContainer>188</ProfileStatCountContainer> followers</li>
                            <li><ProfileStatCountContainer>206</ProfileStatCountContainer> following</li>
                        </ul>
                    </ProfileStatsContainer>
                    <ProfileBioContainer>
                        <p>
                            <ProfileRealNameContainer>Jane Doe</ProfileRealNameContainer> Lorem ipsum dolor sit, amet
                            consectetur adipisicing elit 📷✈️🏕️</p>
                    </ProfileBioContainer>
                </ProfileContainer>
                {/* End of profile */}
            </div>
            {/*  End of container */}
        </header>
    );
};

export default UserProfileHeaderComponent;
