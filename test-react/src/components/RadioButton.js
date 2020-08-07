import React from "react";

const RadioButton = () => {
  const handleClick = (e) => {
    console.log(e.target.value);
    alert("click");
  };

  return (
    <k-radio-button-group>
      <k-radio-button
        name="default"
        value="3"
        onClick={handleClick}
      ></k-radio-button>
      <k-radio-button name="checked" checked value="5" onClick={handleClick}>
        Checked
      </k-radio-button>
      <k-radio-button name="disabled" disabled value="2" onClick={handleClick}>
        Disabled
      </k-radio-button>
    </k-radio-button-group>
  );
};

export default RadioButton;
