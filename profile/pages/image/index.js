import { Chip, Stack, Typography } from '@mui/material'
import axios from 'axios'
import Image from 'next/image'
import React from 'react'
import Imagelist from '../../component/image/imagelist'

export default function Imagepage({posts}) {
  console.log(posts)
  return (
    <>
    <Typography align={'center'} variant='h3' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBlock:90 , marginTop:200}}>Photography is an austere and blazing poetry of the real.</Typography>
    <Stack direction="row" spacing={1} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBlock:30}}>
      <Chip label="Clickable Link" component="a" href="#basic-chip" variant="outlined" clickable/>
      <Chip label="Clickable Link" component="a" href="#basic-chip" variant="outlined" clickable/>
      <Chip label="Clickable Link" component="a" href="#basic-chip" variant="outlined" clickable/>
      <Chip label="Clickable Link" component="a" href="#basic-chip" variant="outlined" clickable/>
      <Chip label="Clickable Link" component="a" href="#basic-chip" variant="outlined" clickable/>
    </Stack>
    <Imagelist posts={posts}/>
    </>
  )
}

export async function getStaticProps() {
  const response = await axios.get(`http://localhost:3000/api/image`);
  
  return {
    props: {
      posts: response.data,
    },
  };
}