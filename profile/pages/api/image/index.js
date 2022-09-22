export default function handler(req, res) {
    res.status(200).json(itemData)
  }
const itemData = {
    image:[
        {
            img: '/image/1.jpg',
            title: 'Breakfast',
            Horizontal: false,
            
        },
        {
            img: '/image/2.jpg',
            title: 'Burger',
            Horizontal: true,
        },
        {
            img: '/image/3.jpg',
            title: 'Camera',
            Horizontal: true,
        },
        {
            img: '/image/4.jpg',
            title: 'Coffee',
            Horizontal: false,
        },
        {
            img: '/image/5.jpg',
            title: 'Hats',
            Horizontal: true,
        },
        {
            img: '/image/6.jpg',
            title: 'Honey',
            author: '@arwinneil',
            Horizontal: false,
        },
        {
            img: '/image/7.jpg',
            title: 'Basketball',
            Horizontal: true,
        },
    ]
};