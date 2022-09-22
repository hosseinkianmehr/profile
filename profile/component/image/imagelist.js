import { Box, ImageList, ImageListItem, useMediaQuery, useTheme } from '@mui/material'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

export default function Imagelist() {
    const theme = useTheme()
    const isTinyScreen = useMediaQuery(theme.breakpoints.down('md'))
    const isTinyScreenSM = useMediaQuery(theme.breakpoints.down('sm'))
    console.log(isTinyScreen,'isTinyScreen')
    console.log(isTinyScreenSM,'isTinyScreenSM')

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
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <Image src={item.img} alt={item.title} width={item.cols == 2 ? 1200 : 800} height={800} />
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