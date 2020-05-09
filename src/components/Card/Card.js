import React from 'react';

// import './App.css';
import 'tachyons'

const Card =({name ,email, img}) =>{
  // const { name ,email, img } = props;
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5" style={{minWidth:'308px'}}>
      <img src={img} alt=""/>
      <div>
        <h2>
          {name}
        </h2>
  <p>{email}</p>
      </div>
    </div>
  )
}

export default Card;
