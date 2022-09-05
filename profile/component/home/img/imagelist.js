import { Box, Container, Grid, ImageListItemBar, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'

import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';


export default function Boxpage() {
  const Boxitem = (arrayItem, index) => {
    console.log(index)

    return (
      <Grid item xs={12} sm={6} md={4} key={index}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        borderRadius={5}

        sx={{
          maxwidth: 300,

          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >

        =
        <Image src={'/./2.jpg'} alt={'./2.jpg'} width={300} height={300} style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 4
        }}>
          <ImageListItemBar
            title={'hello'}
            subtitle={'item.author'}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${'item.title'}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        
      </Image>
          
       
      </Grid >
    )
}
return (


  <Grid
    container
    spacing={4}
  >
    {titel.map((arrayItem, index) =>
      Boxitem(arrayItem, index)
    )}
  </Grid>


)
}



const titel = [{
  img: './2.JPG',
  title: 'Sea star',
  author: '@peterlaster',
},
{
  img: './2.JPG',
  title: 'Sea star',
  author: '@peterlaster',
},
{
  img: './2.JPG',
  title: 'Sea star',
  author: '@peterlaster',
},
{
  img: './2.JPG',
  title: 'Sea star',
  author: '@peterlaster',
},
{
  img: './2.JPG',
  title: 'Sea star',
  author: '@peterlaster',
},
{
  img: './2.JPG',
  title: 'Sea star',
  author: '@peterlaster',
},]
