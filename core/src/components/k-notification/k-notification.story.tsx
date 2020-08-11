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
      title: 'Complete notification structure',
      description:
        ' Note, the knobs only affect the "default" state at the top.',
      props: { 'notification-count': '2' },
      children: [
        {
          tag: 'k-notification-group',
          innerText: '',
          children: [
            {
              tag: 'k-notification-item',
              innerText: '',
              props: {
                'alert-color': 'orange',
                label: 'Course',
                time: '30m ago',
                'is-read': 'false'
              },
              children: [
                {
                  tag: 'p',
                  innerText:
                    'You are been assigned to the course <strong>“The best Course of the world”</strong>',
                  children: []
                }
              ]
            },
            {
              tag: 'k-notification-item',
              innerText: '',
              props: {
                'alert-color': 'purple',
                label: 'Course',
                time: '30m ago',
                'is-read': 'true'
              },
              children: [
                {
                  tag: 'p',
                  innerText:
                    'You are been assigned to the course <strong>“The best Course of the world”</strong>',
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
