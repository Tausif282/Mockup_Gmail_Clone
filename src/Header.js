import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ChatBubbleOutlinedIcon from "@material-ui/icons/ChatBubbleOutlined";
import { logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";

const Headers = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };
  return (
    <div className="header">
      <div className="header_left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src="https://img-authors.flaticon.com/google.jpg" alt="" />
      </div>
      <div className="header_middle">
        <SearchIcon className="MailSvgIcon-root" />
        <input placeholder="Search mail" type="text" />
        <ArrowDropDownIcon className="header_inputCaret" />
      </div>
      <div className="header_right">
        <IconButton>
          <ChatBubbleOutlinedIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar onClick={signOut} src={user?.photoUrl} />
      </div>
    </div>
  );
};

export default Headers;
