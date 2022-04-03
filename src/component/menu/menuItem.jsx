import React from 'react';
import {useNavigate} from 'react-router-dom';

import './menuItem.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  let navigate = useNavigate();
  return(
  <div
    className={`${size} menu-item`}
    // onClick={() => history.push(`${match.url}${linkUrl}`)}
    onClick={()=>navigate(`/home/${title}`)}
  >
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>);
}

export default MenuItem;