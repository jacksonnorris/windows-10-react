import React from 'react';

function HomeIcon(props) {
  return (
    <div className="home-icon">
      <img className="home-icon-image" src={props.iconImg} alt={props.iconTitle}></img>
      <div className="home-icon-label">{props.iconTitle}</div>
    </div>
  );
}

export default HomeIcon;