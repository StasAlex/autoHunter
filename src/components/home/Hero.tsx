"use client";
import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay} from 'swiper/modules';
import { Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/virtual';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import { Image as DatoImage } from "react-datocms";
import classes from "@/styles/hero.module.scss";

interface Slide {
    title: String,
    description: String,
    image: {
        responsiveImage: Object
    }
}

const Hero = (props: { slides: any }) => {
    let { slides } = props

    return (
     <Swiper className={classes.swiper}
             modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Virtual, Autoplay]}
             slidesPerView={1}
             effect="fade"
             // autoplay={{
             //     "delay": 2500,
             //     "disableOnInteraction": false
             // }}
             onSlideChange={() => console.log('slide change')}
             pagination={{ clickable: true }}
     >
         {slides.map((slide, index) => (
             <SwiperSlide key={index} className={classes.slide}>
                 <div className={`${classes.opacity} relative`}></div>
                 <DatoImage data={slide.image.responsiveImage}/>
                 <span className={`${classes.slide_info} container mx-auto px-[15px] relative`}>
                     <h1 className={classes.slide_title}>{slide.title}</h1>
                     <div className={classes.slide_description}>{slide.description}</div>
                 </span>
             </SwiperSlide>
         ))}
     </Swiper>
  );
}

export default Hero;
