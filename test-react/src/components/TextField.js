import React, { useState } from "react";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  const handlInputChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  return (
    <section>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <k-text-field
          onInput={handlInputChange}
          style={{ width: "48%", height: "300px" }}
          max-length="30"
          label="Description"
          helper-text="This is a helper text"
        ></k-text-field>
        <k-text-field
          style={{ width: "48%" }}
          label="Biography"
          disabled
          value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        ></k-text-field>
      </div>
      <k-text-field label="Biography" disabled></k-text-field>
      <k-text-field
        label="Biography"
        validation-state="success"
        max-length="100"
        value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      ></k-text-field>
      <k-text-field
        label="Biography"
        validation-state="error"
        max-length="100"
        helper-text="this is a text helper"
        value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      ></k-text-field>
    </section>
  );
};

export default SearchBar;
