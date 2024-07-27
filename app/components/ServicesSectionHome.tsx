"use client";
import React from 'react';
import { FeaturesSectionDemo } from './ui/FeaturedSectionCards';
import Arrow from './ui/Arrow';
import MagicButton from './ui/Button';
import Link from 'next/link';


const Services = () => {
 
  return (
    <div className='relative mt-36 -top-[3.33em] overflow-hidden'>
      <section className='flex flex-col justify-center items-center sm:max-w-[90vw] md:max-w-[80vw] lg:max-w-[75vw] mx-auto px-2'>
        <div className='flex flex-col justify-center items-center gap-14 [&:nth-child(2)]:gap-0 text-scx-default z-0'>
          <h1 id="text" className='text-4xl font-bold opacity-0 -top-10'>Nossos Serviços</h1>
          <p className='text-center leading-relaxed subtext text-lg opacity-0'>
            Na SCX AGENCIAMENTOS MARÍTIMOS, oferecemos soluções eficientes e seguras de transporte de carga, garantindo qualidade e pontualidade. Com uma ampla gama de serviços, nossas diversas subdivisões asseguram soluções econômicas e confiáveis tanto para movimentação internacional quanto para distribuição de mercadorias, sempre focados na satisfação dos clientes.</p>
          <div className='flex flex-col items-center justify-center'>
            <div>
              <FeaturesSectionDemo />
            </div>
            <div className='text-scx-text pb-10'>
              <Link href={'/servicos'}>
                <MagicButton title={'Saiba Mais'} icon={<Arrow />} position={'right'} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
