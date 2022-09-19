import { AppBar, Box, Chip, Divider, Typography } from '@mui/material'
import TitlebarImageList from '../component/home/imagelist'
import Boxpage from '../component/home/img/imagelist'
import MyProjects from '../component/home/myProjects'
import Welcomeslide from '../component/home/welcomeslide'

import axios from "axios";


export default function Home({posts}) {
  console.log(posts)
  return (
    < >
      <Welcomeslide />
      <Divider style={{ marginBlock: 30 , marginTop: 30 }}>
        <Chip label={
          <Typography variant='h5'>Photo</Typography>
        } />
      </Divider>
      <TitlebarImageList photo={posts.image}/>
      <Divider style={{ marginBlock: 30 , marginTop: 30 }}>
        <Chip label={
          <Typography variant='h5'>work</Typography>
        } />
      </Divider>
      <MyProjects post={posts.projects}/>

    </>
  )
}



export async function getStaticProps() {
  const response = await axios.get(`http://localhost:3000/api/home/photo`);
  
  return {
    props: {
      posts: response.data,
    },
  };
}
