import React from "react";

const Card = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <k-card style={{ flexBasis: "40%" }}>
        <k-img src="https://cdn.pixabay.com/photo/2017/08/10/08/47/code-2620118_1280.jpg"></k-img>
        <div style={{ padding: "16px" }}>
          <h1>Card Title</h1>
        </div>
      </k-card>
      <k-card class="k-align-self-start" style={{ flexBasis: "40%" }}>
        <div style={{ display: "flex" }}>
          <k-img src="https://cdn.pixabay.com/photo/2017/08/10/08/47/code-2620118_1280.jpg"></k-img>
          <p style={{ padding: "16px" }}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis nat.
          </p>
        </div>
      </k-card>
    </div>
  );
};

export default Card;
