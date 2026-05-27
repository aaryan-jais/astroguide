import {
  FaFire,
  FaBullhorn,
  FaGem,
  FaMoon,
  FaCrown,
  FaLeaf,
  FaBalanceScale,
  FaSpider,
  FaHorse,
  FaMountain,
  FaWater,
  FaFish,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function Horoscope() {
  const zodiacSigns = [
    { icon: <FaFire />, name: "Aries" },
    { icon: <FaBullhorn />, name: "Taurus" },
    { icon: <FaGem />, name: "Gemini" },
    { icon: <FaMoon />, name: "Cancer" },
    { icon: <FaCrown />, name: "Leo" },
    { icon: <FaLeaf />, name: "Virgo" },
    { icon: <FaBalanceScale />, name: "Libra" },
    { icon: <FaSpider />, name: "Scorpio" },
    { icon: <FaHorse />, name: "Sagittarius" },
    { icon: <FaMountain />, name: "Capricorn" },
    { icon: <FaWater />, name: "Aquarius" },
    { icon: <FaFish />, name: "Pisces" },
  ];

  return (
    <section className="relative py-20 px-5 bg-[#21212C] overflow-hidden" style={{
        backgroundImage: "url('/images/bg-dark.png')",
      }}>

      <div className="absolute inset-0 bg-[#181821]/60"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-14">

          <span className=" bg-purple-100 uppercase font-medium text-[#D5846E] px-5 py-2 rounded-full">
            Our Horoscope
          </span>

          <h2 className="text-4xl uppercase mx-auto max-w-4xl leading-tight md:text-6xl text-white mt-8 font-josefin">
            Astrology That
            <span className="text-[#D5846E]">
              {" "}Brings Clarity To Life
            </span>
          </h2>

          <p className="text-gray-300 mt-5 max-w-2xl mx-auto">
            Explore zodiac insights for love, relationships,
            career and life.
          </p>

        </div>

        {/* Custom arrows */}

        <div className="flex justify-end gap-4 mb-8">

          <button
            className="
            horoscope-prev
            w-12
            h-12
            rounded-full
            bg-white/10
            text-white
            hover:bg-[#D5846E]
            duration-300
            flex
            items-center
            justify-center
          "
          >
            <FaArrowLeft />
          </button>

          <button
            className="
            horoscope-next
            w-12
            h-12
            rounded-full
            bg-white/10
            text-white
            hover:bg-[#D5846E]
            duration-300
            flex
            items-center
            justify-center
          "
          >
            <FaArrowRight />
          </button>

        </div>

        {/* Swiper */}

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: ".horoscope-prev",
            nextEl: ".horoscope-next",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={25}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
        >
          {zodiacSigns.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="
                group
                rounded-3xl
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                p-8
                text-center
                hover:-translate-y-3
                hover:bg-[#2D2D3C]
                duration-500
                cursor-pointer
                h-full
              "
              >
                <div
                  className="
                  w-20
                  h-20
                  mx-auto
                  rounded-full
                  bg-gradient-to-r
                  from-[#D5846E]
                  to-[#B4975D]
                  flex
                  items-center
                  justify-center
                  text-white
                  text-3xl
                  mb-6
                  group-hover:rotate-[360deg]
                  duration-700
                "
                >
                  {item.icon}
                </div>

                <h3 className="text-white text-2xl font-josefin">
                  {item.name}
                </h3>

                <div className="w-10 h-[2px] bg-[#D5846E] mx-auto my-4"></div>

                <p className="text-gray-400 text-sm">
                  Daily cosmic insights and horoscope guidance
                </p>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </section>
  );
}

export default Horoscope;