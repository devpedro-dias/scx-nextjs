import React from "react";
import { FlipWords } from "./FlipWords";
import { serviceWords } from "@/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function FlipWordsService() {

  useGSAP(() => {
    gsap.fromTo('#hero-title',{
      y: -300,
      opacity: 0,
      ease: "power3.inOut",
      duration: 1.2,
    },
    { 
      y: 0,
      opacity: 1,
      duration: 1.2,
      delay: 1.2,
    })
  }, []);

    return (
    <div className="h-[10rem] flex justify-center items-center px-4">
      <div className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl mx-auto font-semibold text-scx-default text-center" id="hero-title">
        Nosso compromisso com nossos clientes é garantir padrão e eficácia em cada <FlipWords words={serviceWords} className="font-semiblod text-scx-accent"/>.
      </div>
    </div>
  );
}
