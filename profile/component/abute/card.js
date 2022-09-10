import { Box, Card, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export default function CardEvidence() {
  return (
    <>
    <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

<Grid container direction={'row-reverse'} style={{maxWidth:600}}>
  <Grid xs={12} sm={2} md={2} item style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Image src={'/vercel.svg'} width={100} height={100} />
  </Grid>
  <Grid xs={12} sm={10} md={10} item >
    <Box style={{ marginLeft:50 }}>
    <Typography variant='h5'>django</Typography>
    <Typography variant='h6'>maktankhone</Typography>
    <Typography variant='body1'>django2 and api in django for azmon</Typography>
    <Typography variant='body2'>heloo</Typography>
    </Box>
  </Grid>

</Grid>
</Box>

    </>
    
  )
}
