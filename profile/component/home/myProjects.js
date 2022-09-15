import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

export default function MyProjects({ post }) {
  return (
    <>
      {post.map((item, index) => (
        <div key={index}>
          <Typography variant="h4" gutterBottom>{item.title}</Typography>
          <Container >
            <Typography variant="body1" gutterBottom>
              {item.Description}
            </Typography>
            <Container>
              <Stack direction="row" spacing={1}>
                <Chip label="Chip Filled" />
              {item.tag.map((tags, index) => {
                return (
                  <Chip label={tags.tag} key={index} />
                  )
                }
                )}
                </Stack>
              <Typography variant="body2" gutterBottom>{item.date}</Typography>
              <a>{item.link}</a>
            </Container>
          </Container>
        </div>
      ))}
    </>
  )
}
