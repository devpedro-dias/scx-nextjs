import React from "react";
import { FlipWords } from "./FlipWords";
import { serviceWords } from "@/data";

export function FlipWordsService() {
    
    return (
    <div className="h-[10rem] flex justify-center items-center px-4">
      <div className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl mx-auto font-semibold text-scx-default text-center ">
        Nosso compromisso é garantir padrão em cada <FlipWords words={serviceWords} className="font-semiblod text-scx-accent"/> dos nossos clientes.
      </div>
    </div>
  );
}
