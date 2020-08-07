import React from "react";

const Snackbar = () => {
  const handleClick = (e) => {
    console.log(e);
    alert("click");
  };

  return (
    <k-snackbar text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit.">
      <k-button color="terciary" onClick={handleClick}>
        Dismiss
      </k-button>
    </k-snackbar>
  );
};

export default Snackbar;
