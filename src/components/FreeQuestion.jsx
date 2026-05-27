
function FreeQuestion() {
  return (
    <section className="p-6 bg-white overflow-hidden
          relative
          bg-cover
          bg-center bg-fixed" style={{
          backgroundImage: "url('/images/service-bg.png')",
        }}>
      <div
        className="
          max-w-7xl
          mx-auto
          rounded-[40px]
        "
       
      >
        {/* Light overlay */}
        <div className="absolute inset-0 bg-white/80"></div>

        <div className="
          relative
          z-10
          px-8
          py-20
          md:px-20
          text-center
        ">

          {/* Small Badge */}
          <span className="
            inline-block
            px-5
            py-2
            rounded-full
            bg-purple-100
            text-[#D5846E]
            uppercase
            font-medium
            font-poppins
            text-sm
            mb-6
          ">
            Free Astrology Guidance ✨
          </span>

          {/* Heading */}
          <h2 className="
            font-josefin
            text-3xl
              sm:text-4xl
              lg:text-6xl
            md:text-6xl
            font-bold
            text-gray-900
            leading-tight
            max-w-4xl
            uppercase
            mx-auto
          ">
            Get an Answer to
            <span className="text-[#D5846E]">
              {" "}One Question for Free
            </span>
          </h2>

          {/* Subtitle */}
          <p className="
            mt-6
            max-w-2xl
            mx-auto
            text-gray-600
            font-poppins
            leading-relaxed
            text-lg
          ">
            Your path is illuminated by a road-map of stars.
            I am here to guide you toward clarity, wisdom,
            and new possibilities.
          </p>

          {/* Button */}
          <button className="
            mt-10
            bg-[#B4975D] text-[#fff] uppercase px-10 py-4 rounded
            mx-auto
            hover:bg-[#333]
            font-poppins
            shadow-xl
            hover:scale-105
            duration-300
          ">
            Ask Your Question
           
          </button>

        </div>
      </div>
    </section>
  );
}

export default FreeQuestion;