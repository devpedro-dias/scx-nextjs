"use client"
import React from 'react'
import TabsDemo from './ui/TabsDemo'
import { FlipWordsService } from './ui/FlipWordsService'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const ServicesSection = () => {
  useGSAP(() => {
    gsap.fromTo('#subtitle-hero',{
      y: -300,
      opacity: 0,
      ease: "power3.inOut",
      duration: 1.2,
    },
    { 
      y: 0,
      opacity: 1,
      duration: 1.2,
      delay: 1.4,
    })
  }, []);
  return (
    <div>
        <section className='sm:max-w-[90vw] md:max-w-[80vw] lg:max-w-[75vw]'>
          <div className='flex flex-col items-center justify-center my-32 gap-2'>
              <FlipWordsService />
              <p id="subtitle-hero" className="text-base sm:text-lg lg:text-xl text-center text-scx-default">
                Conectando você aos principais mercados mundiais.
              </p>
          </div>
            <div className='mt-[10rem] sm:mt-[15rem] md:mt-[0rem] md:mb-[5rem] lg:mt-0 lg:mb-[28rem] xl:mb-[15rem]'>
                <TabsDemo />
            </div>
        </section>
    </div>
  )
}

export default ServicesSection