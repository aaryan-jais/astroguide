
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
    <section
      className="
        relative
       
        bg-cover
        bg-center
        bg-no-repeat
        flex
        items-center
        justify-center
        px-5 py-20 sm:px-8 sm:py-30 lg:py-44 lg:px-10
      "
      style={{
        backgroundImage: "url('/images/hero-bg.png')",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
          
        <h1
          className="
            font-josefin
            text-4xl
            sm:text-5xl
            md:text-6xl
            uppercase
            font-bold
            leading-tight
            max-w-4xl
            mx-auto
            text-[#222]
          "
        >
          Your Destiny Begins Among the Stars
        </h1>

        <p
          className="
            mt-6
            text-sm
            sm:text-base
            md:text-lg
            text-[#333]
            max-w-xl
            md:max-w-2xl
            mx-auto
            leading-relaxed
            font-poppins
          "
        >
          Get personalized astrology readings and discover
          guidance for love, career and life.
        </p>
   <Link to="/book-consultation">

        <button
          className="
            mt-8
            bg-[#B4975D]
            text-white
            uppercase
            px-6 py-3
            sm:px-8 sm:py-4
            lg:px-10 lg:py-4
            rounded
            shadow-xl
            hover:bg-[#333]
            hover:scale-105
            duration-300
            text-sm sm:text-base
          "
        >
          Book Consultation
        </button>
        </Link>

      </div>
    </section>
    
    </>
  );
}

export default Hero;