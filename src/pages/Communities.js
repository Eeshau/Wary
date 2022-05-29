import React from 'react';
import '../styles/Communities.css'
import '../styles/App.css'
import CommunityCard from  '../components/CommunityCard'

function Communities(props) {
    return (
        <div className='CommunitiesParent'>
            <div className='Welcome-message'>
                <h1>Join a Community, keep them safe</h1>
                <h3>“feeling or showing caution about possible dangers or problems.”</h3>
            </div>
            <div className='PrivateCommunity'>
                <label>Private Community Name</label>
                <input placeholder='Community'></input>
                <label>Private Community Token</label>
                <input placeholder='Token Key'></input>
                <button>JOIN</button>
            </div>


            <div>
                <h1>Join a public community</h1>
                <label>Enter your zip code | discover local public communities</label>
                <input placeholder='ZIP CODE'></input>
                <CommunityCard communityName="McDonalds" communityImage="https://images.unsplash.com/photo-1623156346149-d5cec8b29818?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWNkb25hbGRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"/>
                <CommunityCard communityName="Apple" communityImage="https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"/>
                <CommunityCard communityName="Starbucks" communityImage="https://images.unsplash.com/photo-1568036193587-84226a9c5a1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80"/>
            </div>
            
        </div>
    );
}

export default Communities;