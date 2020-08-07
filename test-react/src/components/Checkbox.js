import React from "react";

const Checkbox = () => {
  const handleClick = (e) => {
    console.log(e.target.checked, e.target.value);
    alert("click");
  };

  return (
    <section>
      <k-checkbox value="5" onClick={handleClick}>
        Default
      </k-checkbox>
      <k-checkbox checked onClick={handleClick}>
        Checked
      </k-checkbox>
      <k-checkbox disabled onClick={handleClick}>
        Disabled
      </k-checkbox>
      <k-checkbox disabled checked onClick={handleClick}>
        {`Disabled & Checked`}
      </k-checkbox>
    </section>
  );
};

export default Checkbox;
