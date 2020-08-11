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
      title: 'Complete dialog structure',
      description:
        ' Note, the knobs only affect the "default" state at the top.',
      children: [
        {
          tag: 'k-dialog-content',
          innerText: '',
          children: [
            {
              tag: 'k-dialog-header',
              innerText: 'Dialog Header',
              children: []
            },
            {
              tag: 'k-dialog-body',
              innerText:
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
              children: []
            }
          ]
        },
        {
          tag: 'k-dialog-actions',
          innerText: '',
          children: [
            {
              tag: 'k-button',
              innerText: 'Cancel',
              props: { color: 'terciary' },
              children: []
            },
            {
              tag: 'k-button',
              innerText: 'Discard',
              props: { color: 'terciary' },
              children: []
            }
          ]
        }
      ]
    }
  ]
};

// // This is another way of creating a story
// export default (stories) => {
//   stories.add(
//     'KDialog',
//     () => `
//         <div style="margin: 2em"><k-dialog>
//             <k-dialog-content>
//                 <k-dialog-header>Dialog Header</k-dialog-header>
//                 <k-dialog-body style="width: 300px">
//                     Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
//                 </k-dialog-body>
//             </k-dialog-content>
//             <k-dialog-actions>
//                 <k-button style="margin-right: 16px;" color="terciary">Cancel</k-button>
//                 <k-button color="terciary">Discard</k-button>
//             </k-dialog-actions>
//         </k-dialog>
//         </div>
//       `,
//     { notes }
//   );
// };
