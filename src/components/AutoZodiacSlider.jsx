import { motion } from "framer-motion";
import {
  Stars,
  Moon,
  Sun,
  Sparkles,
  Orbit,
  Star,
} from "lucide-react";

const zodiacData = [
  {
    title: "Aries",
    desc: "Confidence and leadership energy",
    icon: <Sun size={24} />,
  },
  {
    title: "Taurus",
    desc: "Stability and grounded nature",
    icon: <Moon size={24} />,
  },
  {
    title: "Gemini",
    desc: "Curious and expressive personality",
    icon: <Stars size={24} />,
  },
  {
    title: "Cancer",
    desc: "Emotional and intuitive insights",
    icon: <Sparkles size={24} />,
  },
  {
    title: "Leo",
    desc: "Passion and creativity shine",
    icon: <Star size={24} />,
  },
  {
    title: "Virgo",
    desc: "Detail focused guidance",
    icon: <Orbit size={24} />,
  },
];

function AutoZodiacSlider() {
  return (
    <section className="bg-[#1B1B26] relative py-20  overflow-hidden" style={{
        backgroundImage: "url('/images/bg-dark.png')",
      }}>
      <div className="absolute inset-0 bg-[#181821]/70"></div>
      <div className="text-center relative z-20 mb-14 px-5">

         <span className=" bg-purple-100 uppercase font-medium text-[#D5846E] px-5 py-2 rounded-full">
            Daily Energy
          </span>

          <h2 className="text-4xl uppercase mx-auto max-w-4xl leading-tight md:text-6xl text-white mt-8 font-josefin">
            Discover What The 
            <span className="text-[#D5846E]">
              {" "}Stars Reveal About You
            </span>
          </h2>

        <p className="text-gray-400 mt-4 max-w-xl mx-auto">

          Explore cosmic insights and discover what
          the stars reveal for your journey.

        </p>

      </div>

      {/* slider */}

      <motion.div
        className="flex gap-6"
        animate={{
          x: ["0%", "-100%"],
        }}
        transition={{
          ease: "linear",
          duration: 20,
          repeat: Infinity,
        }}
      >
        {[...zodiacData, ...zodiacData].map((item, index) => (

          <div
            key={index}
            className="
            min-w-[260px]
            bg-white/5
            p-8
            rounded-2xl
            border
            hover:bg-[#2D2D3C]
            border-[#2a2a42]
            shadow-xl
            hover:scale-105
            duration-300
            "
          >
            <div
              className="
              w-14
              h-14
              rounded-full
              bg-[#B4975D]
              flex
              items-center
              justify-center
              text-white
              mx-auto
              "
            >
              {item.icon}
            </div>

            <h3 className="text-white text-xl mt-6 text-center">

              {item.title}

            </h3>

            <p className="text-gray-400 text-sm mt-4 text-center">

              {item.desc}

            </p>

          </div>
        ))}
      </motion.div>

    </section>
  );
}

export default AutoZodiacSlider;