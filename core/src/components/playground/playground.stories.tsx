import React, { useState, useRef, useEffect } from 'react';
import CodeViewer from '../../utils/CodeViewer.jsx';
import './playground.css';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'
import '../../styles/stories.css';

export default {
  title: 'Playground',
  parameters: {
    controls: { hideNoControlsWarning: true },
  }
}

const initialCode = 
`<>
  <h2>Write here (keep the empty tags)</h2>
</>`;

const Template = () => {

  const [code, setCode] = useState(initialCode);

  const ref = useRef(null);

  const handleChange = (e) => {
    setCode(e.target.value);
  }

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.addEventListener('keydown', autosize)
    }
  })

  function autosize(e){
    var el = this;
    setTimeout(function(){
      el.style.cssText = 'height:auto; padding:0';
      el.style.cssText = 'height:' + el.scrollHeight + 'px';
    },0);
    if ( e.which != 9 ) return;
    e.preventDefault();
  }

  return (
  <div className="story-container">
    <h1>Playground</h1>
    <hr />
    <div className="story-description">
      <p>
        Here you can write code to test vuh components.
      </p>
      <ul>
        <li>
          <p>
            For inline styles you should do <i>{`<example`}<b>{` style={{fontSize: '16px', color: 'red'}}`}</b>{`></example>`}</i>
          </p>
        </li>
        <li>
          <p>
            Keep all the code wrapped in empty tags <i>{'<> ... </>'}</i>
          </p>
        </li>
      </ul>
    </div>
    <div className="k-playground">
      <CodeViewer keepCode={true}>
        {code}
      </CodeViewer>

      <div id="live-editor">
        <LiveProvider code={code}>
          <LiveEditor />
          <LiveError />
          <LivePreview />
        </LiveProvider>
      </div>

      <textarea
        className="writer"
        name=""
        ref={ref}
        rows={4}
        value={code}
        onChange={handleChange}
        spellCheck={false}
      ></textarea>
    </div>
  </div>
  )
};
  
  
export const playground = Template.bind({});