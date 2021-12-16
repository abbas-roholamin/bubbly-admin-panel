import { Link, useMatch } from "react-router-dom";
import React from "react";

import classes from "./listItem.module.css";

const ListItem = (props) => {
  const active = useMatch(props.to) !== null ? classes.active : "";
  return (
    <li className={classes.list_item}>
      <Link
        to={props.to}
        className={`${classes.item_link} ${active} ${
          props.shrink && classes.shrink_item_link
        }`}
      >
        <span
          className={`${classes.item_icon} ${
            props.shrink && classes.shrink_item_icon
          }`}
        >
          {props.icon}
        </span>
        {props.label}
      </Link>
    </li>
  );
};

export default ListItem;
