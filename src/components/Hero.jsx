import { Link } from "react-router-dom";
import { Star, Users, Award, Calendar } from "lucide-react";

function Hero() {
  return (
    <section
      className="
      relative
      bg-cover
      bg-center
      bg-no-repeat
      flex
      items-center
      justify-center
      px-5 py-20
      sm:px-8 sm:py-22
      lg:py-24 lg:px-10
      overflow-hidden
      "
      style={{
        backgroundImage: "url('/images/hero-bg.png')",
        backgroundAttachment: "fixed",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-white/75 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">

        {/* Small Badge */}
        <div className="inline-flex items-center gap-2 bg-[#B4975D]/10 px-4 py-2 rounded-full mb-6">

          <Star size={16} className="text-[#B4975D]" />

          <span className="text-sm uppercase font-medium text-[#B4975D]">
            Trusted Astrology Guidance
          </span>

        </div>

        {/* Heading */}

        <h1
          className="
          font-josefin
          text-4xl
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
          font-bold
          uppercase
          leading-tight
          text-[#222]
          "
        >
          Your Destiny Begins
          <br />

          <span className="text-[#B4975D]">
            Among The Stars
          </span>

        </h1>

        {/* Description */}

        <p
          className="
          mt-6
          text-[#444]
          text-sm
          sm:text-base
          md:text-lg
          leading-relaxed
          max-w-2xl
          mx-auto
          font-poppins
          "
        >
          Get personalized astrology readings and discover
          guidance for love, career, relationships and life
          from experienced astrologers.
        </p>

        {/* Trust text */}

        <div className="mt-5">

          <p className="text-[#555] text-sm">

            Guided by expert astrologers with years of
            spiritual and cosmic experience.

          </p>

        </div>

        {/* Buttons */}

        <div
          className="
          mt-8
          flex
          flex-col
          sm:flex-row
          justify-center
          gap-4
          "
        >
          <Link to="/book-consultation">

            <button
              className="
              bg-[#B4975D]
              px-8
              py-4
              rounded-md
              text-white
              uppercase
              shadow-xl
              hover:scale-105
              hover:bg-[#222]
              duration-300
              font-medium
              "
            >
              Book Consultation
            </button>

          </Link>

          <Link to="/services">

            <button
              className="
              border-2
              border-[#B4975D]
              text-[#B4975D]
              px-8
              py-4
              uppercase
              rounded-md
              hover:bg-[#B4975D]
              hover:text-white
              duration-300
              font-medium
              "
            >
              Explore Horoscope
            </button>

          </Link>

        </div>

        {/* Trust Stats */}

        <div
          className="
          mt-14
          grid
          grid-cols-2
          md:grid-cols-4
          gap-5
          "
        >
          <div className="bg-white p-5 rounded-xl shadow-md">
            <Users
              className="mx-auto text-[#B4975D]"
              size={24}
            />

            <h3 className="font-bold text-xl mt-2">
              5000+
            </h3>

            <p className="text-sm text-gray-500">
              Happy Clients
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-md">
            <Star
              className="mx-auto text-[#B4975D]"
              size={24}
            />

            <h3 className="font-bold text-xl mt-2">
              4.9
            </h3>

            <p className="text-sm text-gray-500">
              Client Rating
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-md">
            <Award
              className="mx-auto text-[#B4975D]"
              size={24}
            />

            <h3 className="font-bold text-xl mt-2">
              10+
            </h3>

            <p className="text-sm text-gray-500">
              Years Experience
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-md">
            <Calendar
              className="mx-auto text-[#B4975D]"
              size={24}
            />

            <h3 className="font-bold text-xl mt-2">
              24/7
            </h3>

            <p className="text-sm text-gray-500">
              Support
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;