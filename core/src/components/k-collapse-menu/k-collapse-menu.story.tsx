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
      title: 'Complete collapse menu structure',
      description:
        ' Note, the knobs only affect the "default" state at the top.',
      children: [
        {
          tag: 'k-collapse-parent',
          innerText: '',
          children: [
            {
              tag: 'k-avatar',
              innerText: '',
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
          tag: 'k-collapse-list',
          innerText: '',
          children: [
            {
              tag: 'k-collapse-item',
              innerText: 'Option 1',
              children: []
            },
            {
              tag: 'k-collapse-item',
              innerText: 'Option 2',
              children: []
            },
            {
              tag: 'k-collapse-item',
              innerText: 'Option 3',
              children: []
            },
            {
              tag: 'k-collapse-item',
              innerText: 'Option 4',
              children: []
            },
            {
              tag: 'k-collapse-item',
              props: { disabled: true },
              innerText: 'Option 5',
              children: []
            }
          ]
        }
      ]
    }
  ]
};
