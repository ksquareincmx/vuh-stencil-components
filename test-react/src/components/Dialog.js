import React from "react";

const Button = () => {
  const handleCancel = (e) => {
    console.log(e);
    alert("cancel");
  };

  const handleAccept = (e) => {
    console.log(e);
    alert("accept");
  };

  return (
    <k-dialog>
      <k-dialog-content>
        <k-dialog-header>Dialog Header</k-dialog-header>
        <k-dialog-body style={{ width: "300px" }}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </k-dialog-body>
      </k-dialog-content>
      <k-dialog-actions>
        <k-button
          style={{ marginRight: "16px" }}
          color="terciary"
          onClick={handleCancel}
        >
          Cancel
        </k-button>
        <k-button color="terciary" onClick={handleAccept}>
          Discard
        </k-button>
      </k-dialog-actions>
    </k-dialog>
  );
};

export default Button;
