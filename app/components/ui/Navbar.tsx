"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Navbar = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
  }[];
  className?: string;
}) => {

  useGSAP(() => {
    gsap.fromTo('#navbar',{
      y: -300,
      opacity: 0,
      ease: "power3.inOut",
      duration: 1.2,
    },
    { 
      y: 0,
      opacity: 1,
      duration: 1.2,
      delay: 1
    })
  }, []);
  
  return (
    <nav id="navbar" className="bg-transparent p-4 mx-auto w-full sm:max-w-[90vw] md:max-w-[80vw] lg:max-w-[75vw] z-0 overflow-hidden">
      <div className="flex items-center justify-between bg-transparent">
        <div className="z-0 md:hidden">
          <Link href="/home">
            <img src="/svg/scx-logo-new.svg" width={180} height={120} />
          </Link>
        </div>
        <div className="z-0 hidden md:flex">
          <Link href="/home">
            <img src="/svg/scx-logo-new.svg" width={220} height={180} />
          </Link>
        </div>
        <div className={"flex flex-col gap-2 sm:flex-row sm:gap-4 md:gap-10 z-0"}>
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative font-semibold items-center flex space-x-1 text-scx-default hover:text-scx-accent justify-center mx-auto "
              )}
            >
              <span className=" text-xl !cursor-pointer ">{navItem.name}</span>
            </Link>
          ))}
        </div>
      </div>
      
    </nav>
    
  );
};

export default Navbar;
