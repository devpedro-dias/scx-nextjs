import React from 'react'
import TabsDemo from './ui/TabsDemo'
import { FlipWordsService } from './ui/FlipWordsService'

const ServicesSection = () => {
  return (
    <div>
        <section className='sm:max-w-[90vw] md:max-w-[80vw] lg:max-w-[75vw]'>
          <div className='flex flex-col items-center justify-center my-32 gap-2'>
              <FlipWordsService />
              <p id="subtitle-hero" className="text-base sm:text-lg lg:text-xl text-center text-scx-default">
                Conectando você aos principais mercados mundiais.
              </p>
          </div>
            <div>
                <TabsDemo />
            </div>
        </section>
    </div>
  )
}

export default ServicesSection