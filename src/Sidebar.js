import React from "react";
import { Button } from "@material-ui/core";
import "./Sidebar.css";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import SidebarOption from "./SidebarOption";
import Circle from "./Circle";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button
        variant="contained"
        color="primary"
        className="sidebar_compose"
        onClick={() => dispatch(openSendMessage())}
      >
        COMPOSE
      </Button>
      <SidebarOption Icon={InboxIcon} title="Inbox" number={54} />
      <SidebarOption
        Icon={StarIcon}
        title="Starred"
        number={12}
        selected={true}
      />
      <SidebarOption Icon={LabelImportantIcon} title="Imortant" number={54} />
      <SidebarOption Icon={NearMeIcon} title="Sent mail" number={10} />
      <SidebarOption Icon={NoteIcon} title="Drafts" number={14} />
      <h4 style={{ padding: "20px" }}>Circle</h4>

      <Circle
        Icon={RadioButtonCheckedIcon}
        style={{ color: "yellow" }}
        title="Friends"
      />
      <Circle Icon={RadioButtonCheckedIcon} title="Friends" />
      <Circle Icon={RadioButtonCheckedIcon} title="Family" />
      <Circle Icon={RadioButtonCheckedIcon} title="Working" />
      <Circle Icon={RadioButtonCheckedIcon} title="Clients" />
      <Circle Icon={RadioButtonCheckedIcon} title="Urgent" />
      <Circle Icon={RadioButtonCheckedIcon} title="Add" />
    </div>
  );
};

export default Sidebar;
