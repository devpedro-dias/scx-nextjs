import React from "react";
import { FlipWords } from "./FlipWords";
import { homeWords } from "@/data";

export function FlipWordsHome() {
    
    return (
    <div className="h-[20rem] flex justify-center items-center px-4">
      <div className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl mx-auto font-semibold text-scx-default">
        Na SCX Agenciamentos, nosso objetivo é atender
        suas necessidades com soluções eficazes e <FlipWords words={homeWords} className="font-semiblod text-scx-accent"/>.
      </div>
    </div>
  );
}
