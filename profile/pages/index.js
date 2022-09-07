import { AppBar, Box, Chip, Divider, Typography } from '@mui/material'
import TitlebarImageList from '../component/home/imagelist'
import Boxpage from '../component/home/img/imagelist'
import MyProjects from '../component/home/myProjects'
import Welcomeslide from '../component/home/welcomeslide'


export default function Home() {
  return (
    < >
      <Welcomeslide />
      <Divider style={{ marginBlock: 30 , marginTop: 30 }}>
        <Chip label={
          <Typography variant='h5'>Photo</Typography>
        } />
      </Divider>
      <TitlebarImageList />
      <Divider style={{ marginBlock: 30 , marginTop: 30 }}>
        <Chip label={
          <Typography variant='h5'>work</Typography>
        } />
      </Divider>
      <MyProjects />

    </>
  )
}
