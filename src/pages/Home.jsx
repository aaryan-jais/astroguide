import Hero from "../components/Hero";
import Features from "../components/Features";
import Horoscope from "../components/Horoscope";
import WhyChooseUs from "../components/WhyChooseUs";
import Pricing from "../components/Pricing";
import HoroscopeDetails from "./HoroscopeDetails";
import Festivals from "../components/Festivals";

function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      
      <HoroscopeDetails />
      <Features />
      <Festivals />
      <WhyChooseUs />
      
      <Horoscope />
      <Pricing />
    </>
  );
}

export default Home;