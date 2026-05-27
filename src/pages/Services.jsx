import {
  FaStar,
  FaMoon,
  FaHandSparkles,
  FaChartPie,
  FaSun,
  FaGem,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaStar />,
      title: "Birth Chart Reading",
      desc: "Understand your personality and life journey through your natal chart.",
    },
    {
      icon: <FaMoon />,
      title: "Daily Horoscope",
      desc: "Receive daily guidance and predictions based on your zodiac sign.",
    },
    {
      icon: <FaHandSparkles />,
      title: "Tarot Reading",
      desc: "Gain insights and direction for important life decisions.",
    },
    {
      icon: <FaChartPie />,
      title: "Numerology",
      desc: "Explore how numbers influence your destiny.",
    },
    {
      icon: <FaSun />,
      title: "Career Guidance",
      desc: "Discover career opportunities through astrology.",
    },
    {
      icon: <FaGem />,
      title: "Love Compatibility",
      desc: "Understand relationship and zodiac compatibility.",
    },
  ];

  return (
    <section
      className="
        relative
        py-16 md:py-24
        px-5 sm:px-8 lg:px-10
        bg-cover
        bg-center
        bg-fixed
        bg-[#21212C]
      "
      style={{
        backgroundImage: "url('/images/bg-dark.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#21212C]/50"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">

          <span
            className="
              inline-block
              bg-purple-100
              text-[#D5846E]
              uppercase
              font-medium
              px-5 py-2
              rounded-full
              text-xs sm:text-sm
              font-poppins
            "
          >
            Our Services
          </span>

          <h2
            className="
              font-josefin
              text-3xl
              sm:text-4xl
              lg:text-6xl
              font-medium
              text-white
              mt-6
              max-w-4xl
              mx-auto
              uppercase
              leading-tight
            "
          >
            Find Clarity in Love, Career, and Life
          </h2>

          <p
            className="
              max-w-2xl
              mx-auto
              mt-5
              text-sm
              sm:text-base
              text-gray-300
              font-poppins
              leading-relaxed
            "
          >
            Personalized astrology services to help you
            understand life, relationships, and future
            possibilities.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">

          {services.map((service, index) => (
            <div
              key={index}
              className="
                bg-white/10
                backdrop-blur-md
                border
                border-white/10
                py-10
                sm:py-18
                px-6
                sm:px-8
                
                hover:-translate-y-3
                hover:bg-[#2D2D3C]
                duration-300
                group
                cursor-pointer
              "
            >
              <div
                className="
                  w-14 h-14
                  sm:w-16 sm:h-16
                  rounded-full
                  bg-white
                  flex items-center justify-center
                  text-[#D5846E]
                  text-xl sm:text-2xl
                  mb-6
                  group-hover:rotate-12
                  duration-300
                "
              >
                {service.icon}
              </div>

              <h3
                className="
                  font-josefin
                  text-xl
                  sm:text-2xl
                  font-bold
                  text-white
                  mb-4
                "
              >
                {service.title}
              </h3>

              <p
                className="
                  font-poppins
                  text-sm
                  sm:text-base
                  text-gray-300
                  leading-relaxed
                "
              >
                {service.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;