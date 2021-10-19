import React from 'react';
import { KSearchBar } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Search Bar',
  component: 'k-search-bar',
  argTypes: {
    type: {
      options: ['solid', 'outlined'],
      control: { type: 'select' }
    }
  }
};

const Template = (props) => (
  <div className="story-container">
    <h1>Search Bar</h1>
    <hr />
    <div className="story-description">
      <p>
      It depends on the behavior of the card 
      where you are, respecting your padding
      measures.
      </p>
    </div>
    <KSearchBar {...props}/>
    <CodeViewer>
      {`
  <k-search-bar
    type="${props.type}"
    value="${props.value}"
    disabled="${props.disabled}"
    name="${props.name}"
    placeholder="${props.placeholder}"
    max-length="${props.maxLength}"
    min-length="${props.minLength}"
  >
  </k-search-bar>
      `}
    </CodeViewer>
  </div>
);

export const SearchBar = Template.bind({});
SearchBar.args = {
  type: 'solid',
  value: '',
  disabled: false,
  name: 'courses-search',
  placeholder: 'Search',
  maxLength: 0,
  minLength: 0
};