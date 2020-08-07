import React from "react";

const Paginator = () => {
  const handleClick = (e) => {
    console.log(e);
    console.log(e.target.value);
    alert("click");
  };
  return (
    <section>
      <k-paginator
        current-page="1"
        total-pages="17"
        onClick={handleClick}
      ></k-paginator>
      <br />
      <k-paginator
        current-page="3"
        total-pages="4"
        onClick={handleClick}
      ></k-paginator>
      <br />
    </section>
  );
};

export default Paginator;
