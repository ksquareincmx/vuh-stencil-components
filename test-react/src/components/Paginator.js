import React from "react";

const Paginator = () => {
  const handleClick = (ev) => {
    console.log(ev?.target?.value);
  };

  return (
    <section>
      <k-paginator
        onClick={handleClick}
        current-page="1"
        total-pages="17"
      ></k-paginator>
      <br />
      <k-paginator
        onClick={handleClick}
        current-page="3"
        total-pages="4"
      ></k-paginator>
      <br />
    </section>
  );
};

export default Paginator;
