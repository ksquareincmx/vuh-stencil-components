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
      title: 'Image example',
      description:
        ' Note, the knobs only affect the "default" state at the top.',
      props: {
        src:
          'https://media-exp1.licdn.com/dms/image/C4E1BAQGOhOLNnmDazw/company-background_10000/0?e=2159024400&v=beta&t=FLPdAgxuIRlNgMSoohrTA6Meg5SzkPIuNV_qauRDP0Q',
        alt: 'the-ksquare-group',
        height: '300',
        fit: 'cover'
      },
      children: []
    }
  ]
};
