import React from "react";

import Drawer from "./Drawer";

const Menu = () => {
  return (
    <React.Fragment>
      <k-menu menu-key="k-menu">
        <k-menu-content>
          <figure style={{ width: "100px" }}>
            <k-img
              src="https://www.ksquareinc.com/wp-content/uploads/2019/10/Logo.png"
              height="32"
            ></k-img>
          </figure>
          <div style={{ display: "flex", alignItems: "center" }}>
            <k-notification notification-count="6">
              <k-notification-group
                style={{ height: "380px", overflowY: "auto" }}
              >
                <k-notification-item
                  alert-color="orange"
                  label="Course"
                  time="30m ago"
                  is-read="false"
                >
                  <p>
                    You are been assigned to the course
                    <strong>“The best Course of the world”</strong>
                  </p>
                </k-notification-item>
                <k-notification-item
                  alert-color="purple"
                  label="Course"
                  time="30m ago"
                  is-read="true"
                >
                  <p>
                    You are been assigned to the course
                    <strong>“The best Course of the world”</strong>
                  </p>
                </k-notification-item>
                <k-notification-item
                  alert-color="orange"
                  label="Course"
                  time="30m ago"
                  is-read="false"
                >
                  <p>
                    You are been assigned to the course
                    <strong>“The best Course of the world”</strong>
                  </p>
                </k-notification-item>
                <k-notification-item
                  alert-color="purple"
                  label="Course"
                  time="30m ago"
                  is-read="true"
                >
                  <p>
                    You are been assigned to the course
                    <strong>“The best Course of the world”</strong>
                  </p>
                </k-notification-item>
                <k-notification-item
                  alert-color="orange"
                  label="Course"
                  time="30m ago"
                  is-read="false"
                >
                  <p>
                    You are been assigned to the course
                    <strong>“The best Course of the world”</strong>
                  </p>
                </k-notification-item>
                <k-notification-item
                  alert-color="purple"
                  label="Course"
                  time="30m ago"
                  is-read="true"
                >
                  <p>
                    You are been assigned to the course
                    <strong>“The best Course of the world”</strong>
                  </p>
                </k-notification-item>
                <k-notification-item
                  alert-color="orange"
                  label="Course"
                  time="30m ago"
                  is-read="false"
                >
                  <p>
                    You are been assigned to the course
                    <strong>“The best Course of the world”</strong>
                  </p>
                </k-notification-item>
                <k-notification-item
                  alert-color="purple"
                  label="Course"
                  time="30m ago"
                  is-read="true"
                >
                  <p>
                    You are been assigned to the course
                    <strong>“The best Course of the world”</strong>
                  </p>
                </k-notification-item>
              </k-notification-group>
            </k-notification>
            <k-avatar style={{ margin: "16px" }}>
              <k-img
                alt="Abraham Berzunza"
                src="https://assets.gitlab-static.net/uploads/-/system/user/avatar/4533028/avatar.png?width=23"
              ></k-img>
            </k-avatar>
          </div>
        </k-menu-content>

        <k-menu-nav>
          <k-tab>
            <k-tab-item current="true">
              <a>Tab 1</a>
            </k-tab-item>
            <k-tab-item current="false">
              <a>Tab 2</a>
            </k-tab-item>
            <k-tab-item current="false">
              <a>Tab 3</a>
            </k-tab-item>
            <k-tab-item disabled>
              <a>Tab 4</a>
            </k-tab-item>
          </k-tab>
        </k-menu-nav>
      </k-menu>
      <Drawer></Drawer>
    </React.Fragment>
  );
};

export default Menu;
