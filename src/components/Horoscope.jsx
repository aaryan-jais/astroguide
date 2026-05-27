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
} from "react-icons/fa";

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
    <section
      className="
      relative
      py-20 md:py-28
      px-5 sm:px-8 lg:px-10
      bg-cover
      bg-center
      overflow-hidden
      bg-[#21212C]
    "
      style={{
        backgroundImage: "url('/images/bg-dark.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#181821]/60"></div>

      {/* Glow effects */}
      <div
        className="
        absolute
        top-0
        left-0
        w-96 h-96
        bg-[#D5846E]/50
        blur-[120px]
        rounded-full
      "
      ></div>

      <div
        className="
        absolute
        bottom-0
        right-0
        w-96 h-96
        bg-[#B4975D]/50
        blur-[120px]
        rounded-full
      "
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <span
            className="
            bg-purple-100
            backdrop-blur-md
            text-[#D5846E]
            px-5 py-2
            rounded-full
            uppercase
            text-sm
            mb-3
            font-medium
          "
          >
            Our Horoscope
          </span>

          <h2
            className="
            font-josefin
            text-4xl
            md:text-6xl
            text-white
            mt-9
            max-w-4xl
            mx-auto
            uppercase
            leading-tight
          "
          >
            Astrology That  <span className="text-[#D5846E]">
              {" "}Brings Clarity to Life</span>
          </h2>

          <p
            className="
            text-gray-300
            max-w-2xl
            mx-auto
            mt-5
          "
          >
            Explore zodiac insights and uncover guidance
            for love, relationships, career and life.
          </p>

        </div>

        {/* Zodiac Cards */}

        <div
          className="
          grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-6
          gap-6
        "
        >
          {zodiacSigns.map((item, index) => (
            <div
              key={index}
              className="
                group
                bg-white/5
                backdrop-blur-lg
                border
                border-white/10
                rounded-[6px]
                p-8
                text-center
                hover:bg-[#2D2D3C]
                hover:-translate-y-3
                duration-500
                cursor-pointer
                overflow-hidden
                relative
              "
            >
              {/* Glow on hover */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  bg-gradient-to-b
                  from-[#D5846E]/10
                  to-transparent
                  duration-500
                "
              ></div>

              <div
                className="
                  relative
                  z-10
                  w-20 h-20
                  mx-auto
                  rounded-full
                  bg-gradient-to-r
                  from-[#D5846E]
                  to-[#D5846E]
                  flex
                  items-center
                  justify-center
                  text-white
                  text-3xl
                  mb-6
                  group-hover:rotate-12
                  duration-500
                "
              >
                {item.icon}
              </div>

              <h3
                className="
                  relative
                  z-10
                  text-white
                  font-josefin
                  text-2xl
                  mb-3
                "
              >
                {item.name}
              </h3>

              <p
                className="
                  relative
                  z-10
                  text-gray-400
                  text-sm
                "
              >
                Daily cosmic insights
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Horoscope;