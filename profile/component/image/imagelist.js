import { Box, ImageList, ImageListItem, useMediaQuery, useTheme } from '@mui/material'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

export default function Imagelist({posts}) {
    const theme = useTheme()
    const isTinyScreen = useMediaQuery(theme.breakpoints.down('md'))
    const isTinyScreenSM = useMediaQuery(theme.breakpoints.down('sm'))

    const [col, setcol] = useState(3)
    useEffect(() => {
        if (isTinyScreenSM == false & isTinyScreen == true) { setcol(2) }
        else if (isTinyScreenSM == true & isTinyScreenSM == true) { setcol(1) }
        else if (isTinyScreenSM == false & isTinyScreenSM == false) { setcol(3) }
    }, [isTinyScreenSM,isTinyScreen])

    return (
        <div>
            <Box >
                <ImageList variant="masonry" cols={col} gap={10}>
                    {posts.image.map((item) => (
                        <ImageListItem key={item.img}>
                            <Image src={item.img} alt={item.title} width={item.Horizontal ? 1200 : 800} height={800} />
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

];