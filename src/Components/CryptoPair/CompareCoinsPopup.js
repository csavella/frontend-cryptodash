import React from "react";
import './PairTable.css';

const Popup = props => {
  return (
    <div className="popup-box">
      <div className="box">
        {props.content}
      </div>
    </div>
  );
};
 
export default Popup;