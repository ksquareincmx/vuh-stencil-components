import React from "react";

const Table = () => {
  const handleClick = (e) => {
    console.log(e.target.value);
    alert("click");
  };

  return (
    <k-table>
      <k-table-row type="navbar" style={{ minHeight: "56px" }}>
        <k-table-column size="7" style={{ height: "100%" }}>
          <k-typography style={{ color: "black" }}>
            <h4>Displaying Course Status</h4>
          </k-typography>
        </k-table-column>
        <k-table-column size="1" style={{ height: "100%" }}>
          <k-dropdown variant="table" label="Row" style={{ height: "100%" }}>
            <k-dropdown-item name="op1" value="01" onClick={handleClick}>
              25
            </k-dropdown-item>
            <k-dropdown-item name="op2" value="02">
              100
            </k-dropdown-item>
            <k-dropdown-item name="op3" value="03">
              250
            </k-dropdown-item>
          </k-dropdown>
        </k-table-column>
        <k-table-column size="3" style={{ height: "100%" }}>
          <k-paginator
            current-page="1"
            total-pages="17"
            onClick={handleClick}
          ></k-paginator>
        </k-table-column>
      </k-table-row>
      <k-table-row type="header">
        <k-table-header-column size="3" default>
          Hello there.
        </k-table-header-column>
        <k-table-header-column size="1" sortable="false">
          Hello there.
        </k-table-header-column>
        <k-table-header-column size="1" onClick={handleClick}>
          Hello there.
        </k-table-header-column>
        <k-table-header-column size="1">Hello there.</k-table-header-column>
        <k-table-header-column size="1">Hello there.</k-table-header-column>
        <k-table-header-column size="1">Hello there.</k-table-header-column>
        <k-table-header-column size="1">Hello there.</k-table-header-column>
        <k-table-header-column size="1" disabled>
          Hello there.
        </k-table-header-column>
        <k-table-header-column size="1" disabled>
          Hello there.
        </k-table-header-column>
        <k-table-header-column size="1" disabled>
          Hello there.
        </k-table-header-column>
      </k-table-row>
      <k-table-row>
        <k-table-column size="3">General Kenobi.</k-table-column>
        <k-table-column size="1">General Kenobi.</k-table-column>
        <k-table-column size="1">General Kenobi.</k-table-column>
        <k-table-column size="1">General Kenobi.</k-table-column>
        <k-table-column size="1">General Kenobi.</k-table-column>
        <k-table-column size="1">General Kenobi.</k-table-column>
        <k-table-column size="1">General Kenobi.</k-table-column>
        <k-table-column size="1">General Kenobi.</k-table-column>
        <k-table-column size="1">General Kenobi.</k-table-column>
        <k-table-column size="1">General Kenobi.</k-table-column>
      </k-table-row>
      <k-table-row>
        <k-table-column size="3">You are a bold one!</k-table-column>
        <k-table-column size="1">You are a bold one!</k-table-column>
        <k-table-column size="1">You are a bold one!</k-table-column>
        <k-table-column size="1">You are a bold one!</k-table-column>
        <k-table-column size="1">You are a bold one!</k-table-column>
        <k-table-column size="1">You are a bold one!</k-table-column>
        <k-table-column size="1">You are a bold one!</k-table-column>
        <k-table-column size="1">You are a bold one!</k-table-column>
        <k-table-column size="1">You are a bold one!</k-table-column>
        <k-table-column size="1">You are a bold one!</k-table-column>
      </k-table-row>
    </k-table>
  );
};

export default Table;
