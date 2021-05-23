import React from 'react';
import './Card.css';

const Card = ({id, sanskrit_name, english_name, img_url}) => {
    return (
        <div className="tc bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`${img_url}`} alt={`${sanskrit_name}`} />
            <div>
                <h2>{sanskrit_name}</h2>
                <p>{english_name}</p>
            </div>
        </div>
    );
}

export default Card;