import React, { useContext } from "react";

import ListItem from "./item/ListItem";
import listItem from "./listItem";
import SideBarContext from "../../../context/SideBarContext";

import "./sidebar.css";

const SideBar = () => {
  const context = useContext(SideBarContext);
  const shrink = context.shrink ? "shrink show" : "";
  return (
    <div className={`sidebar ${shrink}`} id="sidebar">
      <div className="sidebar_section">
        <h2 className="sideber_section_heading">main</h2>
        <ul className="sidebar_list">
          {listItem.map((item) => (
            <ListItem
              key={item.label}
              to={item.to}
              label={item.label}
              icon={item.icon}
              shrink={shrink}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
