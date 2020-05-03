import React, {useState} from 'react';
import CardComponent from "../card/card.component";
import {postsData} from "../../posts.data";

import {PostsContainer} from "./posts.styles";

const PostsComponent = ({ postType }) => {
    const [posts, setPosts] = useState(postsData);

    return (
        <PostsContainer>
            <h2 className="header-title">{postType}</h2>
            <div className="mt-5 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4">
                {
                    Object.keys(posts)
                        .map(key => postsData[key])
                        .flat()
                        .sort((a, b) => a.id - b.id)
                        .filter((item, idx) => idx < 8)
                        .map(post => (
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
