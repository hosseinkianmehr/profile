import { Box, ImageList, ImageListItem } from '@mui/material'
import Image from 'next/image';
import React from 'react'

export default function Imagelist() {
    return (
        <div>
            <Box >
                <ImageList variant="masonry" cols={3} gap={8}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <Image src={item.img} alt={item.title} width={item.cols == 2 ? 800:400} height={400} />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </div>
    )
}
const itemData = [
    {
        img: '/image/1.jpg',
        title: 'Breakfast',
        rows: 2,
        cols: 2,
    },
    {
        img: '/image/2.jpg',
        title: 'Burger',
    },
    {
        img: '/image/3.jpg',
        title: 'Camera',
    },
    {
        img: '/image/4.jpg',
        title: 'Coffee',
        cols: 2,
    },
    {
        img: '/image/5.jpg',
        title: 'Hats',
        cols: 2,
    },
    {
        img: '/image/6.jpg',
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
    },
    {
        img: '/image/7.jpg',
        title: 'Basketball',
    },

];