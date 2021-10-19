import React from 'react';
import { KAvatar, KImg } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import { imgInterface } from '../../types';
import '../../styles/stories.css';
import './preview.css';

export default {
  title: 'Components/Avatar',
  component: 'k-avatar',
  argDefaults: {
    size: 'small'
  }
}

const defImgProps: imgInterface = {
  src: "https://assets.gitlab-static.net/uploads/-/system/user/avatar/3112753/avatar.png?width=90",
  alt: 'the-ksquare-group',
  fit: 'cover'
}

const defImgSmall: imgInterface = {
  ...defImgProps,
  height: 50,
}

const defImgMedium = {
  ...defImgProps,
  height: 80,
}

const defImgLarge = {
  ...defImgProps,
  height: 150,
}

const TemplateAll = () => (
  <div className="story-container">
    <h1>Avatar</h1>
    <hr />
    <div className="container">
      <div className="component">
        <KAvatar size="small">
          <KImg {...defImgSmall}></KImg>
        </KAvatar>
      </div>
      <div className="component">
        <KAvatar size="medium">
          <KImg {...defImgMedium}></KImg>
        </KAvatar>
      </div>
      <div className="component">
        <KAvatar size="large">
          <KImg {...defImgLarge}></KImg>
        </KAvatar>
      </div>
    </div>
    <CodeViewer>
      {`
  <div style="display:flex;">
    <k-avatar size="small">
      <k-img
        src="https://assets.gitlab-static.net/uploads/-/system/user/avatar/3112753/avatar.png?width=90"
        alt="the-ksquare-group"
        fit="cover"
        height="50"
      ></k-img>
    </k-avatar>
    <k-avatar size="medium">
      <k-img
        src="https://assets.gitlab-static.net/uploads/-/system/user/avatar/3112753/avatar.png?width=90"
        alt="the-ksquare-group"
        fit="cover"
        height="80"
      ></k-img>
    </k-avatar>
    <k-avatar size="large">
      <k-img
        src="https://assets.gitlab-static.net/uploads/-/system/user/avatar/3112753/avatar.png?width=90"
        alt="the-ksquare-group"
        fit="cover"
        height="150"
      ></k-img>
    </k-avatar>
  </div>
      `}
    </CodeViewer>
  </div>)

const TemplateSmall = (props) => (
  <div className="story-container">
    <h1>Avatar: small</h1>
    <hr />
    <KAvatar {...props}>
      <KImg {...defImgSmall}></KImg>
    </KAvatar>
    <CodeViewer>
      {`
  <k-avatar size="${props.size}">
    <k-img
      src="https://assets.gitlab-static.net/uploads/-/system/user/avatar/3112753/avatar.png?width=90"
      alt="the-ksquare-group"
      fit="cover"
      height="50"
    ></k-img>
  </k-avatar>
        `}
    </CodeViewer>
  </div>)

const TemplateMedium = (props) => (
  <div className="story-container">
    <h1>Avatar: medium</h1>
    <hr />
    <KAvatar {...props}>
      <KImg {...defImgMedium}></KImg>
    </KAvatar>
    <CodeViewer>
      {`
  <k-avatar size="${props.size}">
    <k-img
      src="https://assets.gitlab-static.net/uploads/-/system/user/avatar/3112753/avatar.png?width=90"
      alt="the-ksquare-group"
      fit="cover"
      height="80"
    ></k-img>
  </k-avatar>
      `}
    </CodeViewer>
</div>)

const TemplateLarge = (props) => (
  <div className="story-container">
    <h1>Avatar: large</h1>
    <hr />
    <KAvatar {...props}>
      <KImg {...defImgLarge}></KImg>
    </KAvatar>
    <CodeViewer>
      {`
  <k-avatar size="${props.size}">
    <k-img
      src="https://assets.gitlab-static.net/uploads/-/system/user/avatar/3112753/avatar.png?width=90"
      alt="the-ksquare-group"
      fit="cover"
      height="150"
    ></k-img>
  </k-avatar>
      `}
    </CodeViewer>
</div>)

export const All = TemplateAll.bind({});
All.parameters = {
  controls: { hideNoControlsWarning: true },
};

export const Small = TemplateSmall.bind({});
Small.args = {
  size: 'small'
};
Small.argTypes = {
  size: {
    options: ['small', 'medium', 'large'],
    control: { type: 'select' }
  },
}

export const Medium = TemplateMedium.bind({});
Medium.args = {
  size: 'medium'
};
Medium.argTypes = {
  size: {
    options: ['small', 'medium', 'large'],
    control: { type: 'select' }
  },
};

export const Large = TemplateLarge.bind({});
Large.args = {
  size: 'large'
};
Large.argTypes = {
  size: {
    options: ['small', 'medium', 'large'],
    control: { type: 'select' }
  },
};