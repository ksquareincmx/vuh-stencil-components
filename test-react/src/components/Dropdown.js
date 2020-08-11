import React, { useEffect } from "react";

const Dropdown = () => {
  const handleClick = (e) => {
    console.log(e.target.value);
    alert("click on dropdown");
  };

  return (
    <section>
      <section style={{ margin: "24px", width: "100%" }}>
        <h1>Dropdown button</h1>
        <k-dropdown variant="button">
          <k-dropdown-item onInput={handleClick} name="op0" value="00">
            Select your option
          </k-dropdown-item>
          <k-dropdown-item onInput={handleClick} name="op1" value="01" checked>
            Option 1
          </k-dropdown-item>
          <k-dropdown-item onInput={handleClick} name="op2" value="02">
            Option 2
          </k-dropdown-item>
          <k-dropdown-item onInput={handleClick} name="op3" value="03">
            Option 3
          </k-dropdown-item>
        </k-dropdown>
      </section>
      <section style={{ margin: "24px", width: "100%" }}>
        <h1>Dropdown button disabled</h1>
        <k-dropdown variant="button" disabled>
          <k-dropdown-item onInput={handleClick} name="op0" value="00">
            Select your option
          </k-dropdown-item>
          <k-dropdown-item onInput={handleClick} name="op1" value="01">
            Option 1
          </k-dropdown-item>
          <k-dropdown-item onInput={handleClick} name="op2" value="02">
            Option 2
          </k-dropdown-item>
          <k-dropdown-item onInput={handleClick} name="op3" value="03">
            Option 3
          </k-dropdown-item>
        </k-dropdown>
      </section>
      <section style={{ margin: "24px", width: "100%" }}>
        <h1>Dropdown input</h1>
        <k-dropdown variant="input" helper-text="This is a helper text.">
          <k-dropdown-item onInput={handleClick} name="op0" value="00">
            Select your option
          </k-dropdown-item>
          <k-dropdown-item onInput={handleClick} name="op1" value="01">
            Option 1
          </k-dropdown-item>
          <k-dropdown-item onInput={handleClick} name="op2" value="02">
            Option 2
          </k-dropdown-item>
          <k-dropdown-item onInput={handleClick} name="op3" value="03" checked>
            Option 3
          </k-dropdown-item>
        </k-dropdown>
      </section>
      <section style={{ margin: "24px", width: "100%" }}>
        <h1>Dropdown input with label</h1>
        <k-dropdown
          variant="input"
          label="Label"
          helper-text="This is a helper text."
        >
          <k-dropdown-item onInput={handleClick} name="op0" value="00">
            Select your option
          </k-dropdown-item>
          <k-dropdown-item onInput={handleClick} name="op1" value="01">
            Option 1
          </k-dropdown-item>
          <k-dropdown-item onInput={handleClick} name="op2" value="02">
            Option 2
          </k-dropdown-item>
          <k-dropdown-item onInput={handleClick} name="op3" value="03">
            Option 3
          </k-dropdown-item>
        </k-dropdown>
      </section>
      <section style={{ margin: "24px", width: "100%" }}>
        <h1>Dropdown input success</h1>
        <k-dropdown
          variant="input"
          validation-state="success"
          helper-text="This is a helper text."
        >
          <k-dropdown-item onInput={handleClick} name="op0" value="00">
            Select your option
          </k-dropdown-item>
          <k-dropdown-item onInput={handleClick} name="op1" value="01">
            Option 1
          </k-dropdown-item>
          <k-dropdown-item onInput={handleClick} name="op2" value="02">
            Option 2
          </k-dropdown-item>
          <k-dropdown-item onInput={handleClick} name="op3" value="03">
            Option 3
          </k-dropdown-item>
        </k-dropdown>
      </section>
      <section style={{ margin: "24px", width: "100%" }}>
        <h1>Dropdown input success with label</h1>
        <k-dropdown
          variant="input"
          label="Label"
          validation-state="success"
          helper-text="This is a helper text."
        >
          <k-dropdown-item onInput={handleClick} name="op0" value="00">
            Select your option
          </k-dropdown-item>
          <k-dropdown-item onInput={handleClick} name="op1" value="01">
            Option 1
          </k-dropdown-item>
          <k-dropdown-item onInput={handleClick} name="op2" value="02">
            Option 2
          </k-dropdown-item>
          <k-dropdown-item onInput={handleClick} name="op3" value="03">
            Option 3
          </k-dropdown-item>
        </k-dropdown>
      </section>
      <section style={{ margin: "24px", width: "100%" }}>
        <h1>Dropdown input error</h1>
        <k-dropdown
          variant="input"
          validation-state="error"
          helper-text="This is a helper text."
        >
          <k-dropdown-item onInput={handleClick} name="op0" value="00">
            Select your option
          </k-dropdown-item>
          <k-dropdown-item onInput={handleClick} name="op1" value="01">
            Option 1
          </k-dropdown-item>
          <k-dropdown-item onInput={handleClick} name="op2" value="02">
            Option 2
          </k-dropdown-item>
          <k-dropdown-item onInput={handleClick} name="op3" value="03">
            Option 3
          </k-dropdown-item>
        </k-dropdown>
      </section>
      <section style={{ margin: "24px", width: "100%" }}>
        <h1>Dropdown input error with label</h1>
        <k-dropdown
          variant="input"
          label="Label"
          validation-state="error"
          helper-text="This is a helper text."
        >
          <k-dropdown-item onInput={handleClick} name="op0" value="00">
            Select your option
          </k-dropdown-item>
          <k-dropdown-item onInput={handleClick} name="op1" value="01">
            Option 1
          </k-dropdown-item>
          <k-dropdown-item onInput={handleClick} name="op2" value="02">
            Option 2
          </k-dropdown-item>
          <k-dropdown-item onInput={handleClick} name="op3" value="03">
            Option 3
          </k-dropdown-item>
        </k-dropdown>
      </section>
      <section style={{ margin: "24px", width: "100%" }}>
        <h1>Dropdown input disabled</h1>
        <k-dropdown variant="input" disabled>
          <k-dropdown-item onInput={handleClick} name="op0" value="00">
            Select your option
          </k-dropdown-item>
          <k-dropdown-item onInput={handleClick} name="op1" value="01">
            Option 1
          </k-dropdown-item>
          <k-dropdown-item onInput={handleClick} name="op2" value="02">
            Option 2
          </k-dropdown-item>
          <k-dropdown-item onInput={handleClick} name="op3" value="03">
            Option 3
          </k-dropdown-item>
        </k-dropdown>
      </section>
      <section style={{ margin: "24px", width: "100%" }}>
        <h1>Dropdown input disabled with label</h1>
        <k-dropdown variant="input" label="Label" disabled>
          <k-dropdown-item onInput={handleClick} name="op0" value="00">
            Select your option
          </k-dropdown-item>
          <k-dropdown-item onInput={handleClick} name="op1" value="01">
            Option 1
          </k-dropdown-item>
          <k-dropdown-item onInput={handleClick} name="op2" value="02">
            Option 2
          </k-dropdown-item>
          <k-dropdown-item onInput={handleClick} name="op3" value="03">
            Option 3
          </k-dropdown-item>
        </k-dropdown>
      </section>
      <section style={{ margin: "24px", width: "100%" }}>
        <h1>Dropdown table</h1>
        <k-dropdown variant="table">
          <k-dropdown-item onInput={handleClick} name="op1" value="01">
            25
          </k-dropdown-item>
          <k-dropdown-item onInput={handleClick} name="op2" value="02">
            100
          </k-dropdown-item>
          <k-dropdown-item onInput={handleClick} name="op3" value="03">
            250
          </k-dropdown-item>
        </k-dropdown>
      </section>
      <section style={{ margin: "24px", width: "100%" }}>
        <h1>Dropdown table with label</h1>
        <k-dropdown variant="table" label="Row">
          <k-dropdown-item onInput={handleClick} name="op1" value="01">
            25
          </k-dropdown-item>
          <k-dropdown-item onInput={handleClick} name="op2" value="02">
            100
          </k-dropdown-item>
          <k-dropdown-item onInput={handleClick} name="op3" value="03">
            250
          </k-dropdown-item>
        </k-dropdown>
      </section>
      <section style={{ margin: "24px", width: "100%" }}>
        <h1>Dropdown table disabled</h1>
        <k-dropdown variant="table" disabled>
          <k-dropdown-item onInput={handleClick} name="op1" value="01">
            25
          </k-dropdown-item>
          <k-dropdown-item onInput={handleClick} name="op2" value="02">
            100
          </k-dropdown-item>
          <k-dropdown-item onInput={handleClick} name="op3" value="03">
            250
          </k-dropdown-item>
        </k-dropdown>
      </section>
      <section style={{ margin: "24px", width: "100%" }}>
        <h1>Dropdown table disabled with label</h1>
        <k-dropdown variant="table" label="Row" disabled>
          <k-dropdown-item onInput={handleClick} name="op1" value="01">
            25
          </k-dropdown-item>
          <k-dropdown-item onInput={handleClick} name="op2" value="02">
            100
          </k-dropdown-item>
          <k-dropdown-item onInput={handleClick} name="op3" value="03">
            250
          </k-dropdown-item>
        </k-dropdown>
      </section>
    </section>
  );
};

export default Dropdown;
