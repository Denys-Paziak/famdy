'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from "next/image";
import {Button} from "@mui/base";
const HomeSlider = () => {
    return (
        <div className={"homeSlider"}>
            <Swiper
                className={"h-full"}
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div className="container mx-auto homeSlider-item">
                        <h1 className={"text-8xl uppercase font-bold"}>Discounts on <br/> clothes</h1>
                        <a href="#" >
                            <button className={"button"}>Магазин</button>
                        </a>
                    </div>
                    <Image
                        src="/img/homeSlider/1.jpg"
                        width={2000}
                        height={2000}
                        alt="Picture of the author"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container mx-auto homeSlider-item">
                        <h1 className={"text-8xl uppercase font-bold"}>Discounts on <br/> clothes</h1>
                        <a href="#" >
                            <button className={"button"}>Магазин</button>
                        </a>
                    </div>
                    <Image
                        src="/img/homeSlider/2.jpg"
                        width={2000}
                        height={2000}
                        alt="Picture of the author"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container mx-auto homeSlider-item">
                        <h1 className={"text-8xl uppercase font-bold"}>Знижки на  <br/> одяг</h1>
                        <a href="#" >
                            <button className={"button"}>Магазин</button>
                        </a>
                    </div>
                    <Image
                        src="/img/homeSlider/3.jpg"
                        width={2000}
                        height={2000}
                        alt="Picture of the author"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default HomeSlider;
