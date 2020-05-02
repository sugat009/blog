import React, {useState} from 'react';
import CardComponent from "../card/card.compoent";
import {postsData} from "../../posts.data";

import {PostsContainer} from "./posts.styles";

const PostsComponent = ({ postType }) => {
    const [posts, setPosts] = useState(postsData);

    return (
        <PostsContainer>
            <h2 className="header-title">{postType}</h2>
            <div className="mt-5 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                {
                    posts.map(post => (
                        <div className="col mb-4" key={post.id}>
                            <CardComponent {...post} />
                        </div>
                    ))
                }
            </div>
        </PostsContainer>
    );
};

export default PostsComponent;
