const INITIAL_STATE = {
  sections: [
    {
      title: 'Sanduíches',
      imageUrl: 'https://i.imgur.com/CrfREjx.jpg',
      id: 1,
      linkUrl: 'shop/sanduiches'
    },
    {
      title: 'Sucos',
      imageUrl: 'https://i.imgur.com/mkpphZt.jpeg',
      id: 2,
      linkUrl: 'shop/sucos'
    },
    {
      title: 'Saladas',
      imageUrl: 'https://i.imgur.com/CrfREjx.jpeg',
      id: 3,
      linkUrl: 'shop/saladas'
    },
    // {
    //   title: 'womens',
    //   imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    //   size: 'large',
    //   id: 4,
    //   linkUrl: 'shop/womens'
    // },
    // {
    //   title: 'mens',
    //   imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    //   size: 'large',
    //   id: 5,
    //   linkUrl: 'shop/mens'
    // }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default directoryReducer;