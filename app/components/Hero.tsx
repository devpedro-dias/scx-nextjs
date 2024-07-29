"use client";

import Link from "next/link";
import Arrow from "./ui/Arrow";
import MagicButton from "./ui/Button";
import GridGlobe from "./ui/GridGlobe";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { FlipWordsHome } from "./ui/FlipWordsHome";


function Hero() {

  useGSAP(() => {
      gsap.fromTo('#title-hero', {
        opacity: 0,
        x: -200,
        ease: "power3.inOut"
      },
        {
          opacity: 1,
          duration: 1.2,
          delay: 1,
          x: 0,
        }),
        gsap.fromTo('#globe', {
          opacity: 0,
          ease: "power3.inOut",
        },
          {
            opacity: 1,
            duration: 1.2,
            delay: 1,
          }),
        gsap.fromTo('#button', {
          opacity: 0,
          x: -200,
          ease: "power3.inOut"
        },
          {
            opacity: 1,
            duration: 1.2,
            delay: 1,
            x: 0,
          });
  }, []);

  return (
    <section className="relative w-full h-full overflow-hidden">
      <div className="relative top-0 left-2 min-w-full min-h-[45vh] overflow-hidden">
        <div>
          <div className="flex h-3/4 text-scx-default mx-auto gap-4 my-16 sm:max-w-[90vw] md:max-w-[80vw] lg:max-w-[75vw] overflow-hidden">
            <div className="relative z-10 max-w-[50%] flex flex-col gap-2 md:mt-[2em] justify-between overflow-hidden">
              <div id="title-hero"> 
                <FlipWordsHome />
              </div>
              <div id="button" className="text-scx-text">
                <Link href={'/contato'}>
                  <MagicButton title={"Fale Conosco"} icon={<Arrow />} position={"right"} />
                </Link>
              </div>
            </div>
            <div className="z-0 w-fit overflow-hidden" id="globe">
              <GridGlobe />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
