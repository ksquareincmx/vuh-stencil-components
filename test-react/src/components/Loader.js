import React from "react";

const Loader = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <k-spinner style={{ marginRight: "24px" }}></k-spinner>
      <k-spinner
        size="24"
        strong="4"
        style={{ marginRight: "24px" }}
      ></k-spinner>
      <k-spinner
        size="12"
        strong="2"
        style={{ marginRight: "24px" }}
      ></k-spinner>
      <k-spinner style={{ marginRight: "24px" }} color="success200"></k-spinner>
      <k-spinner
        size="24"
        strong="4"
        style={{ marginRight: "24px" }}
        color="success200"
      ></k-spinner>
      <k-spinner size="12" strong="2" color="success200"></k-spinner>
    </div>
  );
};

export default Loader;
