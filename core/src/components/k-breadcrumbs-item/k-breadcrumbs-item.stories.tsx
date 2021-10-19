import React from 'react';
import { KBreadcrumbsItem } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Breadcrumbs',
  component: 'k-breadcrumbs-item'
}

const Template = (props) => (
  <div className="story-container">
    <h1>Breadcrumbs Item</h1>
    <hr />
    <div className="story-description">
      <p>
        This component was made to be used
        on <a href="/?path=/story/components-breadcrumbs--breadcrumbs">
          breadcrumbs
        </a> component.
      </p>
    </div>
    <KBreadcrumbsItem {...props}>
      Item
    </KBreadcrumbsItem>
    <CodeViewer>
      {`
  <k-breadcrumbs-item current="${props.current}">
    Item
  </k-breadcrumbs-item>
      `}
    </CodeViewer>
  </div>
);

export const BreadcrumbsItem = Template.bind({});
BreadcrumbsItem.args = { current: false };