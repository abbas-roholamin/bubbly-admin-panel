import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const listItem = [
  {
    to: "/dashboard",
    icon: <HomeOutlinedIcon />,
    label: "Dashboard",
  },
  {
    to: "/dashboard/articles",
    icon: <ArticleRoundedIcon />,
    label: "Articles",
  },
  {
    to: "/users",
    icon: <PersonOutlineOutlinedIcon />,
    label: "Users",
  },

  {
    to: "/profile",
    icon: <AccountCircleOutlinedIcon />,
    label: "Profile",
  },
  {
    to: "/setting",
    icon: <SettingsOutlinedIcon />,
    label: "setting",
  },
];

export default listItem;
