import React, {useState} from 'react';

import BlogPreview from "../blog-preview/blog-preview.component";
import {postsData} from "../../posts.data";

const BlogOverview = ({...otherProps}) => {
    const [blogs, setBlogs] = useState(postsData);

    return (
        <div>
            {
                Object.keys(blogs)
                    .map(key => [key, blogs[key]])
                    .map(item => <BlogPreview
                        key={item[0]}
                        title={item[0]}
                        posts={item[1]}
                        {...otherProps}
                    />)
            }
        </div>
    );
};

export default BlogOverview;