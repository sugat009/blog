import React, {useState} from 'react';

import CardComponent from "../../components/card/card.component";

import {postsData} from "../../posts.data";
import {SearchTitleContainer} from "./search-page.styles";

const SearchPage = () => {
    const [searchResult, setSearchResults] = useState(postsData);

    return (
        <div className="container">
            <SearchTitleContainer>
                <h2>
                    Search Results
                </h2>
            </SearchTitleContainer>
            <div className="mt-5 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4">
                {
                    searchResult["art"]
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

export default SearchPage;