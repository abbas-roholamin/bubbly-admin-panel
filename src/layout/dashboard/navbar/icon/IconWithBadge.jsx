import React from "react";

import classes from "./iconWithBadge.module.css";

const IconWithBadge = (props) => {
  return (
    <div className={classes.icon_wrapper}>
      <div className={classes.icon}>
        {props.icon}
        <div className={classes.icon_badge}>{props.badgeContent}</div>
      </div>
    </div>
  );
};

export default IconWithBadge;
