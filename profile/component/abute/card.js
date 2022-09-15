import { Box, Card, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export default function CardEvidence({ post }) {
  return (
    <>{post.map((item, index) => {
        return(
          <Box key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Grid container direction={'row-reverse'} style={{ maxWidth: 600 }}>
          <Grid xs={12} sm={2} md={2} item style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Image src={item.img} width={300} height={300} />
          </Grid>
          <Grid xs={12} sm={10} md={10} item >
            <Box >
              <Typography variant='h5'>{item.Certificate}</Typography>
              <Typography variant='h6'>{item.provider}</Typography>
              <Typography variant='body1'>{item.Description}</Typography>
              <Typography variant='body2'>{item.date}</Typography>
            </Box>
          </Grid>

        </Grid>
      </Box>
        )
    })}


    </>

  )
}
