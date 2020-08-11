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
      title: 'Complete dropdown structure',
      description:
        ' Note, the knobs only affect the "default" state at the top.',
      children: [
        {
          tag: 'k-dropdown-item',
          innerText: 'Select your option',
          props: { name: 'op0', value: '00' },
          children: []
        },
        {
          tag: 'k-dropdown-item',
          innerText: 'Option 1',
          props: { name: 'op1', value: '01' },
          children: []
        },
        {
          tag: 'k-dropdown-item',
          innerText: 'Option 2',
          props: { name: 'op2', value: '02' },
          children: []
        },
        {
          tag: 'k-dropdown-item',
          innerText: 'Option 3',
          props: { name: 'op3', value: '03' },
          children: []
        }
      ]
    }
  ]
};
