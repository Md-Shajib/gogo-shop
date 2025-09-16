"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import { BannerData } from "@/data/BannerData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "antd";

export default function BannerCarousel() {
  return (
    <div className="container w-full !py-5">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        modules={[Pagination, Navigation, Autoplay]}
        navigation={{
          nextEl: `.custom-swiper-next-carosol`,
          prevEl: `.custom-swiper-prev-carosol`,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          el: `.custom-swiper-pagination-carosol`,
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} !bg-[#fa0a06] !rounded-full !mx-1 !inline-block transition-all duration-300 ease-in-out"></span>`;
          },
        }}
        breakpoints={{
          640: { slidesPerView: 1 }, // mobile
          // 768: { slidesPerView: 2 }, // tablet
          // 1024: { slidesPerView: 3 }, // small laptop
          // 1280: { slidesPerView: 4 }, // large screen
        }}
      >
        {BannerData?.map((banner, idx) => (
          <SwiperSlide key={idx} className="w-full">
            <div className="relative w-full aspect-[16/8] md:aspect-[16/6] lg:aspect-[16/5]">
              <Image
                src={banner.img}
                alt={`Banner ${idx}`}
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </SwiperSlide>
        ))}

        <div className="!hidden md:!flex">
          <Button
            size="large"
            className={`custom-swiper-prev-carosol !absolute top-1/2 -translate-y-[50%] z-10 !left-[0px] !rounded-tl-none !rounded-bl-none  !rounded-tr-[6px] !rounded-br-[6px] !p-0 !h-14 !w-[34px] !bg-[#eee] !text-[#212529] !border-0 !shadow-[0_1px_2px_#08080833,0_4px_4px_#08080814,inset_0_-6px_12px_#0808080a] hover:!bg-primary hover:!text-white`}
          >
            <ChevronLeft size={21} />
          </Button>
          <Button
            size="large"
            className={`custom-swiper-next-carosol !absolute top-1/2 -translate-y-[50%] z-10 !right-[0px] !rounded-tr-none !rounded-br-none !rounded-tl-[6px] !rounded-bl-[6px] !p-0 !h-14 !w-[34px] !bg-[#eee] !text-[#212529] !border-0 !shadow-[0_1px_2px_#08080833,0_4px_4px_#08080814,inset_0_-6px_12px_#0808080a] hover:!bg-primary hover:!text-white`}
          >
            <ChevronRight size={21} />
          </Button>
        </div>
      </Swiper>

      <div
        className={`custom-swiper-pagination-carosol w-full flex justify-center mt-6`}
      />
    </div>
  );
}
