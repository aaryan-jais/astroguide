import Hero from "../components/Hero";
import Features from "../components/Features";
import Horoscope from "../components/Horoscope";
import WhyChooseUs from "../components/WhyChooseUs";
import Pricing from "../components/Pricing";
import HoroscopeDetails from "./HoroscopeDetails";
import Festivals from "../components/Festivals";
import AutoZodiacSlider from "../components/AutoZodiacSlider";

function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
       <AutoZodiacSlider />
      
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