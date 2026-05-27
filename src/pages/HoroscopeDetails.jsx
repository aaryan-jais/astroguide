import { useState } from "react";
import {
  FaFire,
  FaGem,
  FaMoon,
  FaBalanceScale,
  FaStar,
} from "react-icons/fa";

function HoroscopePage() {
  const tabs = [
    "Daily",
    "Weekly",
    "Weekly Love",
    "Monthly",
    "Yearly",
  ];

  const zodiacData = [
    {
      sign: "Aries",
      icon: <FaFire />,
      date: "Tuesday, May 26, 2026",
      text:
        "You will be loaded with energy and complete important tasks successfully today.",
    },
    {
      sign: "Taurus",
      icon: <FaStar />,
      date: "Tuesday, May 26, 2026",
      text:
        "Your sense of humor and positivity can inspire people around you.",
    },
    {
      sign: "Gemini",
      icon: <FaGem />,
      date: "Tuesday, May 26, 2026",
      text:
        "Unexpected opportunities may arrive through communication.",
    },
    {
      sign: "Cancer",
      icon: <FaMoon />,
      date: "Tuesday, May 26, 2026",
      text:
        "Family support and emotional balance will help you move forward.",
    },
    {
      sign: "Libra",
      icon: <FaBalanceScale />,
      date: "Tuesday, May 26, 2026",
      text:
        "Partnerships and teamwork can bring positive outcomes.",
    },
  ];

  const [activeTab, setActiveTab] = useState("Daily");
  const [selectedSign, setSelectedSign] =
    useState(zodiacData[0]);

  return (
    <section
      className="
      py-16
      md:py-22
      px-4
      sm:px-6
      lg:px-8
      
      bg-cover
      bg-center
      relative
      "
      style={{
        backgroundImage:
          "url('/images/bg-dark.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#fff]/65"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-10">

          <span
            className="
            px-5
            py-2
            rounded-full
           bg-[#D5846E]/10
            text-[#D5846E]
            text-sm
            uppercase
            "
          >
            Horoscope
          </span>

          <h2
            className="
            font-josefin
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            
            mt-6
            uppercase
            "
          >
            Horoscope Predictions ✨
          </h2>

        </div>

        {/* Tabs */}

        <div
          className="
          flex
          overflow-x-auto
          scrollbar-hide
          rounded-xl
          bg-white
          shadow-lg
          mb-6
          "
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() =>
                setActiveTab(tab)
              }
              className={`
              whitespace-nowrap
              px-6
              py-4
              text-sm
              md:text-base
              duration-300
              border-r

              ${
                activeTab === tab
                  ? "bg-[#D5846E] text-white"
                  : "hover:bg-gray-100"
              }
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Zodiac Cards */}

        <div
          className="
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-5
          gap-4
          bg-white
          p-5
          rounded-xl
          shadow-lg
          "
        >
          {zodiacData.map((item) => (
            <button
              key={item.sign}
              onClick={() =>
                setSelectedSign(item)
              }
              className={`
              rounded-xl
              py-5
              px-3
              flex
              flex-col
              items-center
              justify-center
              duration-300

              ${
                selectedSign.sign ===
                item.sign
                  ? "bg-[#D5846E] text-white"
                  : "bg-orange-50 hover:bg-orange-100"
              }
              `}
            >
              <div className="text-2xl md:text-3xl">
                {item.icon}
              </div>

              <span className="mt-2 text-sm">
                {item.sign}
              </span>
            </button>
          ))}
        </div>

        {/* Horoscope Content */}

        <div
          className="
          bg-white
          rounded-2xl
          shadow-2xl
          p-6
          md:p-10
          mt-8
          "
        >
          <h2
            className="
            text-2xl
            sm:text-3xl
            md:text-4xl
            font-josefin
            "
          >
            {selectedSign.sign}{" "}
            {activeTab} Horoscope
          </h2>

          <p
            className="
            text-gray-500
            mt-3
            text-sm
            md:text-base
            "
          >
            {selectedSign.date}
          </p>

          <p
            className="
            mt-6
            text-gray-700
            leading-8
            md:leading-9
            text-base
            md:text-lg
            "
          >
            {selectedSign.text}
          </p>

          <button
            className="
            mt-8
            px-8
            py-4
            rounded-full
            bg-[#D5846E]
            text-white
            hover:bg-[#B4975D]
            duration-300
            w-full
            sm:w-auto
            "
          >
            Read More
          </button>

        </div>

      </div>
    </section>
  );
}

export default HoroscopePage;