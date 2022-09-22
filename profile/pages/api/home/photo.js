export default function handler(req, res) {
    res.status(200).json(itemData)
  }


  const itemData ={
    image:[
      {
        img: '/image/1.jpg',
        title: 'Breakfast',
        author: '@bkristastucchio',
        rows: 2,
        cols: 2,
        featured: true,
      },
      {
        img: '/image/1.jpg',
        title: 'Burger',
        author: '@rollelflex_graphy726',
      },
      {
        img: '/image/1.jpg',
        title: 'Camera',
        author: '@helloimnik',
      },
      {
        img: '/image/1.jpg',
        title: 'Coffee',
        author: '@nolanissac',
        cols: 2,
      },
      {
        img: '/image/1.jpg',
        title: 'Hats',
        author: '@hjrc33',
        cols: 2,
      },
      {
        img: '/image/1.jpg',
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
        featured: true,
      },
      
    ],
    projects: [
      {
          title: 'Breakfast',
          Description: 'A blog (a truncation of "weblog")[1] is a discussion or informational website published on the World Wide Web consisting of discrete, often informal diary-style text entries (posts). Posts are typically displayed in reverse chronological order, so that the most recent post appears first, at the top of the web page. Until ',
          tag: [
              {
                  id: 1,
                  tag: 'django'
              },
              {
                  id: 1,
                  tag: 'django'
              },{
                  id: 1,
                  tag: 'django'
              }
          ],
          date: '3/5/6',
          link: 'link'
      },
      {
          title: 'Breakfast',
          Description: 'A blog (a truncation of "weblog")[1] is a discussion or informational website published on the World Wide Web consisting of discrete, often informal diary-style text entries (posts). Posts are typically displayed in reverse chronological order, so that the most recent post appears first, at the top of the web page. Until ',
          tag: [
              {
                  id: 1,
                  tag: 'django'
              },
              {
                  id: 1,
                  tag: 'django'
              },{
                  id: 1,
                  tag: 'django'
              }
          ],
          date: '3/5/6',
          link: 'link'
      },

  ]
  } 
  