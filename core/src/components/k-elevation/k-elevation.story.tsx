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
      title: 'Elevation example',
      description:
        ' Note, the knobs only affect the "default" state at the top.',
      props: { radius: '50%' },
      children: [
        {
          tag: 'div',
          innerText: 'Elevation',
          props: {
            style:
              'height: 200px; width: 200px; display: flex; justify-content: center; align-items: center;'
          },
          children: []
        }
      ]
    }
  ]
};
