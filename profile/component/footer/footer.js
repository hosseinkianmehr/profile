import { Avatar, Box, Container, Divider, Grid, Stack, Typography } from '@mui/material'
import { display } from '@mui/system'
import React from 'react'
import NestedList from './list'
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

export default function Footer() {
    return (
        <Container>
            <Divider style={{ marginBlock: 30, marginTop: 30 }}/>
                
            
            <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Grid xs={6} sm={6} md={6} item><BeachAccessIcon fontSize={'large'} style={{ marginRight: 10 }} /></Grid>
                <Grid xs={6} sm={6} md={6} item>
                    <Typography variant='body1'>Hossein Kianmehr</Typography>
                    <Typography variant='body2'>2022 September</Typography>
                </Grid>
            </Box>

            <Grid container minHeight={350}>
                <Grid xs={12} sm={6} md={6} item style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBlock:30}}>
                    <NestedList />
                </Grid>
                <Grid xs={12} sm={6} md={6} item style={{display: 'flex', justifyContent: 'center', alignItems: 'center' , marginBlock:30}}>

                    <Stack direction="row" spacing={2} >
                        <Avatar alt="Remy Sharp" />
                        <Avatar alt="Travis Howard" />
                        <Avatar alt="Cindy Baker" />
                    </Stack>

                </Grid>
            </Grid>
        </Container>
    )
}
