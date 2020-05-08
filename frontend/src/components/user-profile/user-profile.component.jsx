import React from 'react';

import UserProfileHeaderComponent from "./user-profile.header.component";
import UserProfileMainComponent from "./user-profile.main.component";


const UserProfileComponent = () => {
    return (
        <React.Fragment>
            <UserProfileHeaderComponent/>
            <UserProfileMainComponent />
        </React.Fragment>
    );
};

export default UserProfileComponent;