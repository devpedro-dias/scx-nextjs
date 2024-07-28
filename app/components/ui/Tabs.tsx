"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
};

type AccordionItemProps = {
  title: string;
  descriptions: { title: string; details: string }[];
  imageSrc?: string;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div
        className={cn(
          "flex flex-col md:flex-row items-center justify-center [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar w-full",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn(
              "relative px-3 py-1 md:px-4 md:py-2 rounded-sm text-xs sm:text-sm md:text-base lg:text-lg",
              tabClassName,
              active.value === tab.value ? "border-b-2 border-scx-default" : ""
            )}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 dark:bg-zinc-800",
                  activeTabClassName
                )}
              />
            )}

            <span className="relative block text-scx-default font-semibold text-lg xl:text-xl">
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("mt-16 lg:mt-24", contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  active,
  hovering,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value;
  };

  return (
    <div className="relative w-full h-auto sm:mb-[10rem] xl:mb-96">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn("w-full h-auto absolute top-0 left-0", className)}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};

export const AccordionItem = ({
  title,
  descriptions,
  imageSrc,
}: AccordionItemProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col xl:flex-row bg-gradient-to-tr from-scx-darker to-scx-default p-4 sm:p-6 md:p-8 lg:p-10 gap-4 rounded-xl mt-10">
      <div className="flex-1">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-scx-text">{title}</h2>
        <ul className="list-disc list-inside text-base lg:text-lg">
          {descriptions.map((description, index) => (
            <li key={index} className="py-2 text-scx-text relative text-base md:text-xl">
              <button
                onClick={() => toggleExpand(index)}
                className="absolute right-0 top-0 text-sm text-scx-text"
              >
                {expandedIndex === index ? "▲" : "▼"}
              </button>
                {description.title}
              {expandedIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="my-4 text-sm md:text-base text-scx-light px-6 text-justify"
                >
                  {description.details}
                </motion.div>
              )}
            </li>
          ))}
        </ul>
      </div>
      {imageSrc && (
        <div className="my-auto mx-auto xl:mx-6 flex-shrink-0">
          <img src={imageSrc} alt={title} className="mt-6 mx-auto w-[40%] h-auto lg:w-52 lg:h-52 object-cover" />
        </div>
      )}
    </div>
  );
};