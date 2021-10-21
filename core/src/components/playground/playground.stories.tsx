import React, { useState } from 'react';
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
  title: 'Playground'
}

const initialCode = `
<>
  Write here (keep the empty tags)
</>
`;

const Template = () => {

  const [code, setCode] = useState(initialCode);

  const handleChange = (e) => {
    setCode(e.target.value);
  }

  return (
  <div className="story-container k-playground">
    <textarea name="" className="writer" value={code} onChange={handleChange}></textarea>
  
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
  </div>
  )
};
  
  
export const playground = Template.bind({});