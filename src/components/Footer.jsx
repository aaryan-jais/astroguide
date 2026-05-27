import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="
        relative
        bg-cover
        bg-center
        pt-20
      "
      style={{
        backgroundImage: "url('/images/hero-bg.png')",
      }}
    >
      {/* Light Overlay */}
      <div className="absolute inset-0 bg-white/90"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">

          {/* Logo + About */}
          <div>

           <Link to="/"> <h2 className="
              font-josefin
              text-3xl
              font-bold
              text-[#21212C]
            ">
              Astro
              <span className="text-[#D5846E]">
                Guide
              </span>
            </h2></Link>

            <p className="
              mt-5
              text-gray-600
              font-poppins
              leading-relaxed
            ">
              Discover your journey through the wisdom
              of astrology and cosmic guidance.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">

              {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube]
                .map((Icon, index) => (
                  <div
                    key={index}
                    className="
                      w-10 h-10
                      rounded-full
                      bg-[#F5F5F5]
                      flex
                      items-center
                      justify-center
                      text-[#D5846E]
                      shadow-md
                      hover:bg-[#D5846E]
                      hover:text-white
                      hover:-translate-y-1
                      duration-300
                      cursor-pointer
                    "
                  >
                    <Icon />
                  </div>
              ))}

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="
              text-xl
              font-josefin
              font-bold
              text-[#21212C]
              mb-6
            ">
              Quick Links
            </h3>

            <ul className="
              space-y-4
              text-gray-600
              font-poppins
            ">
              <li><a href="#home" className="hover:text-[#D5846E] duration-300">Home</a></li>

              <li><a href="#about" className="hover:text-[#D5846E] duration-300">About Us</a></li>

              <li><a href="#services" className="hover:text-[#D5846E] duration-300">Services</a></li>

              <li><a href="#contact" className="hover:text-[#D5846E] duration-300">Contact Us</a></li>
            </ul>

          </div>

          {/* Services */}
          <div>

            <h3 className="
              text-xl
              font-josefin
              font-bold
              text-[#21212C]
              mb-6
            ">
              Services
            </h3>

            <ul className="
              space-y-4
              text-gray-600
              font-poppins
            ">
              <li>Birth Chart Reading</li>
              <li>Daily Horoscope</li>
              <li>Tarot Reading</li>
              <li>Love Compatibility</li>
            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="
              text-xl
              font-josefin
              font-bold
              text-[#21212C]
              mb-6
            ">
              Contact Info
            </h3>

            <div className="
              space-y-5
              text-gray-600
              font-poppins
            ">

              <div className="flex gap-3">
                <FaPhoneAlt className="text-[#D5846E] mt-1" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex gap-3">
                <FaEnvelope className="text-[#D5846E] mt-1" />
                <span>astrology@example.com</span>
              </div>

              <div className="flex gap-3">
                <FaMapMarkerAlt className="text-[#D5846E] mt-1" />
                <span>Mumbai, India</span>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="
          border-t
          border-gray-300
          py-6
          text-center
          text-gray-500
          font-poppins
        ">
          © 2026 AstroGuide | All Rights Reserved
        </div>

      </div>
    </footer>
  );
}

export default Footer;