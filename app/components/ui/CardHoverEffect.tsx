"use client"
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
    items,
    className,
  }: {
    items: {
      title: string;
      descriptions: string[];
    }[];
    className?: string;
  }) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
    return (
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-24 gap-4",
          className
        )}
      >
        {items.slice(0, 3).map((item, idx) => (
          <div
            key={idx}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-scx-darker block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 0.8,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <CardTitle className="group-hover:pl-4 group-hover:text-scx-text">{item.title}</CardTitle>
              <CardDescription className="group-hover:text-scx-text">
                {item.descriptions.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </CardDescription>
            </Card>
          </div>
        ))}
        <div className="lg:col-span-3 flex lg:justify-center lg:space-x-4">
          {items.slice(3).map((item, idx) => (
            <div
              key={idx}
              className="relative group block p-2 h-full w-full lg:w-1/3"
              onMouseEnter={() => setHoveredIndex(3 + idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === 3 + idx && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-scx-darker block rounded-3xl"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 0.8,
                      transition: { duration: 0.3 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.2, delay: 0.2 },
                    }}
                  />
                )}
              </AnimatePresence>
              <Card>
                <CardTitle className="group-hover:pl-4 group-hover:text-scx-text">{item.title}</CardTitle>
                <CardDescription className="group-hover:text-scx-text">
                  {item.descriptions.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </CardDescription>
              </Card>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export const Card = ({
    className,
    children,
  }: {
    className?: string;
    children: React.ReactNode;
  }) => {
    return (
      <div
        className={cn(
          "rounded-2xl h-full w-full p-4 overflow-hidden border-scx-accent border group-hover:border-scx-text relative z-20 transition-all",
          className
        )}
      >
        <div className="relative z-50">
          <div className="p-4">{children}</div>
        </div>
      </div>
    );
  };
  
  export const CardTitle = ({
    className,
    children,
  }: {
    className?: string;
    children: React.ReactNode;
  }) => {
    return (
      <h4 className={cn("text-scx-accent font-bold tracking-wide mt-4 transition-all text-xl", className)}>
        {children}
      </h4>
    );
  };
  
  export const CardDescription = ({
    className,
    children,
  }: {
    className?: string;
    children: React.ReactNode;
  }) => {
    return (
      <ul className={cn("mt-8 text-scx-default tracking-wide leading-2 text-sm transition-all", className)}>
        {children}
      </ul>
    );
  };