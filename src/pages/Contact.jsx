import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaMoon,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        py-20 md:py-28
       
        px-5 sm:px-8 lg:px-10
        bg-cover
        bg-center
        bg-[#21212C]
        overflow-hidden
      "
      style={{
        backgroundImage: "url('/images/bg-dark.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1D1D28]/70"></div>

      {/* Decorative circles */}
      <div className="
        absolute
        top-0
        left-0
        w-96
        h-96
        rounded-full
        bg-[#D5846E]/10
        blur-[120px]
      "></div>

      <div className="
        absolute
        bottom-0
        right-0
        w-96
        h-96
        rounded-full
        bg-[#B4975D]/10
        blur-[120px]
      "></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-22 items-center">

          {/* Left Side */}
          <div>

            <span className="
              inline-block
               bg-purple-100
              text-[#D5846E]
              px-5
              py-2
              rounded-full
              uppercase
              text-sm
              font-medium
            ">
              Contact Us
            </span>

            <h2 className="
              font-josefin
              text-4xl
              sm:text-5xl
              lg:text-6xl
              text-white
              mt-6
              uppercase
              leading-tight
            ">
              Discover Your
              <br />
              Cosmic Journey 
            </h2>

            <p className="
              text-gray-300
              mt-6
              leading-relaxed
              max-w-xl
              font-poppins
            ">
              Reach out for personalized astrology readings,
              tarot guidance and spiritual consultation to
              illuminate your path.
            </p>

            {/* Contact Cards */}

            <div className="mt-10 space-y-5">

              {[
                {
                  icon: <FaPhoneAlt />,
                  title: "Phone",
                  value: "+91 98765 43210"
                },
                {
                  icon: <FaEnvelope />,
                  title: "Email",
                  value: "astro@example.com"
                },
                // {
                //   icon: <FaMapMarkerAlt />,
                //   title: "Location",
                //   value: "Mumbai, India"
                // }
              ].map((item, index) => (

                <div
                  key={index}
                  className="
                    flex
                    items-center
                    gap-5
                    bg-white/5
                    border
                    border-white/10
                    backdrop-blur-lg
                    rounded-2xl
                    p-5
                    hover:bg-[#2D2D3C]
                    duration-300
                  "
                >

                  <div className="
                    w-14 h-14
                    rounded-full
                    bg-[#D5846E]
                    text-white
                    flex
                    items-center
                    justify-center
                  ">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="text-white font-bold">
                      {item.title}
                    </h4>

                    <p className="text-gray-300">
                      {item.value}
                    </p>
                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* Right Side Form */}

          <div className="
            relative
            bg-white
            rounded-[8px]
            p-8 sm:p-12
            shadow-[0_20px_60px_rgba(0,0,0,0.35)]
          ">

            {/* Floating Icon */}

            <div className="
              absolute
              -top-8
              right-8
              w-16 h-16
              bg-[#D5846E]
              rounded-full
              flex
              items-center
              justify-center
              text-white
              text-2xl
              shadow-xl
            ">
              <FaMoon />
            </div>

            <h3 className="
              text-3xl
              font-josefin
              text-[#21212C]
              mb-8
            ">
              Send Message
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="
                  w-full
                  p-4
                  bg-gray-100
                  rounded-xl
                  outline-none
                  border-2
                  border-transparent
                  focus:border-[#D5846E]
                "
              />

              <input
                type="email"
                placeholder="Your Email"
                className="
                  w-full
                  p-4
                  bg-gray-100
                  rounded-xl
                  outline-none
                  border-2
                  border-transparent
                  focus:border-[#D5846E]
                "
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="
                  w-full
                  p-4
                  bg-gray-100
                  rounded-xl
                  outline-none
                  border-2
                  border-transparent
                  focus:border-[#D5846E]
                "
              />

              <button
                className="
                  w-full
                  py-4
                  bg-[#D5846E]
                  text-white
                  rounded-xl
                  hover:bg-[#B4975D]
                  duration-300
                  uppercase
                "
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;