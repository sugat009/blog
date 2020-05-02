import React from 'react';

const CardComponent = ({title, imageUrl, description}) => {
    return (
        <div className="card">
            <img
                src={imageUrl}
                className="card-img-top"
                alt="..."
            />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
        </div>
    );
};

export default CardComponent;