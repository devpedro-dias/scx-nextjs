import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contato from "./components/Contato";
import Grid from "./components/ui/Grid";
import { Spotlight } from "./components/ui/Spotlight";
import Footer from "./components/Footer";

export default function page() {
  return (
    <main className="overflow-hidden" >
      <Spotlight
          className="top-0 -left-10 md:-left-32 md:-top-20 h-[100vh]"
          fill="#31859b"
        />
        <Spotlight
          className="-top-10 h-[80vh] w-[70vw] sm:w-[30vw] left-[90vw] md:top-0"
          fill="#276B7C"
        />
        <Spotlight className="left-[40%] top-0 h-[40vh] sm:h-[100vh] w-[10w]" fill="#276B7C" /> 
      <div className="z-999">
        <Grid />
        <div className="z-0">
          <Header />
          <Hero />
          <Services />
          <Contato />
          <Footer />
        </div>
      </div>
    </main>
  );
}
