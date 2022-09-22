import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

//import './style.module.css'
// import required modules
import { EffectCreative } from "swiper";
import { Autoplay } from "swiper";
import { Grid, Typography } from "@mui/material";

import Image from 'next/image'


export default function Welcomeslide() {

  return (
    <>


      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        grabCursor={false}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -800],
            rotate: [180, 0, 0],
          },
          next: {
            shadow: true,
            translate: [0, 0, -800],
            rotate: [-180, 0, 0],
          },
        }}
        modules={[EffectCreative, Autoplay]}
        className="mySwiper4"
      >
        <SwiperSlide style={{ width: '90vw' }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ marginTop: '4vh' }}>
            <Grid xs={12} sm={6} md={6} item style={{ textAlign: 'center', direction: 'ltr' }} >
              <Image src="/svg/undraw_online_stats_0g94.svg" height={500} width={500} />
            </Grid>
            <Grid xs={12} sm={6} md={6} item style={{ backgroundColor: 'yeloo', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="h2">Welcome to my site</Typography>
            </Grid>
          </Grid>
        </SwiperSlide>

        <SwiperSlide style={{ width: '90vw' }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ marginTop: '4vh' }}>
            <Grid xs={12} sm={6} md={6} item style={{ backgroundColor: 'yeloo', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="h2">Follow my photos</Typography>
            </Grid>
            <Grid xs={12} sm={6} md={6} item style={{ textAlign: 'center', direction: 'ltr' }} >
              <Image src="/svg/undraw_moments_0y20.svg" height={500} width={500} />
            </Grid>
          </Grid>
        </SwiperSlide>

        <SwiperSlide style={{ width: '90vw' }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ marginTop: '4vh' }}>
            <Grid xs={12} sm={6} md={6} item style={{ textAlign: 'center', direction: 'ltr' }} >
              <Image src="/svg/undraw_programming_re_kg9v.svg" height={500} width={500} />
            </Grid>
            <Grid xs={12} sm={6} md={6} item style={{ backgroundColor: 'yeloo', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="h2">about me</Typography>
            </Grid>
          </Grid>
        </SwiperSlide>
      </Swiper>


    </>
  );
}
