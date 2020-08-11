import React, { useState } from "react";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  const handlInputChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  return (
    <section>
      Normal
      <k-search-bar
        value={inputValue}
        onInput={handlInputChange}
      ></k-search-bar>
      <p>{inputValue}</p>
      <br />
      Disabled
      <k-search-bar disabled></k-search-bar>
      <br />
      With Text
      <k-search-bar value="searching something ..."></k-search-bar>
      <br />
      <br />
      Disabled
      <k-search-bar type="outlined" disabled></k-search-bar>
      <br />
      Normal
      <k-search-bar type="outlined"></k-search-bar>
      <br />
      With Text
      <k-search-bar
        type="outlined"
        value="searching something ..."
      ></k-search-bar>
    </section>
  );
};

export default SearchBar;
