import React from 'react';
import {withRouter} from "react-router-dom";

import {CardContainer, InnerContainer} from "./card.styles";

const CardComponent = ({id, title, imageUrl, description, history, linkUrl}) => {
    return (
        <CardContainer className="card shadow" onClick={() => history.push(`/blogs/detail/${id}`)}>
            <InnerContainer>
                <img
                    src={imageUrl}
                    className="card-img-top"
                    alt="..."
                />
            </InnerContainer>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
        </CardContainer>
    );
};

export default withRouter(CardComponent);