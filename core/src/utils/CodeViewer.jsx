import React, { useState } from 'react';
import { h } from '@stencil/core';
import Prism from 'prismjs';

const textOptions = {
  show: 'Show Code',
  hide: 'Hide Code'
}

const componentName = ({children, keepCode = false}) => {

  const [textOption, setTextOption] = useState(keepCode ? 0 : -1);

  const codeButtonHanlder = () => {
    if(textOption) {
      setTextOption(0);
    } else {
      setTextOption(1);
    }
  }

  const html = Prism.highlight(children, Prism.languages.html, 'html');

  return (
    <div className="code-container">
      {!keepCode && <button onClick={codeButtonHanlder}>
        {textOption || textOption === -1 ? textOptions.show : textOptions.hide}
      </button>}
      <pre className={textOption === -1 ? '' : (textOption ? 'hide' : 'show')}>
      <code>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </code>
      </pre>
    </div>
  );
};

export default componentName;