import FormatAlignLeftSharpIcon from "@mui/icons-material/FormatAlignLeftSharp";
import LanguageIcon from "@mui/icons-material/Language";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import React, { useContext } from "react";

import IconWithBadge from "./icon/IconWithBadge";
import SideBarContext from "../../../context/SideBarContext";

import classes from "./navbar.module.css";

const Navbar = () => {
  const context = useContext(SideBarContext);
  const sidebarToggle = () => {
    context.toggleShrink();
  };
  return (
    <header className={classes.nav_bar}>
      <div className={classes.navbar_wrapper}>
        <div className={classes.sidebar_toggler} onClick={sidebarToggle}>
          <FormatAlignLeftSharpIcon color="disabled" />
        </div>

        <div className={classes.navbar_brand}>BUBBLY DASHBOARD</div>
        <div className={classes.navbar_icons}>
          <IconWithBadge icon={<NotificationsNoneIcon />} badgeContent="2" />
          <IconWithBadge icon={<LanguageIcon />} badgeContent="5" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
