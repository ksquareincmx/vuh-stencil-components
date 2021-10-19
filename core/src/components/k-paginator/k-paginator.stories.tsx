import React from 'react';
import { KPaginator } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Paginator',
  component: 'k-paginator'
};

const Template = (props) => (
  <div className="story-container">
    <h1>Paginator</h1>
    <hr />
    <div className="story-description">
      <p>
        When the person is in the middle of the page,
        only the first page and the last page will be
        shown on the sides and in the middle two before
        and two after the page that is
      </p>
    </div>
    <KPaginator {...props} />
    <CodeViewer>
      {`
  <k-paginator total-pages="${props.totalPages}" current-page="${props.currentPage}">
  </k-paginator>
      `}
    </CodeViewer>
  </div>
);

export const Paginator = Template.bind({});
Paginator.args = {
 totalPages: 10,
 currentPage: 1
};