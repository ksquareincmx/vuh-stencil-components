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
      title: 'Card example',
      description:
        ' Note, the knobs only affect the "default" state at the top.',
      props: { style: 'width: 40%;' },
      children: [
        {
          tag: 'k-img',
          innerText: '',
          props: {
            src:
              'https://cdn.pixabay.com/photo/2017/08/10/08/47/code-2620118_1280.jpg'
          },
          children: []
        },
        {
          tag: 'div',
          innerText: '',
          props: { style: 'padding: 16px;' },
          children: [
            {
              tag: 'h1',
              innerText: 'Card Title',
              children: []
            }
          ]
        }
      ]
    }
  ]
};
