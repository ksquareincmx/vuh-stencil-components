import React, { useState } from "react";

const Modal = () => {
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    setShow(!show);
  };

  return (
    <React.Fragment>
      <k-modal id="k-modal" show={show} hide-close-button={true}>
        <p>This is a modal</p>
      </k-modal>
      <k-button onClick={handleClick}>Show modal</k-button>
    </React.Fragment>
  );
};

export default Modal;
