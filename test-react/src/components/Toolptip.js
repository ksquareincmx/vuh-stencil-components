import React from "react";

const Tooltip = () => {
  return (
    <div style={{ display: "flex" }}>
      <k-tooltip text="KTooltip example text" position="top">
        <k-button style={{ marginRight: "16px", display: "block" }}>
          Top
        </k-button>
      </k-tooltip>
      <k-tooltip text="KTooltip example text" position="bottom">
        <k-button style={{ marginRight: "16px", display: "block" }}>
          Bottom
        </k-button>
      </k-tooltip>
      <k-tooltip text="KTooltip example text" position="left">
        <k-button style={{ marginRight: "16px", display: "block" }}>
          Left
        </k-button>
      </k-tooltip>
      <k-tooltip text="KTooltip example text" position="right">
        <k-button>Right</k-button>
      </k-tooltip>
    </div>
  );
};

export default Tooltip;
