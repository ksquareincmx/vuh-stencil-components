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
      title: 'Complete carousel structure',
      description:
        ' Note, the knobs only affect the "default" state at the top.',
      props: { style: 'height: 300px;' },
      children: [
        {
          tag: 'k-carousel-item',
          innerText: '',
          children: [
            {
              tag: 'k-img',
              innerText: 'Dialog Header',
              props: {
                style: 'width: 100%;',
                src:
                  'https://cdn.pixabay.com/photo/2019/11/03/01/56/landscape-4597742_1280.jpg'
              },
              children: []
            }
          ]
        },
        {
          tag: 'k-carousel-item',
          innerText: '',
          children: [
            {
              tag: 'k-img',
              innerText: 'Dialog Header',
              props: {
                src:
                  'https://cdn.pixabay.com/photo/2020/07/09/10/31/sea-5386810_1280.jpg'
              },
              children: []
            }
          ]
        },
        {
          tag: 'k-carousel-item',
          innerText: '',
          children: [
            {
              tag: 'k-img',
              innerText: 'Dialog Header',
              props: {
                style: 'width: 100%;',
                src:
                  'https://cdn.pixabay.com/photo/2019/11/03/01/56/landscape-4597742_1280.jpg'
              },
              children: []
            }
          ]
        },
        {
          tag: 'k-carousel-item',
          innerText: '',
          children: [
            {
              tag: 'k-img',
              innerText: 'Dialog Header',
              props: {
                src:
                  'https://cdn.pixabay.com/photo/2020/07/09/10/31/sea-5386810_1280.jpg'
              },
              children: []
            }
          ]
        }
      ]
    }
  ]
};
