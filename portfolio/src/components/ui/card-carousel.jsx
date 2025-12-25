import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules"

export const CardCarousel = ({
  images,
  divisionName, 
  autoplayDelay = 1500,
  showNavigation = true,
}) => {
  const css = `
  .swiper {
    width: 100%;
    padding-bottom: 50px;
  }
  
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    /* height: 300px; */
    /* margin: 20px; */
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
  }
  
  
  .swiper-3d .swiper-slide-shadow-left {
    background-image: none;
  }
  .swiper-3d .swiper-slide-shadow-right{
    background: none;
  }
  `
  return (
    <section className="w-full">
      <style>{css}</style>
      <div
        className="mx-auto w-full max-w-4xl rounded-[24px] border border-black/5 p-2 shadow-sm md:rounded-t-[44px]">
        {/* Add the division name heading */}
        {divisionName && (
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-amber-100 mb-2">
              {divisionName}
            </h1>
          </div>
        )}
        
        <div className="flex w-full items-center justify-center gap-4">
          <div className="w-full">
            <Swiper
              spaceBetween={50}
              autoplay={{
                delay: autoplayDelay,
                disableOnInteraction: false,
              }}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              
              navigation={
                showNavigation
                  ? {
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                    }
                  : undefined
              }
              modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}>
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="size-full rounded-3xl h-20 w-20">
                    <img
                      src={image.src}
                      className="size-full rounded-xl "
                      alt={image.alt} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
