import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Card.css'

function Card(props) {


  return (
    <div className='Card-Box'>
        <div className='CardVotes'>
          <button style={{borderRadius: "20px 20px 0px 0px"}}>↑</button>
          <h3>{props.reportVotes}</h3>
          <button style={{borderRadius: "0px 0px 30px 30px"}}>↓</button>
        </div>
        <div>
          <h2>{props.reportTitle}</h2>
          <p>{props.reportContent}</p>
          <hr></hr>
          <div className='Card-tags'>
            {props.reportTags.map((tag) => {
              return (
                <div className='Card-tag'>
                  <h1>{tag}</h1>
                </div>
              );
              })}
          </div>


        </div>



    </div>

  )
}

export default Card