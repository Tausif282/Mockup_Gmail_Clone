import React from "react";
import "./Circle.css";
function SidebarOption({ Icon, title, color }) {
  return (
    <div
      className={`sidebarCircle ${"sidebarCircle--active"}`}
      style={{
        // borderBottom: `3px solid ${color}`,
        color: `${color}`,
      }}
    >
      <Icon />
      <h3>{title}</h3>
    </div>
  );
}

export default SidebarOption;
