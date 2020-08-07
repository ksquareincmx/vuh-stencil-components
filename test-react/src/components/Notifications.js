import React from "react";

const Notification = () => {
  return (
    <k-notification-group>
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
  );
};

export default Notification;
