import React from "react";

const Image = () => {
  const handleClick = (e) => {
    console.log(e);
    alert("click");
  };

  return (
    <section>
      <k-img
        src="https://media-exp1.licdn.com/dms/image/C4E1BAQGOhOLNnmDazw/company-background_10000/0?e=2159024400&v=beta&t=FLPdAgxuIRlNgMSoohrTA6Meg5SzkPIuNV_qauRDP0Q"
        alt="the-ksquare-group"
        height="300"
        fit="cover"
      ></k-img>
      <br />
      <k-img
        src="https://media-exp1.licdn.com/dms/image/C4E1BAQGOhOLNnmDazw/company-background_10000/0?e=2159024400&v=beta&t=FLPdAgxuIRlNgMSoohrTA6Meg5SzkPIuNV_qauRDP0Q"
        alt="the-ksquare-group"
        height="600"
        fit="cover"
      ></k-img>
    </section>
  );
};

export default Image;
