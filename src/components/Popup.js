import React, { useRef } from "react";
import "./Popup.css";

const Popup = (props, onClose) => {
  return props.trigger ? (
    <div onClick={props.onClose} className="popup">
      <div onClick={(e) => e.stopPropagation()} className="popup-inner">
        <p className="popup-text">Are you sure you want to delete?</p>
        <br></br>
        <button className="popup-yes" onClick={props.onDelete}>
          <b>Yes</b>
        </button>
        <button className="popup-no" onClick={props.onCancel}>
          <b>No</b>
        </button>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
