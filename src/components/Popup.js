import React from 'react';
import './Popup.css';

function Popup(props) {
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
            <p className='popup-text'>Are you sure you want to delete?</p>
            <button className='popup-yes'><b>Yes</b></button>
            <button className='popup-no'><b>No</b></button>
            {props.children}  
        </div>
    </div>
  ) : "";
}

export default Popup