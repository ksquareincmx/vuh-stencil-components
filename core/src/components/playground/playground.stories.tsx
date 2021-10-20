import React from 'react';
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

const Template = () => (
  <div className="story-container k-playground">
    <LiveProvider className="code-editor" code={`
<>
  Write here (keep the empty tags)
</>`}>
    <LiveEditor />
    <LiveError />
    <LivePreview />
  </LiveProvider>
  </div>
);
  
  
export const playground = Template.bind({});