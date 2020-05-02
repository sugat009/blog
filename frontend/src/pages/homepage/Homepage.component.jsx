import React from 'react';

import PostsComponent from "../../components/posts-component/posts.component";

const HomepageComponent = () => {
    return (
        <div>
            <div className="container">
                <PostsComponent postType="Top Posts"/>
                <hr/>
                <PostsComponent postType="Newest Posts"/>
            </div>
        </div>
    );
};

export default HomepageComponent;
