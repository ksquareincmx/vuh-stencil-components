import React from "react";

const Drawer = () => {
  return (
    <k-drawer for-key="k-menu">
      <div style={{ display: "flex", alignItems: "center" }}>
        <k-avatar>
          <k-img
            alt="Abraham Berzunza"
            src="https://assets.gitlab-static.net/uploads/-/system/user/avatar/4533028/avatar.png?width=23"
          ></k-img>
        </k-avatar>
        <span>Abraham Berzunza</span>
      </div>
      <k-list-group>
        <k-list-item>Home</k-list-item>
        <k-list-item>Courses</k-list-item>
        <k-list-item>Learning Plan</k-list-item>
      </k-list-group>
      <k-divider></k-divider>
      <k-list-group>
        <k-list-item>Home</k-list-item>
        <k-list-item>Courses</k-list-item>
        <k-list-item>Learning Plan</k-list-item>
      </k-list-group>
    </k-drawer>
  );
};

export default Drawer;
