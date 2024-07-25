"use client"
import React from 'react'
import { FeaturesSectionDemo } from './ui/FeaturedSectionCards'
import Grid from './ui/Grid'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Arrow from './ui/Arrow'
import MagicButton from './ui/Button'
import SmallGrid from './ui/SmallGrid'

const Services = () => {

    useGSAP(() => {
        gsap.to('#text', {
          ease: 'power1.inOut',
          opacity: 1,
          y: 0,
          delay: 0.7
        })
    
        gsap.fromTo('.subtext', {
          opacity: 0,
          y: 20,
        }, {
          opacity: 1,
          y: 0,
          delay: 1,
          stagger: 0.1
        }),

        gsap.fromTo('button', {
            opacity: 0,
            y: 20,
          }, {
            opacity: 1,
            y: 0,
            delay: 1,
            stagger: 0.1,
          })
      }, [])
      
  return (
    <div className='relative mt-36 -top-[3.33em]'>
        <div className='z-999 relative w-full h-full left-0'>
                <Grid />
            </div>
        <section className='flex flex-col justify-center items-center sm:max-w-[90vw] md:max-w-[80vw] lg:max-w-[75vw] mx-auto px-2'>
            
                <div className='flex flex-col justify-center items-center gap-24 text-scx-default z-0'>
                    
                    <h1 id="text" className='text-4xl font-bold opacity-0 -top-10'>Nossos Serviços</h1>
                    
                    <p className='text-center leading-relaxed subtext'>Na SCX AGENCIAMENTOS MARÍTIMOS, oferecemos soluções eficientes e seguras de transporte de carga, garantindo qualidade e pontualidade. Com uma ampla gama de serviços, nossas diversas subdivisões asseguram soluções econômicas e confiáveis tanto para movimentação internacional quanto para distribuição de mercadorias, sempre focados na satisfação dos clientes.</p>

                    <div className='flex flex-col items-center justify-center'>
                        <div className='absolute w-full h-[10vh] mt-[11.3rem]'>
                            <Grid />
                        </div>
                        <div>
                            <FeaturesSectionDemo />
                        </div>
                        <div className='text-scx-text' id='button'>
                            <MagicButton title={'Saiba Mais'} icon={<Arrow />} position={'right'}/>
                        </div>
                    </div>
                
                </div>
        </section>
    </div>
  )
}

export default Services