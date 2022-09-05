import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

export default function MyProjects() {
  return (
    <>
    {[1,2,3].map((item)=>(
      <div key={item}>
        <Typography variant="h4" gutterBottom>titel</Typography>
      <Container >
      <Typography variant="body1" gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
          neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
          quasi quidem quibusdam.
        </Typography>
        <Container>
        <Typography variant="body1" gutterBottom>heloo</Typography><Typography variant="body2" gutterBottom>heloo</Typography>
        </Container>
      </Container>
      </div>
    ))}
    
       
      

    </>
  )
}
