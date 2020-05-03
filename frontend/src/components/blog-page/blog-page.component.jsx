import React, {useState} from 'react';

import CardComponent from "../card/card.component";

import {TitleContainer} from "./blog-page.styles";
import {postsData} from "../../posts.data";

const BlogPage = ({match, history}) => {
    const splittedUrl = match.url.split("/");
    const category = splittedUrl[splittedUrl.length - 1];
    const [posts, setPosts] = useState(postsData[category]);

    return (
        <div className="container">
            <TitleContainer>
                <h2>{category}</h2>
            </TitleContainer>
            <div className="mt-5 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4">
                {
                    posts
                        .map(post => (
                            <div
                                className="col mb-4"
                                key={post.id}
                            >
                                <CardComponent {...post} />
                            </div>
                        ))
                }
            </div>
        </div>
    );
};

export default BlogPage;
