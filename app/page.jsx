import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Stats from "../components/Stats";
import Benefits from "../components/Benefits";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import WhyChooseUs from "../components/WhyChooseUs";
import HomeSlider from "../components/HomeSlider";
import HeroSlider from "../components/HeroSlider";

export default function Page() {
  return (
    <main>
     {/* <HeroSlider /> */}
      <Hero />
      {/* <HomeSlider /> */}
      <AboutUs />
      <Services />
      
      <Benefits />
      <WhyChooseUs />
      <Stats />
      <Testimonials />
      <CTA />
      <section id="contact" className="py-10 md:py-14 bg-gray-50">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-center">Contact With Us</h2>
          <form className="bg-white border rounded-2xl p-6 grid gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input className="border rounded-xl px-4 py-3" placeholder="Your Name" />
              <input className="border rounded-xl px-4 py-3" placeholder="Email Address" type="email" />
            </div>
            <input className="border rounded-xl px-4 py-3" placeholder="Subject" />
            <textarea className="border rounded-xl px-4 py-3 min-h-[140px]" placeholder="Message"></textarea>
            <button className="bg-primary text-white px-6 py-3 rounded-full font-semibold w-max">Send Message</button>
          </form>
        </div>
      </section>
     
    </main>
  );
}