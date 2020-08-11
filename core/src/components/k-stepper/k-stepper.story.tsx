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
          tag: 'k-stepper-header',
          innerText: '',
          children: [
            {
              tag: 'k-stepper-header-item',
              innerText: 'Step 1',
              props: {
                done: true
              },
              children: []
            },
            {
              tag: 'k-stepper-header-item',
              innerText: 'Step 2',
              props: {
                started: true
              },
              children: []
            },
            {
              tag: 'k-stepper-header-item',
              innerText: 'Step 3',
              children: []
            }
          ]
        },
        {
          tag: 'k-stepper-content',
          innerText: '',
          children: [
            {
              tag: 'k-stepper-content-item',
              innerText: 'Content Step 1',
              children: []
            },
            {
              tag: 'k-stepper-content-item',
              innerText: 'Content Step 2',
              children: []
            },
            {
              tag: 'k-stepper-content-item',
              innerText: 'Content Step 3',
              children: []
            }
          ]
        }
      ]
    }
  ]
};
