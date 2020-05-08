import React, {Component} from 'react';

import UserProfileComponent from "../../components/user-profile/user-profile.component";

class Profile extends Component {
    render() {
        return (
            <React.Fragment>
                <UserProfileComponent />
            </React.Fragment>
        );
    }
}

export default Profile;
