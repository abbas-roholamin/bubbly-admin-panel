import React from "react";
import { Link, useLocation } from "react-router-dom";
import _ from "lodash";
import "./broadcast.css";

function Broadcast() {
  const { pathname } = useLocation();
  const broadcast_items = _.slice(_.split(pathname, "/"), 1);
  const current_page = _.last(broadcast_items);
  if (broadcast_items.length > 1) {
    return (
      <div className="breadcrumb_wrapper p-3 mb-5">
        <div>{current_page}</div>
        <ol className="breadcrumb" id="breadcrumb">
          {_.without(broadcast_items, current_page).map((path) => (
            <li key={path} className="breadcrumb-item ">
              <Link to={`/${path}`} className="text-primary">
                {path}
              </Link>
            </li>
          ))}
          <li
            key={current_page}
            className="breadcrumb-item"
            aria-current="page"
          >
            {current_page}
          </li>
        </ol>
      </div>
    );
  } else {
    return null;
  }
}

export default Broadcast;
