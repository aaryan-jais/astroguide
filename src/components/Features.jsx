import {
  FaMoon,
  FaStar,
  FaHandSparkles,
  FaGlobe,
} from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaMoon />,
      title: "Birth Chart",
      desc: "Discover your personality and life path through your cosmic chart.",
    },
    {
      icon: <FaStar />,
      title: "Daily Horoscope",
      desc: "Get personalized predictions and guidance every day.",
    },
    {
      icon: <FaHandSparkles />,
      title: "Tarot Reading",
      desc: "Explore insights and possibilities for your future.",
    },
    {
      icon: <FaGlobe />,
      title: "Spiritual Guidance",
      desc: "Find clarity and direction for your journey.",
    },
  ];

  return (
    <section className="px-5 sm:px-8 lg:px-10  relative z-20">
      
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded
                py-8
                px-6
                sm:py-12
                sm:px-8
                shadow-xl
                border
                border-[#B4975D]/20
                hover:-translate-y-3
                hover:shadow-2xl
                hover:border-[#B4975D]
                duration-300
                cursor-pointer
              "
            >
              {/* Icon */}
              <div
                className="
                  w-14 h-14
                  sm:w-16 sm:h-16
                  rounded-full
                  bg-purple-100
                  flex
                  items-center
                  justify-center
                  text-[#D5846E]
                  text-xl
                  sm:text-2xl
                  mb-5
                "
              >
                {item.icon}
              </div>

              <h3
                className="
                  font-josefin
                  text-xl
                  sm:text-2xl
                  font-bold
                  text-gray-800
                  mb-3
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  font-poppins
                  text-sm
                  sm:text-base
                  text-gray-500
                  leading-relaxed
                "
              >
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;