import React, { useState } from "react";

const Breadcrumbs = () => {
  const links = ["Link 1", "Link 2", "Link 3"];
  const [current, setCurrent] = useState(false);
  return (
    <section>
      <k-breadcrumbs>
        <k-breadcrumb-item current>
          <a href="#">Link 1</a>
        </k-breadcrumb-item>
      </k-breadcrumbs>

      <br />

      <k-breadcrumbs>
        {links.map((link, index) => (
          <k-breadcrumb-item key={index} current={index === current}>
            <a href="#" onClick={() => setCurrent(index)}>
              {link}
            </a>
          </k-breadcrumb-item>
        ))}
      </k-breadcrumbs>
    </section>
  );
};

export default Breadcrumbs;
