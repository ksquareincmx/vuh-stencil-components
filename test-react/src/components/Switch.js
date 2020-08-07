import React from "react";

const Button = () => {
  const handleClick = (e) => {
    console.log(e.target.value);
    alert("click");
  };

  return (
    <section>
      <k-switch label="on/off" onClick={handleClick}></k-switch>
      <k-switch label="disabled" disabled="true"></k-switch>
      <k-switch label="disabled" checked="true" disabled="true"></k-switch>
    </section>
  );
};

export default Button;
