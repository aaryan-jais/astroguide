import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaCalendarAlt,
} from "react-icons/fa";

function BookConsultation() {
  return (
    <section
      className="
      relative
      py-24
      px-5
      min-h-screen
      bg-cover
      bg-center
      bg-[#212c2c]
    "
      style={{
        backgroundImage:
          "url('/images/bg-dark.png')",
      }}
    >
      {/* Overlay */}

      <div className="absolute inset-0 bg-[#181821]/85"></div>

      <div className="
      relative
      z-10
      max-w-6xl
      mx-auto
      grid
      lg:grid-cols-2
      gap-14
      items-center
      ">

        {/* Left Content */}

        <div>

          <span className="
          px-5
          py-2
          rounded-full
          bg-white/10
          text-[#D5846E]
          uppercase
          text-sm
          ">
            Consultation
          </span>

          <h1 className="
          mt-6
          text-4xl
          lg:text-6xl
          font-josefin
          text-white
          uppercase
          leading-tight
          ">
            Begin Your Cosmic Journey ✨
          </h1>

          <p className="
          mt-6
          text-gray-300
          leading-relaxed
          ">
            Book a personalized astrology session
            and receive guidance about love,
            relationships, career and life.
          </p>

          <img
            src="/images/consult.png"
            alt=""
            className="
            mt-10
            max-w-md
            animate-float
            "
          />

        </div>

        {/* Form */}

        <div
          className="
        bg-white/10
        backdrop-blur-lg
        border
        border-white/10
        rounded-3xl
        p-8
        "
        >

          <h2 className="
          text-white
          text-3xl
          mb-8
          font-josefin
          ">
            Book Appointment
          </h2>

          <form className="space-y-5">

            <div className="relative">

              <FaUser
                className="
              absolute
              top-5
              left-5
              text-[#D5846E]
              "
              />

              <input
                type="text"
                placeholder="Your Name"
                className="
                w-full
                bg-white/10
                border
                border-white/10
                rounded-full
                p-4
                pl-14
                text-white
                outline-none
                "
              />
            </div>

            <div className="relative">

              <FaEnvelope
                className="
              absolute
              top-5
              left-5
              text-[#D5846E]
              "
              />

              <input
                type="email"
                placeholder="Email Address"
                className="
                w-full
                bg-white/10
                border
                border-white/10
                rounded-full
                p-4
                pl-14
                text-white
                outline-none
                "
              />
            </div>

            <div className="relative">

              <FaPhoneAlt
                className="
              absolute
              top-5
              left-5
              text-[#D5846E]
              "
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="
                w-full
                bg-white/10
                border
                border-white/10
                rounded-full
                p-4
                pl-14
                text-white
                outline-none
                "
              />
            </div>

            <div className="relative">

              <FaCalendarAlt
                className="
              absolute
              top-5
              left-5
              text-[#D5846E]
              "
              />

              <input
                type="date"
                className="
                w-full
                bg-white/10
                border
                border-white/10
                rounded-full
                p-4
                pl-14
                text-white
                outline-none
                "
              />
            </div>

            <textarea
              rows="4"
              placeholder="Write your question..."
              className="
              w-full
              bg-white/10
              border
              border-white/10
              rounded-3xl
              p-4
              text-white
              outline-none
              "
            />

            <button
              className="
              w-full
              py-4
              rounded-full
              bg-gradient-to-r
              from-[#D5846E]
              to-[#B4975D]
              text-white
              uppercase
              hover:scale-105
              duration-300
              "
            >
              Book Now
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default BookConsultation;