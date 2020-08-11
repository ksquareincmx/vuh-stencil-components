import readme from './readme.md';

export default {
  /**
   * Notes is an optional string which will be displayed in the "Notes"
   * tab for your component. It is recommended to use the generated readme,
   * however any string should suffice. This supports markdown.
   */
  notes: readme,

  /**
   * The states array is a list of additional states to display your
   * component. This is kind of a lightweight version of the "chapters".
   * Each state can have a title, description, props and children.
   * A children must have a tag, innerText (it may be an empty string '')
   */
  states: [
    {
      title: 'Complete menu structure',
      description:
        ' Note, the knobs only affect the "default" state at the top.',
      props: { 'menu-key': 'k-menu' },
      children: [
        {
          tag: 'k-menu-content',
          innerText: '',
          children: [
            {
              tag: 'figure',
              innerText: '',
              children: [
                {
                  tag: 'k.img',
                  innerText: '',
                  props: {
                    src:
                      'https://www.ksquareinc.com/wp-content/uploads/2019/10/Logo.png',
                    height: '32'
                  },
                  children: []
                }
              ]
            },
            {
              tag: 'div',
              innerText: '',
              props: { style: 'display: flex; align-items: center;' },
              children: [
                {
                  tag: 'k-notification',
                  innerText: '',
                  props: { 'notification-count': '6' },
                  children: [
                    {
                      tag: 'k-notification-group',
                      innerText: '',
                      props: { 'notification-count': '6' },
                      children: []
                    }
                  ]
                }
              ]
            },
            {
              tag: 'k-avatar',
              innerText: '',
              props: { style: 'margin: 16px;' },
              children: [
                {
                  tag: 'k-img',
                  innerText: '',
                  props: {
                    alt: 'Abraham Berzunza',
                    src:
                      'https://assets.gitlab-static.net/uploads/-/system/user/avatar/4533028/avatar.png?width=23'
                  },
                  children: []
                }
              ]
            }
          ]
        },
        {
          tag: 'k-menu-nav',
          innerText: '',
          children: [
            {
              tag: 'k-tab',
              innerText: '',
              children: [
                {
                  tag: 'k-tab-item',
                  innerText: 'Tab 1',
                  props: { current: true },
                  children: []
                },
                {
                  tag: 'k-tab-item',
                  innerText: 'Tab 2',
                  props: { current: false },
                  children: []
                },
                {
                  tag: 'k-tab-item',
                  innerText: 'Tab 3',
                  props: { current: false },
                  children: []
                },
                {
                  tag: 'k-tab-item',
                  innerText: 'Tab 4',
                  props: { current: false },
                  children: []
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
