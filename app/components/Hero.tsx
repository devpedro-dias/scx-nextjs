"use client";

import Arrow from "./ui/Arrow";
import MagicButton from "./ui/Button";
import GridGlobe from "./ui/GridGlobe";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";


function Hero() {

  useGSAP(() => {
    gsap.fromTo('#subtitle-hero', {
      opacity: 0,
      x: -200,
      ease: "power3.inOut"
    },
      {
        opacity: 1,
        duration: 1.2,
        x: 0,
      }),
      gsap.fromTo('#title-hero', {
        opacity: 0,
        x: -200,
        ease: "power3.inOut"
      },
        {
          opacity: 1,
          duration: 1.2,
          x: 0,
        }),
        gsap.fromTo('#button', {
          opacity: 0,
          x: -200,
          ease: "power3.inOut"
        },
          {
            opacity: 1,
            duration: 1.2,
            x: 0,
          });
  }, []);

  return (
    <section className="relative w-full h-full overflow-hidden">
      <div className="relative top-0 left-6 min-w-full min-h-[45vh]">
        <div>
          <div className="flex h-3/4 text-scx-default mx-auto gap-4 my-16 sm:max-w-[90vw] md:max-w-[80vw] lg:max-w-[75vw]">
            <div className="relative z-10 max-w-[50%] flex flex-col gap-2 md:mt-[8em] justify-between">
              <h1 id="title-hero" className="text-3xl sm:text-4xl font-bold">
                Sua Ponte para o Comércio Internacional
              </h1>

              <p id="subtitle-hero" className="text-base">
                Conectando você aos principais mercados mundiais.
              </p>

              <div id="button" className="text-scx-text">
                <MagicButton title={"Fale Conosco"} icon={<Arrow />} position={"right"} />
              </div>
            </div>
            <div className="z-0 w-full">
              <GridGlobe />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
