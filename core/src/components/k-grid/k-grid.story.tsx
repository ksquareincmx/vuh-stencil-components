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
      title: 'Complete grid structure',
      description:
        ' Note, the knobs only affect the "default" state at the top.',
      children: [
        {
          tag: 'k-row',
          innerText: '',
          children: [
            {
              tag: 'k-column',
              innerText: '',
              props: { size: '2' },
              children: [
                {
                  tag: 'p',
                  innerText: 'Column (size 2)',
                  props: { style: 'background-color: #42d4e3; margin: 0;' },
                  children: []
                }
              ]
            },
            {
              tag: 'k-column',
              innerText: '',
              props: { sizesm: '3' },
              children: [
                {
                  tag: 'p',
                  innerText: 'Column (sizeSm 3)',
                  props: { style: 'background-color: #42d4e3; margin: 0;' },
                  children: []
                }
              ]
            },
            {
              tag: 'k-column',
              innerText: '',
              props: { sizemd: '5', sizelg: 7 },
              children: [
                {
                  tag: 'p',
                  innerText: 'Column (sizeMd 5, sizeLg 7)',
                  props: { style: 'background-color: #42d4e3; margin: 0;' },
                  children: []
                }
              ]
            },
            {
              tag: 'k-column',
              innerText: '',
              props: { sizemd: '6' },
              children: [
                {
                  tag: 'p',
                  innerText: 'Column (sizeMd 6)',
                  props: { style: 'background-color: #42d4e3; margin: 0;' },
                  children: []
                }
              ]
            }
          ]
        },
        {
          tag: 'k-row',
          innerText: '',
          props: { spacing: 'sm' },
          children: [
            {
              tag: 'k-column',
              innerText: '',
              props: { size: '1' },
              children: [
                {
                  tag: 'p',
                  innerText: 'Column (size 1)',
                  props: { style: 'background-color: #42d4e3; margin: 0;' },
                  children: []
                }
              ]
            },
            {
              tag: 'k-column',
              innerText: '',
              props: { size: '1' },
              children: [
                {
                  tag: 'p',
                  innerText: 'Column (size 1)',
                  props: { style: 'background-color: #42d4e3; margin: 0;' },
                  children: []
                }
              ]
            },
            {
              tag: 'k-column',
              innerText: '',
              props: { size: '1' },
              children: [
                {
                  tag: 'p',
                  innerText: 'Column (size 1)',
                  props: { style: 'background-color: #42d4e3; margin: 0;' },
                  children: []
                }
              ]
            },
            {
              tag: 'k-column',
              innerText: '',
              props: { size: '1' },
              children: [
                {
                  tag: 'p',
                  innerText: 'Column (size 1)',
                  props: { style: 'background-color: #42d4e3; margin: 0;' },
                  children: []
                }
              ]
            },
            {
              tag: 'k-column',
              innerText: '',
              props: { size: '1' },
              children: [
                {
                  tag: 'p',
                  innerText: 'Column (size 1)',
                  props: { style: 'background-color: #42d4e3; margin: 0;' },
                  children: []
                }
              ]
            },
            {
              tag: 'k-column',
              innerText: '',
              props: { size: '1' },
              children: [
                {
                  tag: 'p',
                  innerText: 'Column (size 1)',
                  props: { style: 'background-color: #42d4e3; margin: 0;' },
                  children: []
                }
              ]
            },
            {
              tag: 'k-column',
              innerText: '',
              props: { size: '1' },
              children: [
                {
                  tag: 'p',
                  innerText: 'Column (size 1)',
                  props: { style: 'background-color: #42d4e3; margin: 0;' },
                  children: []
                }
              ]
            },
            {
              tag: 'k-column',
              innerText: '',
              props: { size: '1' },
              children: [
                {
                  tag: 'p',
                  innerText: 'Column (size 1)',
                  props: { style: 'background-color: #42d4e3; margin: 0;' },
                  children: []
                }
              ]
            },
            {
              tag: 'k-column',
              innerText: '',
              props: { size: '1' },
              children: [
                {
                  tag: 'p',
                  innerText: 'Column (size 1)',
                  props: { style: 'background-color: #42d4e3; margin: 0;' },
                  children: []
                }
              ]
            },
            {
              tag: 'k-column',
              innerText: '',
              props: { size: '1' },
              children: [
                {
                  tag: 'p',
                  innerText: 'Column (size 1)',
                  props: { style: 'background-color: #42d4e3; margin: 0;' },
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
