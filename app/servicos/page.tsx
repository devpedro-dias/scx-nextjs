import Footer from "../components/Footer";
import Header from "../components/Header";
import ServicesSection from "../components/ServicesSection";
import { Spotlight } from "../components/ui/Spotlight";
import { Tabs } from "../components/ui/Tabs";


export default function Home() {
  return (
    <main
      className="overflow-hidden max-w-[100vw] max-h-full"
      style={{
        backgroundImage: "url('/svg/grid.svg')",
        height: "auto",
      }}
    >
      <div className="overflow-hidden">
        <Spotlight
          className="top-0 -left-10 md:-left-32 md:-top-20 h-[100vh]"
          fill="#276B7C"
        />
        <Spotlight
          className="left-[30vw] sm:left-[30vw] md:left-[20vw] sm:h-[49vh] md:h-[50vh] top-0 h-[28%] w-[10w] lg:left-[30vw]"
          fill="#31859b"
        />
        <Spotlight
          className="left-[40vw] sm:left-[60vw] md:left-[45vw] sm:h-[30vh] md:h-[60vh] top-0 h-[28%] w-[10w] lg:left-[57vw]"
          fill="#276B7C"
        />
      </div>

      <div className="z-999 overflow-hidden sm:max-w-[90vw] md:max-w-[80vw] lg:max-w-[75vw] mx-auto">
        <div className="z-0">
          <Header />
          <section>
            <ServicesSection />
          </section>
        </div>
        <div className="mt-[66vh] md:mt-[0vh]">
            <Footer />
          </div>
      </div>
    </main>
  );
};
