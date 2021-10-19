import React from 'react';
import { KTypography } from '../../../component-library-react/src/components';
import { typoInterface } from '../../types';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Typography',
  component: 'k-typography',
  argTypes: {
    variant: {
      options: ['h1'
      , 'h2'
      , 'h3'
      , 'h4'
      , 'h5'
      , 'p'
      , 'caption'
      , 'body1'
      , 'body2'
      , 'button'
      , 'link'],
      control: { type: 'select' }
    },
    color: {
      options: ['primary'
      , 'primary800'
      , 'primary700'
      , 'primary600'
      , 'primary500'
      , 'primary400'
      , 'primary300'
      , 'primary200'
      , 'primary100'
      , 'gray500'
      , 'gray400'
      , 'gray300'
      , 'gray200'
      , 'gray100'
      , 'gray50'
      , 'error200'
      , 'error100'
      , 'warning200'
      , 'warning100'
      , 'success200'
      , 'success100'],
      control: { type: 'select' }
    },
  }
};

const defArgs: typoInterface = {
  variant: 'h1',
  color: 'primary800'
}

const Template = (props) => (
  <div className="story-container">
    <h1>Typography</h1>
    <hr />
    <div className="story-description">
      <p>
      </p>
    </div>
    <KTypography {...props}>
      Hello world!
    </KTypography>
    <CodeViewer>
      {`
  <k-typography variant="${props.variant}" color="${props.color}"
  >
    Hello world!
  </k-typography>
      `}
    </CodeViewer>

    <h2>H1</h2>
    <hr />
    <KTypography color="gray500" variant="h1">
      Hello world!
    </KTypography>
    <CodeViewer>
      {`
  <k-typography color="gray500" variant="h1">
    Hello world!
  </k-typography>
      `}
    </CodeViewer>

    <h2>H2</h2>
    <hr />
    <KTypography color="gray500" variant="h2">
      Hello world!
    </KTypography>
    <CodeViewer>
      {`
  <k-typography color="gray500" variant="h2">
    Hello world!
  </k-typography>
      `}
    </CodeViewer>

    <h2>H3</h2>
    <hr />
    <KTypography color="gray500" variant="h3">
      Hello world!
    </KTypography>
    <CodeViewer>
      {`
  <k-typography color="gray500" variant="h3">
    Hello world!
  </k-typography>
      `}
    </CodeViewer>

    <h2>H4</h2>
    <hr />
    <KTypography color="gray500" variant="h4">
      Hello world!
    </KTypography>
    <CodeViewer>
      {`
  <k-typography color="gray500" variant="h4">
    Hello world!
  </k-typography>
      `}
    </CodeViewer>

    <h2>p</h2>
    <hr />
    <KTypography color="gray500" variant="p">
      Hello world!
    </KTypography>
    <CodeViewer>
      {`
  <k-typography color="gray500" variant="p">
    Hello world!
  </k-typography>
      `}
    </CodeViewer>

    <h2>caption</h2>
    <hr />
    <KTypography color="gray500" variant="caption">
      Hello world!
    </KTypography>
    <CodeViewer>
      {`
  <k-typography color="gray500" variant="caption">
    Hello world!
  </k-typography>
      `}
    </CodeViewer>

    <h2>body1</h2>
    <hr />
    <KTypography color="gray500" variant="body1">
      Hello world!
    </KTypography>
    <CodeViewer>
      {`
  <k-typography color="gray500" variant="body1">
    Hello world!
  </k-typography>
      `}
    </CodeViewer>

    <h2>body2</h2>
    <hr />
    <KTypography color="gray500" variant="body2">
      Hello world!
    </KTypography>
    <CodeViewer>
      {`
  <k-typography color="gray500" variant="body2">
    Hello world!
  </k-typography>
      `}
    </CodeViewer>

    <h2>button</h2>
    <hr />
    <KTypography color="gray500" variant="button">
      Hello world!
    </KTypography>
    <CodeViewer>
      {`
  <k-typography color="gray500" variant="button">
    Hello world!
  </k-typography>
      `}
    </CodeViewer>

    <h2>link</h2>
    <hr />
    <KTypography color="gray500" variant="link">
      Hello world!
    </KTypography>
    <CodeViewer>
      {`
  <k-typography color="gray500" variant="link">
    Hello world!
  </k-typography>
      `}
    </CodeViewer>
  </div>
);

export const Typography = Template.bind({});
Typography.args = {
  ...defArgs
};