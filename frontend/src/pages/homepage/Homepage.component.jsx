import React from 'react';

import PostsComponent from "../../components/posts-component/posts.component";

const HomepageComponent = () => {
    return (
        <React.Fragment>
            <div className="container">
                <PostsComponent postType="Top Posts"/>
                <hr/>
                <PostsComponent postType="Newest Posts"/>
            </div>
        </React.Fragment>
    );
};

export default HomepageComponent;
