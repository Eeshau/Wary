import React from 'react';
import '../styles/CommunityCard.css'

function CommunityCard(props) {
    return (
        <div className='CommunityCardParent' style={{backgroundImage: `url(${props.communityImage})`}}>
            <h1>{props.communityName}</h1>
        </div>
    );
}

export default CommunityCard;