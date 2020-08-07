import React from "react";

const Carousel = () => {
  return (
    <k-carousel style={{ height: "300px" }}>
      <k-carousel-item>
        <k-img
          style={{ width: "100%" }}
          src="https://cdn.pixabay.com/photo/2019/11/03/01/56/landscape-4597742_1280.jpg"
        ></k-img>
      </k-carousel-item>
      <k-carousel-item>
        <k-img src="https://cdn.pixabay.com/photo/2020/07/09/10/31/sea-5386810_1280.jpg"></k-img>
      </k-carousel-item>
      <k-carousel-item>
        <k-img
          style={{ width: "100%" }}
          src="https://cdn.pixabay.com/photo/2019/11/03/01/56/landscape-4597742_1280.jpg"
        ></k-img>
      </k-carousel-item>
      <k-carousel-item>
        <k-img src="https://cdn.pixabay.com/photo/2020/07/09/10/31/sea-5386810_1280.jpg"></k-img>
      </k-carousel-item>
    </k-carousel>
  );
};

export default Carousel;
