import { FaCheck, FaStar } from "react-icons/fa";

function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "₹499",
      subtitle: "Single Reading",
      features: [
        "1 Astrology Reading",
        "Birth Chart Analysis",
        "Basic Consultation",
        "Email Support",
      ],
      active: false,
    },
    {
      name: "Premium",
      price: "₹999",
      subtitle: "Most Popular",
      features: [
        "3 Astrology Readings",
        "Detailed Birth Chart",
        "Tarot Reading",
        "Priority Support",
      ],
      active: true,
    },
    {
      name: "Ultimate",
      price: "₹1499",
      subtitle: "Complete Guidance",
      features: [
        "Unlimited Consultation",
        "Full Horoscope Report",
        "Love Compatibility",
        "24/7 Support",
      ],
      active: false,
    },
  ];

  return (
    <section className="py-20 md:py-28 px-5 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="
            inline-block
            px-5 py-2
            rounded-full
            bg-purple-100
            text-[#D5846E]
            uppercase
            text-sm
            font-medium
          ">
            Pricing Plans
          </span>

          <h2 className="
            font-josefin
            text-4xl
            md:text-6xl
            mt-6
            max-w-4xl
            leading-tight
            mx-auto
            uppercase
            text-[#21212C]
          ">
            Personalized Astrology <span className="text-[#D5846E]">
              {" "} Plans for Every Soul</span>
          </h2>

          <p className="
            mt-5
            text-gray-500
            max-w-2xl
            mx-auto
          ">
            Select the perfect astrology package
            that fits your guidance and life goals.
          </p>

        </div>

        {/* Cards */}
        <div className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
        ">

          {plans.map((plan,index)=>(

            <div
              key={index}
              className={`
              relative
              rounded-3xl
              p-8
              border
              duration-500
              hover:-translate-y-4
              hover:shadow-2xl
              
              ${
                plan.active
                ? "bg-[#21212C] text-white border-[#D5846E] scale-105"
                : "bg-white border-gray-200"
              }
              `}
            >

              {plan.active && (

                <div className="
                  absolute
                  -top-4
                  left-1/2
                  -translate-x-1/2
                  px-6
                  py-2
                  rounded-full
                  bg-gradient-to-r
                  from-[#D5846E]
                  to-[#B4975D]
                  text-white
                  flex
                  items-center
                  gap-2
                ">

                  <FaStar />

                  Popular

                </div>

              )}

              <h3 className="
                text-3xl
                font-josefin
                mb-2
              ">
                {plan.name}
              </h3>

              <p className="
                text-gray-400
                mb-6
              ">
                {plan.subtitle}
              </p>

              <h2 className="
                text-5xl
                font-bold
                mb-8
              ">
                {plan.price}
              </h2>

              <div className="space-y-5 mb-10">

                {plan.features.map((feature,i)=>(

                  <div
                    key={i}
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >

                    <div className="
                      w-7
                      h-7
                      rounded-full
                      bg-[#D5846E]
                      flex
                      items-center
                      justify-center
                      text-white
                      text-sm
                    ">
                      <FaCheck/>
                    </div>

                    <p>{feature}</p>

                  </div>

                ))}

              </div>

              <button
                className={`
                w-full
                py-4
                rounded-full
                uppercase
                duration-300
                
                ${
                  plan.active
                  ? "bg-[#D5846E] hover:bg-[#B4975D] text-white"
                  : "bg-[#21212C] hover:bg-[#D5846E] text-white"
                }
                `}
              >
                Get Started
              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Pricing;