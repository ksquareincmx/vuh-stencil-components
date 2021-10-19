import React from 'react';
import { KButton } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';
import './preview.css';

export default {
  title: 'Components/Buttons',
  component: 'k-button',
  parameters: {
    controls: { hideNoControlsWarning: true },
  }
}

const defArgs = {
  color: 'primary',
  size: 'small',
  shape: 'smooth'
}

const argTypes = {
  color: {
    options: ['primary', 'secondary', 'terciary'],
    control: { type: 'select' }
  },
  size: {
    options: ['small', 'medium', 'large'],
    control: { type: 'select' }
  },
  shape: {
    options: ['smooth', 'round', 'full'],
    control: { type: 'select' }
  }
}

interface tableProps {
  title: string;
  size: 'small' | 'medium' | 'large';
}

const tableRender = (props: tableProps) => {
  const {
    title,
    size
  } = props;
  
  return (
    <>
      <h1>{title}</h1>
      <hr />
      <table>
        <tr>
          <td>disabled</td>
          <td>
            <p>full</p>
          </td>
          <td>
            <p>round</p>
          </td>
          <td>
            <p>smooth</p>
          </td>
        </tr>
        <tr>
          <td>
            <KButton size={size} shape="full" color="primary" disabled>
              Primary
            </KButton>
          </td>
          <td>
            <KButton size={size} shape="full" color="primary">
              Primary
            </KButton>
          </td>
          <td>
            <KButton size={size} shape="round" color="primary">
              Primary
            </KButton>
          </td>
          <td>
            <KButton size={size} shape="smooth" color="primary">
              Primary
            </KButton>
          </td>
        </tr>
        <tr>
          <td>
            <KButton size={size} shape="full" color="secondary" disabled>
              Secondary
            </KButton>
          </td>
          <td>
            <KButton size={size} shape="full" color="secondary">
              Secondary
            </KButton>
          </td>
          <td>
            <KButton size={size} shape="round" color="secondary">
              Secondary
            </KButton>
          </td>
          <td>
            <KButton size={size} shape="smooth" color="secondary">
              Secondary
            </KButton>
          </td>
        </tr>
        <tr>
          <td>
            <KButton size={size} shape="full" color="terciary" disabled>
              Terciary
            </KButton>
          </td>
          <td>
            <KButton size={size} shape="full" color="terciary">
              Terciary
            </KButton>
          </td>
          <td>
            <KButton size={size} shape="round" color="terciary">
              Terciary
            </KButton>
          </td>
          <td>
            <KButton size={size} shape="smooth" color="terciary">
              Terciary
            </KButton>
          </td>
        </tr>
      </table>
    </>
  );
}

const buttonsTables: tableProps[] = [
  {
    title: 'Small size',
    size: 'small'
  },
  {
    title: 'Medium size',
    size: 'medium'
  },
  {
    title: 'Large size',
    size: 'large'
  }
]

const TemplateAll = () => (
  <div className="story-container">
    <h1>Default Button</h1>
    <hr />
    <div className="story-description">
      <p>
        “Don’t wrap text. For maximum legibility,
        a text label should remain on a single line.”
      </p>
      <p>
        The length of the button depends on two factors:
        <ul>
          <li>
            If the button is out of a container
          </li>
          <li>
            Internal margins requested by the container if the button is within one
          </li>
        </ul>
      </p>
      <p>
        When the button is inside a component it
        will have a fixed size and cannot be adapted,
        but if the button is outside a component it
        will behave based on the columns
      </p>
    </div>
    <KButton>
      Default
    </KButton>
    <CodeViewer>
      {`
  <k-button>
    Default
  </k-button>
      `}
    </CodeViewer>
    <div className="buttons">
      {buttonsTables.map((data) => tableRender(data))}
    </div>
  </div>
)

const TemplateDef = () => (
  <div className="story-container">
    <h1>Default Button</h1>
    <hr />
    <div className="button-container">
      <KButton>
      </KButton>
    </div>
    <CodeViewer>
      {`
  <k-button>
    Default
  </k-button>
      `}
    </CodeViewer>
  </div>
);

const TemplateP = (props) => (
  <div className="story-container">
    <h1>Primary Button</h1>
    <hr />
    <div className="button-container">
      <KButton {...props}>
        Primary
      </KButton>
    </div>
    <CodeViewer>
      {`
  <k-button color="${props.color}" size="${props.size}" shape="${props.shape}">
    Primary
  </k-button>
      `}
    </CodeViewer>
  </div>
);

const TemplateS = (props) => (
  <div className="story-container">
    <h1>Secondary Button</h1>
    <hr />
    <div className="button-container">
      <KButton {...props}>
      </KButton>
    </div>
    <CodeViewer>
      {`
  <k-button color="${props.color}" size="${props.size}" shape="${props.shape}">
    Secondary
  </k-button>
      `}
    </CodeViewer>
  </div>
);

const TemplateT = (props) => (
  <div className="story-container">
    <h1>Terciary Button</h1>
    <hr />
    <div className="button-container">
      <KButton {...props}>
      </KButton>
    </div>
    <CodeViewer>
      {`
  <k-button color="${props.color}" size="${props.size}" shape="${props.shape}">
    Terciary
  </k-button>
      `}
    </CodeViewer>
  </div>
);

export const All = TemplateAll.bind({});

export const Default = TemplateDef.bind({});

export const Primary = TemplateP.bind({});
Primary.args = { ...defArgs };
Primary.argTypes = { ...argTypes };

export const Secondary = TemplateS.bind({});
Secondary.args = {
  ...defArgs,
  color: 'secondary'
};
Secondary.argTypes = { ...argTypes };

export const Terciary = TemplateT.bind({});
Terciary.args = {
  ...defArgs,
  color: 'terciary',
};
Terciary.argTypes = { ...argTypes };