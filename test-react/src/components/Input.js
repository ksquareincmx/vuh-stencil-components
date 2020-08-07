import React, { useState } from "react";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  const handlInputChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  return (
    <section>
      <k-input label="Name" onInput={handlInputChange}></k-input>
      <k-input label="Last Name" disabled value="Berzunza"></k-input>
      <k-input label="Second Last Name" disabled></k-input>
      <k-input
        type="email"
        label="Email Address"
        validation-state="success"
        value="jesus.berzunza@ksquareinc.com"
      ></k-input>
      <k-input
        type="tel"
        label="Phone Number"
        validation-state="error"
        value="00000"
        helper-text="Phone number should have 10 digits"
      ></k-input>
    </section>
  );
};

export default SearchBar;
