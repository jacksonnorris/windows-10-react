import React from 'react';

function DesktopIcon(props) {
  return (
    <div className="desktop-icon">
      <div className="desktop-icon-image"></div>
      <div className="desktop-icon-label">{props.label}</div>
    </div>
  );
}

export default DesktopIcon;