import {
  FaStar,
  FaMoon,
  FaUserAstronaut,
  FaHandSparkles,
} from "react-icons/fa";

function WhyChooseUs() {
  const items = [
    {
      icon: <FaUserAstronaut />,
      title: "Expert Astrologers",
      desc: "Professional astrologers with years of experience and cosmic wisdom.",
    },
    {
      icon: <FaStar />,
      title: "Accurate Predictions",
      desc: "Receive detailed insights and predictions tailored for your future.",
    },
    {
      icon: <FaMoon />,
      title: "Personal Guidance",
      desc: "Get customized spiritual and life guidance for better decisions.",
    },
    {
      icon: <FaHandSparkles />,
      title: "Trusted By Clients",
      desc: "Thousands of people trust our readings and astrology consultations.",
    },
  ];

  return (
    <section
      className="
        py-20 md:py-28
        px-5 sm:px-8 lg:px-10
        bg-white
        overflow-hidden
        relative
      "
    >
      {/* Decorative circles */}
      <div className="
        absolute
        top-0
        left-0
        w-80
        h-80
        rounded-full
        bg-[#D5846E]
        blur-[100px]
      "></div>

      <div className="
        absolute
        bottom-0
        right-0
        w-96
        h-96
        rounded-full
        bg-[#B4975D]
        blur-[100px]
        
      "></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="
            inline-block
            px-5 py-2
            rounded-full
            bg-purple-100
            text-[#D5846E]
            uppercase
            text-sm
            font-medium
          ">
            Why Choose Us
          </span>

          <h2 className="
            font-josefin
            text-4xl
            md:text-6xl
            text-[#21212C]
            uppercase
            mt-6
            max-w-3xl
            mx-auto
            font-medium
            leading-tight
          ">
            Let the Stars <span className="text-[#D5846E]">
              {" "} Guide Your Path</span>
          </h2>

          <p className="
            max-w-2xl
            mx-auto
            mt-5
            text-gray-500
            leading-relaxed
          ">
            Discover accurate readings, expert guidance,
            and personalized astrology services to illuminate
            your journey.
          </p>

        </div>

        {/* Cards */}

        <div className="
          grid
          sm:grid-cols-2
          lg:grid-cols-4
          gap-8
        ">

          {items.map((item, index) => (

            <div
              key={index}
              className="
                bg-white
                rounded-[8px]
                p-8
                shadow-lg
                border
                border-gray-100
                text-center
                hover:-translate-y-4
                hover:shadow-2xl
                duration-500
                group
              "
            >

              {/* Icon */}

              <div className="
                w-20
                h-20
                mx-auto
                rounded-full
                bg-gradient-to-r
                from-[#D5846E]
                to-[#B4975D]
                text-white
                text-3xl
                flex
                items-center
                justify-center
                mb-6
                group-hover:rotate-12
                animate-float
              ">
                {item.icon}
              </div>

              <h3 className="
                font-josefin
                text-2xl
                text-[#21212C]
                mb-4
              ">
                {item.title}
              </h3>

              <p className="
                text-gray-500
                leading-relaxed
              ">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;