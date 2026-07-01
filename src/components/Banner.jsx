import React from "react";
import Container from "./Container";

import bannerright from "../assets/images/bannerright.png";
import bannerlefttop from "../assets/images/bannerlefttop.png";
import bannerleftbotom from "../assets/images/bannerleftbotom.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = () => {
  return (
    <Container>
      <div className="flex py-6 gap-x-6">

      
        <div className="w-218">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: true }}
            className="h-full"
          >
            <SwiperSlide>
              <img
                src={bannerright}
                className="w-full"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src={bannerright}
                className="w-full"
              />
            </SwiperSlide>
          </Swiper>
        </div>


        <div className="w-105.75 flex flex-col gap-6">

          
          <div className="relative">
            <Swiper
              modules={[Navigation]}
              navigation={true}
              loop={true}
              className="h-full"
            >
              <SwiperSlide>
                <img
                  src={bannerlefttop}
                  className="w-full "
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  src={bannerlefttop}
                  className="w-full"
                />
              </SwiperSlide>
            </Swiper>
          </div>

         
          <div className="relative">
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              loop={true}
              className="h-full"
            >
              <SwiperSlide>
                <img
                  src={bannerleftbotom}
                  className="w-full"
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  src={bannerleftbotom}
                  className="w-full"
                />
              </SwiperSlide>
            </Swiper>
          </div>

        </div>
      </div>
    </Container>
  );
};

export default Banner;