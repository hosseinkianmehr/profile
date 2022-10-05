import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export default function site() {
    const theme = useTheme()
    const isTinyScreen = useMediaQuery(theme.breakpoints.up('sm'))
    console.log(isTinyScreen)



    return (
        <>
            <Grid container>
                {/* 1 */}
                <Grid xs={12} sm={6} md={6} item>
                    <Image src={'/svg/abute/undraw_feeling_proud_qne1.svg'} width={400} height={400} alt="svg"/>
                </Grid>
                <Grid xs={12} sm={6} md={6} item style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box style={{ maxWidth: 300 }}>
                        <Typography variant='h5'></Typography>
                        <Typography variant='body1'>NASA.gov brings you the latest news, images and videos from Americas space agency, pioneering the future in space exploration, scientific discovery and </Typography>
                    </Box>
                </Grid>
                {/* 2 */}
                {

                    isTinyScreen ?
                        <>
                            <Grid xs={12} sm={6} md={6} item style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Box style={{ maxWidth: 300 }}>
                                    <Typography variant='h5'>helllooooooo</Typography>
                                    <Typography variant='body1'>NASA.gov brings you the latest news, images and videos from Americas space agency, pioneering the future in space exploration, scientific discovery and </Typography>
                                </Box>
                            </Grid>
                            <Grid xs={12} sm={6} md={6} item>
                                <Image src={'/svg/abute/undraw_static_assets_rpm6.svg'} width={400} height={400} alt="svg" />
                            </Grid>
                        </>
                        :
                        <>
                            <Grid xs={12} sm={6} md={6} item>
                                <Image src={'/svg/abute/undraw_static_assets_rpm6.svg'} width={400} height={400} alt="svg"/>
                            </Grid>
                            <Grid xs={12} sm={6} md={6} item style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Box style={{ maxWidth: 300 }}>
                                    <Typography variant='h5'>fuck</Typography>
                                    <Typography variant='body1'>NASA.gov brings you the latest news, images and videos from Americas space agency, pioneering the future in space exploration, scientific discovery and </Typography>
                                </Box>
                            </Grid>
                        </>


                }
                {/* 3 */}
                <Grid xs={12} sm={6} md={6} item>
                    <Image src={'/svg/abute/undraw_visionary_technology_re_jfp7.svg'} width={400} height={400} alt="svg" />
                </Grid>
                <Grid xs={12} sm={6} md={6} item style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box style={{ maxWidth: 300 }}>
                        <Typography variant='h5'>technology</Typography>
                        <Typography variant='body1'>NASA.gov brings you the latest news, images and videos from America s space agency, pioneering the future in space exploration, scientific discovery and </Typography>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}
