import React from 'react';

import CardComponent from "../card/card.component";

import {TitleContainer} from "./blog-preview.styles";

const BlogPreview = ({title, posts, history, match}) => {
    return (
        <div className="container">
            <TitleContainer>
                <h2
                    onClick={() =>
                        history.push(`${match.path}/${encodeURI(title.toLowerCase())}`)}
                >
                    {title.toUpperCase()}
                </h2>
            </TitleContainer>
            <div className="mt-5 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4">
                {
                    posts
                        .filter((post, idx) => idx < 4)
                        .map(({id, ...otherProps}) => (
                            <div
                                className="col mb-4"
                                key={id}
                            >
                                <CardComponent id={id} {...otherProps} />
                            </div>
                        ))
                }
            </div>
        </div>
    );
};

export default BlogPreview;
