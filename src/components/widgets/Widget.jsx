import React from "react";

import "./widget.css";

const Widget = (props) => {
  return (
    <div className="widget_wrapper shadow">
      <div className="widget_body">
        <h6>{props.title}</h6>
        <span className={`mb-0 ${props.color}`}>{props.data}</span>
      </div>
      <div className={`icon ${props.color}`}>{props.icon}</div>
    </div>
  );
};
export default Widget;
