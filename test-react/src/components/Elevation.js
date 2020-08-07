import React from "react";

const Elevation = () => {
  return (
    <section>
      <k-elevation radius="8px">
        <div
          class="elevation-modal"
          style={{
            height: "200px",
            width: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Elevation
        </div>
      </k-elevation>
      <k-elevation radius="50%">
        <div
          class="elevation-modal"
          style={{
            height: "200px",
            width: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Elevation
        </div>
      </k-elevation>
    </section>
  );
};

export default Elevation;
