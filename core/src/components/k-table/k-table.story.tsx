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
      title: 'Complete stepper structure',
      description:
        ' Note, the knobs only affect the "default" state at the top.',
      children: [
        {
          tag: 'k-table-row',
          innerText: '',
          props: { type: 'navbar', style: 'min-height: 56px;' },
          children: [
            {
              tag: 'k-table-column',
              innerText: '',
              props: {
                size: '6',
                style: 'height: 100%;'
              },
              children: [
                {
                  tag: 'k-typography',
                  innerText: 'Displaying Course Status',
                  props: { variant: 'h4', style: 'color: black;' },
                  children: []
                }
              ]
            },
            {
              tag: 'k-table-column',
              innerText: '',
              props: {
                size: '1',
                style: 'height: 100%;'
              },
              children: [
                {
                  tag: 'k-dropdown',
                  innerText: '',
                  props: {
                    variant: 'table',
                    label: 'Row',
                    style: 'height: 100%;'
                  },
                  children: [
                    {
                      tag: 'k-dropdown-item',
                      innerText: '25',
                      props: { name: 'op1', value: '01' },
                      children: []
                    },
                    {
                      tag: 'k-dropdown-item',
                      innerText: '100',
                      props: { name: 'op2', value: '02' },
                      children: []
                    },
                    {
                      tag: 'k-dropdown-item',
                      innerText: '250',
                      props: { name: 'op3', value: '03' },
                      children: []
                    }
                  ]
                }
              ]
            },
            {
              tag: 'k-table-column',
              innerText: '',
              props: {
                size: '3',
                style: 'height: 100%;'
              },
              children: [
                {
                  tag: 'k-paginator',
                  innerText: '',
                  props: { 'current-page': '1', 'total-pages': '17' },
                  children: []
                }
              ]
            }
          ]
        },
        {
          tag: 'k-table-row',
          innerText: '',
          props: { type: 'header' },
          children: [
            {
              tag: 'k-table-header-column',
              innerText: 'Hello there',
              props: { size: '3', default: true },
              children: []
            },
            {
              tag: 'k-table-header-column',
              innerText: 'Hello there',
              props: { size: '1', sortable: false },
              children: []
            },
            {
              tag: 'k-table-header-column',
              innerText: 'Hello there',
              props: { size: '1' },
              children: []
            },
            {
              tag: 'k-table-header-column',
              innerText: 'Hello there',
              props: { size: '1' },
              children: []
            },
            {
              tag: 'k-table-header-column',
              innerText: 'Hello there',
              props: { size: '1' },
              children: []
            },
            {
              tag: 'k-table-header-column',
              innerText: 'Hello there',
              props: { size: '1', disabled: true },
              children: []
            },
            {
              tag: 'k-table-header-column',
              innerText: 'Hello there',
              props: { size: '1' },
              children: []
            },
            {
              tag: 'k-table-header-column',
              innerText: 'Hello there',
              props: { size: '1' },
              children: []
            },
            {
              tag: 'k-table-header-column',
              innerText: 'Hello there',
              props: { size: '1', disabled: true },
              children: []
            },
            {
              tag: 'k-table-header-column',
              innerText: 'Hello there',
              props: { size: '1' },
              children: []
            }
          ]
        },
        {
          tag: 'k-table-row',
          innerText: '',
          children: [
            {
              tag: 'k-table-column',
              innerText: 'General Kenobi.',
              props: { size: '3' },
              children: []
            },
            {
              tag: 'k-table-column',
              innerText: 'General Kenobi.',
              props: { size: '1' },
              children: []
            },
            {
              tag: 'k-table-column',
              innerText: 'General Kenobi.',
              props: { size: '1' },
              children: []
            },
            {
              tag: 'k-table-column',
              innerText: 'General Kenobi.',
              props: { size: '1' },
              children: []
            },
            {
              tag: 'k-table-column',
              innerText: 'General Kenobi.',
              props: { size: '1' },
              children: []
            },
            {
              tag: 'k-table-column',
              innerText: 'General Kenobi.',
              props: { size: '1' },
              children: []
            },
            {
              tag: 'k-table-column',
              innerText: 'General Kenobi.',
              props: { size: '1' },
              children: []
            },
            {
              tag: 'k-table-column',
              innerText: 'General Kenobi.',
              props: { size: '1' },
              children: []
            },
            {
              tag: 'k-table-column',
              innerText: 'General Kenobi.',
              props: { size: '1' },
              children: []
            },
            {
              tag: 'k-table-column',
              innerText: 'General Kenobi.',
              props: { size: '1' },
              children: []
            }
          ]
        },
        {
          tag: 'k-table-row',
          innerText: '',
          children: [
            {
              tag: 'k-table-column',
              innerText: 'You are a bold one!',
              props: { size: '3' },
              children: []
            },
            {
              tag: 'k-table-column',
              innerText: 'You are a bold one!',
              props: { size: '1' },
              children: []
            },
            {
              tag: 'k-table-column',
              innerText: 'You are a bold one!',
              props: { size: '1' },
              children: []
            },
            {
              tag: 'k-table-column',
              innerText: 'You are a bold one!',
              props: { size: '1' },
              children: []
            },
            {
              tag: 'k-table-column',
              innerText: 'You are a bold one!',
              props: { size: '1' },
              children: []
            },
            {
              tag: 'k-table-column',
              innerText: 'You are a bold one!',
              props: { size: '1' },
              children: []
            },
            {
              tag: 'k-table-column',
              innerText: 'You are a bold one!',
              props: { size: '1' },
              children: []
            },
            {
              tag: 'k-table-column',
              innerText: 'You are a bold one!',
              props: { size: '1' },
              children: []
            },
            {
              tag: 'k-table-column',
              innerText: 'You are a bold one!',
              props: { size: '1' },
              children: []
            },
            {
              tag: 'k-table-column',
              innerText: 'You are a bold one!',
              props: { size: '1' },
              children: []
            }
          ]
        }
      ]
    }
  ]
};
