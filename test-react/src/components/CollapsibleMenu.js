import React from "react";

const CollapsibleMenu = () => {
  const handleClick = (e) => {
    console.log(e);
    alert("click");
  };

  return (
    <k-collapse-menu>
      <k-collapse-parent>
        <k-avatar>
          <k-img
            alt="Abraham Berzunza"
            src="https://assets.gitlab-static.net/uploads/-/system/user/avatar/4533028/avatar.png?width=23"
          ></k-img>
        </k-avatar>
      </k-collapse-parent>
      <k-collapse-list>
        <k-collapse-item>Option 1</k-collapse-item>
        <k-collapse-item>Option 2</k-collapse-item>
        <k-collapse-item>Option 3</k-collapse-item>
        <k-collapse-item>Option 4</k-collapse-item>
        <k-collapse-item disabled="true">Option 5</k-collapse-item>
      </k-collapse-list>
    </k-collapse-menu>
  );
};

export default CollapsibleMenu;
