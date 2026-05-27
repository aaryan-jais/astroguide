import { FaStar, FaMoon, FaHandSparkles } from "react-icons/fa";

function About() {
  return (
    <section className="py-16 md:py-24 px-5 sm:px-8 lg:px-10 bg-white">
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* Left Image */}
        <div className="relative order-1">

          <img
            src="/images/about.png"
            alt="Astrology"
            className="
              w-full
              h-[320px]
              sm:h-[450px]
              lg:h-[620px]
              object-contain
              animate-float
            "
          />

        </div>

        {/* Right Content */}
        <div className="order-2">

          {/* Badge */}
          <span
            className="
              inline-block
              bg-purple-100
              text-[#D5846E]
              px-5
              py-2
              rounded-full
              text-xs
              sm:text-sm
              uppercase
              font-medium
              font-poppins
            "
          >
            About Us
          </span>

          {/* Heading */}
          <h2
            className="
              font-josefin
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-bold
              uppercase
              text-gray-900
              mt-5
              leading-tight
              max-w-4xl
            "
          >
            Explore the Wisdom of the Cosmos
          </h2>

          {/* Description */}
          <p
            className="
              font-poppins
              text-sm
              sm:text-base
              text-gray-600
              mt-5
              leading-relaxed
            "
          >
            We help people understand their life journey
            through astrology, birth charts, tarot readings,
            and spiritual guidance. Our mission is to bring
            clarity and insight through cosmic wisdom.
          </p>

          {/* Feature Cards */}
          <div className="mt-8 space-y-4">

            {[
              {
                icon: <FaStar />,
                text: "Personalized astrology readings",
              },
              {
                icon: <FaMoon />,
                text: "Daily horoscope insights",
              },
              {
                icon: <FaHandSparkles />,
                text: "Spiritual guidance and tarot consultation",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
                  flex
                  items-center
                  gap-4
                  bg-gray-50
                  p-4
                  rounded-xl
                  shadow-sm
                  hover:shadow-lg
                  duration-300
                "
              >
                <div
                  className="
                    min-w-[48px]
                    w-12 h-12
                    bg-[#D5846E]
                    rounded-full
                    flex
                    items-center
                    justify-center
                    text-white
                  "
                >
                  {item.icon}
                </div>

                <p
                  className="
                    font-poppins
                    text-sm
                    sm:text-base
                    text-gray-700
                  "
                >
                  {item.text}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;