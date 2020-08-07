import React from "react";

const Banner = () => {
  const handleClick = (e) => {
    console.log(e);
    alert("click");
  };

  return (
    <section>
      <k-banner type="success">
        <k-banner-text>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis nat.
        </k-banner-text>
        <k-button color="terciary" onClick={handleClick}>
          Dismiss
        </k-button>
      </k-banner>
      <k-banner type="error">
        <k-banner-text>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis nat.
        </k-banner-text>
      </k-banner>
    </section>
  );
};

export default Banner;
