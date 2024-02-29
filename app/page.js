import { Footer, Navbar } from "@/components";
import { About, Services, Feedback, WhyChooseUs, Hero, Insights, HowWeWork, World } from "@/sections";

export default function Home() {
  return (
    <main className="bg-primary-black overflow-hidden">
      <Navbar/>
      <Hero/>
      <div className="relative">
        <About/>
        <div className="gradient-03 z-0"/>
        <Services/>
      </div>
      <div className="relative">
        <WhyChooseUs/>
        <div className="gradient-04 z-0"/>
        <HowWeWork/>
      </div>
        <World/>
      <div className="relative">
        <Insights/>
        <div className="gradient-04 z-0"/>
        <Feedback/> 
      </div>
      <Footer/>
    </main>
  );
}