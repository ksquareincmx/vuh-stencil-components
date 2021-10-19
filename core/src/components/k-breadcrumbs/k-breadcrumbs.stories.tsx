import React from 'react';
import { KBreadcrumbs, KBreadcrumbsItem } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Breadcrumbs',
  component: 'k-breadcrumbs',
  parameters: {
    controls: { hideNoControlsWarning: true },
  }
};

const Template = (props) => (
  <div className="story-container">
    <h1>Breadcrumbs</h1>
    <hr />
    <KBreadcrumbs >
      <KBreadcrumbsItem>
        Link 1
      </KBreadcrumbsItem>
      <KBreadcrumbsItem >
        Link 2
      </KBreadcrumbsItem>
      <KBreadcrumbsItem current={true}>
        Link 3
      </KBreadcrumbsItem>
    </KBreadcrumbs>
    <CodeViewer>
      {`
  <k-breadcrumbs>
    <k-breadcrumbs-item>
      <a href="#">Link #1</a>
    </k-breadcrumbs-item>
    <k-breadcrumbs-item>
      <a href="#">Link #2</a>
    </k-breadcrumbs-item>
    <k-breadcrumbs-item current="true">
      <a href="#">Link #3</a>
    </k-breadcrumbs-item>
  </k-breadcrumbs>
      `}
    </CodeViewer>
  </div>
);

export const Breadcrumbs = Template.bind({});