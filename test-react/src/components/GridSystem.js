import React from "react";

const GridSystem = () => {
  return (
    <section>
      <k-typography style={{ marginBottom: "16px" }}>
        <h3>Empty Container</h3>
      </k-typography>

      <k-grid style={{ height: "50px", backgroundColor: "#d6d6d6" }}>
        <p>This is a regular container.</p>
      </k-grid>

      <br />
      <k-typography style={{ marginBottom: "16px" }}>
        <h3>Empty Fluid Container</h3>
      </k-typography>

      <k-grid fluid style={{ height: "50px", backgroundColor: "#d6d6d6" }}>
        <p>This container is fluid and has no padding on its sides.</p>
      </k-grid>

      <br />
      <k-typography style={{ marginBottom: "16px" }}>
        <h3>Empty Row</h3>
      </k-typography>

      <k-grid style={{ backgroundColor: "#d6d6d6" }}>
        <k-row style={{ height: "50px", backgroundColor: "#f7f7f7" }}> </k-row>
      </k-grid>

      <br />
      <k-typography style={{ marginBottom: "16px" }}>
        <h3>Columns</h3>
      </k-typography>

      <k-grid style={{ backgroundColor: "#f7f7f7" }}>
        <k-row>
          <k-column fluid size="1">
            <p style={{ backgroundColor: "#42e3ad", margin: "0" }}>
              Fluid Column (size 1)
            </p>
          </k-column>
          <k-column fluid size="1">
            <p style={{ backgroundColor: "#42e3ad", margin: "0" }}>
              Fluid Column (size 1)
            </p>
          </k-column>
          <k-column fluid size="1">
            <p style={{ backgroundColor: "#42e3ad", margin: "0" }}>
              Fluid Column (size 1)
            </p>
          </k-column>
          <k-column fluid size="1">
            <p style={{ backgroundColor: "#42e3ad", margin: "0" }}>
              Fluid Column (size 1)
            </p>
          </k-column>
          <k-column fluid size="1">
            <p style={{ backgroundColor: "#42e3ad", margin: "0" }}>
              Fluid Column (size 1)
            </p>
          </k-column>
          <k-column fluid size="1">
            <p style={{ backgroundColor: "#42e3ad", margin: "0" }}>
              Fluid Column (size 1)
            </p>
          </k-column>
          <k-column fluid size="1">
            <p style={{ backgroundColor: "#42e3ad", margin: "0" }}>
              Fluid Column (size 1)
            </p>
          </k-column>
          <k-column fluid size="1">
            <p style={{ backgroundColor: "#42e3ad", margin: "0" }}>
              Fluid Column (size 1)
            </p>
          </k-column>
          <k-column fluid size="1">
            <p style={{ backgroundColor: "#42e3ad", margin: "0" }}>
              Fluid Column (size 1)
            </p>
          </k-column>
          <k-column fluid size="1">
            <p style={{ backgroundColor: "#42e3ad", margin: "0" }}>
              Fluid Column (size 1)
            </p>
          </k-column>
          <k-column fluid size="1">
            <p style={{ backgroundColor: "#42e3ad", margin: "0" }}>
              Fluid Column (size 1)
            </p>
          </k-column>
          <k-column fluid size="1">
            <p style={{ backgroundColor: "#42e3ad", margin: "0" }}>
              Fluid Column (size 1)
            </p>
          </k-column>
        </k-row>
      </k-grid>

      <br />

      <k-grid style={{ backgroundColor: "#f7f7f7" }}>
        <k-row>
          <k-column size="1">
            <p style={{ backgroundColor: "#42e3ad", margin: "0" }}>
              Column (size 1)
            </p>
          </k-column>
          <k-column size="1">
            <p style={{ backgroundColor: "#42e3ad", margin: "0" }}>
              Column (size 1)
            </p>
          </k-column>
          <k-column size="1">
            <p style={{ backgroundColor: "#42e3ad", margin: "0" }}>
              Column (size 1)
            </p>
          </k-column>
          <k-column size="1">
            <p style={{ backgroundColor: "#42e3ad", margin: "0" }}>
              Column (size 1)
            </p>
          </k-column>
          <k-column size="1">
            <p style={{ backgroundColor: "#42e3ad", margin: "0" }}>
              Column (size 1)
            </p>
          </k-column>
          <k-column size="1">
            <p style={{ backgroundColor: "#42e3ad", margin: "0" }}>
              Column (size 1)
            </p>
          </k-column>
          <k-column size="1">
            <p style={{ backgroundColor: "#42e3ad", margin: "0" }}>
              Column (size 1)
            </p>
          </k-column>
          <k-column size="1">
            <p style={{ backgroundColor: "#42e3ad", margin: "0" }}>
              Column (size 1)
            </p>
          </k-column>
          <k-column size="1">
            <p style={{ backgroundColor: "#42e3ad", margin: "0" }}>
              Column (size 1)
            </p>
          </k-column>
          <k-column size="1">
            <p style={{ backgroundColor: "#42e3ad", margin: "0" }}>
              Column (size 1)
            </p>
          </k-column>
          <k-column size="1">
            <p style={{ backgroundColor: "#42e3ad", margin: "0" }}>
              Column (size 1)
            </p>
          </k-column>
          <k-column size="1">
            <p style={{ backgroundColor: "#42e3ad", margin: "0" }}>
              Column (size 1)
            </p>
          </k-column>
        </k-row>
      </k-grid>

      <br />

      <k-grid style={{ backgroundColor: "#f7f7f7" }}>
        <k-row>
          <k-column size="1" sizesm="4" sizemd="8" sizelg="12">
            <p style={{ backgroundColor: "#42e3ad", margin: "0" }}>
              Column (size 1, sizeSm 4, sizeMd 8, sizeLg 12).
            </p>
          </k-column>
        </k-row>
      </k-grid>

      <br />

      <k-grid style={{ backgroundColor: "#f7f7f7" }}>
        <k-row>
          <k-column size="2">
            <p style={{ backgroundColor: "#42e3ad", margin: "0" }}>
              Column (size 2)
            </p>
          </k-column>
          <k-column sizesm="3">
            <p style={{ backgroundColor: "#42e3ad", margin: "0" }}>
              Column (sizeSm 3)
            </p>
          </k-column>
          <k-column sizemd="5" sizelg="7">
            <p style={{ backgroundColor: "#42e3ad", margin: "0" }}>
              Column (sizeMd 5, sizeLg 7)
            </p>
          </k-column>
          <k-column sizemd="6">
            <p style={{ backgroundColor: "#42e3ad", margin: "0" }}>
              Column (sizeMd 6)
            </p>
          </k-column>
        </k-row>
      </k-grid>
    </section>
  );
};

export default GridSystem;
