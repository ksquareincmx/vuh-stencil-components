import React from "react";

const Button = () => {
  const handleClick = (e) => {
    console.log(e);
    alert("click");
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <k-typography style={{ width: "100%" }}>
        <h3>Colors</h3>
      </k-typography>
      <section style={{ margin: "24px" }}>
        Primary
        <k-button color="primary" onClick={handleClick}></k-button>
        <k-button color="primary" disabled onClick={handleClick}></k-button>
      </section>
      <section style={{ margin: "24px" }}>
        Secondary
        <k-button color="secondary" onClick={handleClick}></k-button>
        <k-button color="secondary" disabled onClick={handleClick}></k-button>
      </section>
      <section style={{ margin: "24px" }}>
        Terciary
        <k-button color="terciary" onClick={handleClick}></k-button>
        <k-button color="terciary" disabled onClick={handleClick}></k-button>
      </section>
      <k-typography style={{ width: "100%" }}>
        <h3>Shape</h3>
      </k-typography>
      <section style={{ margin: "24px" }}>
        Full
        <k-button
          style={{ width: "100%", color: "red" }}
          shape="full"
          onClick={handleClick}
        ></k-button>
      </section>
      <section style={{ margin: "24px" }}>
        Round
        <k-button shape="round" onClick={handleClick}></k-button>
        <k-button color="secondary" shape="round" onClick={handleClick}>
          A
        </k-button>
        <k-button color="terciary" shape="round" onClick={handleClick}>
          <div style={{ width: "16px", height: "16px" }}>A</div>
        </k-button>
      </section>
      <section style={{ margin: "24px" }}>
        Smooth (default)
        <k-button shape="smooth" onClick={handleClick}></k-button>
      </section>

      <k-typography style={{ width: "100%" }}>
        <h3>Size</h3>
      </k-typography>
      <section style={{ margin: "24px" }}>
        Large
        <k-button size="large" onClick={handleClick}></k-button>
      </section>
      <section style={{ margin: "24px" }}>
        Medium
        <k-button size="medium" onClick={handleClick}></k-button>
      </section>
      <section style={{ margin: "24px" }}>
        Small
        <k-button size="small" onClick={handleClick}></k-button>
      </section>
      <k-typography style={{ width: "100%" }}>
        <h3>Elevation</h3>
      </k-typography>
      <section style={{ margin: "24px" }}>
        With elevation
        <k-button color="primary" elevation onClick={handleClick}></k-button>
      </section>
      <section style={{ margin: "24px" }}>
        Without elevation
        <k-button color="primary" onClick={handleClick}></k-button>
      </section>
      <section style={{ margin: "24px" }}>
        Disabled
        <k-button
          color="primary"
          elevation
          disabled
          onClick={handleClick}
        ></k-button>
      </section>
    </div>
  );
};

export default Button;
