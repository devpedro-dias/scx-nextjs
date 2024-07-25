"use client"
import React, { useEffect } from 'react';
import MagicButton from './ui/Button';
import Arrow from './ui/Arrow';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Grid from './ui/Grid';

gsap.registerPlugin(ScrollTrigger);

const Contato = () => {
  useEffect(() => {
    gsap.fromTo(
      '#text',
      {
        opacity: 0,
        y: 400,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '#text',
          start: 'top 90%',
          end: 'top 80%',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      '.subtext',
      {
        opacity: 0,
        y: 200,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.7,
        stagger: 0.1,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '.subtext',
          start: 'top 90%',
          end: 'top 60%',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      '.button',
      {
        opacity: 0,
        y: 200,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1,
        stagger: 0.1,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '.button',
          start: 'top 90%',
          end: 'top 60%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className='overflow-hidden z-0'>
      <div className='z-9999 relative w-full h-full'
      >
        <Grid />
      </div>
    <div className='relative mt-36 -top-[3.33em] z-0'>
      <section className='flex flex-col justify-center items-center sm:max-w-[90vw] md:max-w-[80vw] lg:max-w-[75vw] mx-auto px-2 z-0 overflow-hidden'>  
        <div className='text-scx-default flex flex-col items-center justify-center gap-12 z-0'>
          <h1 id="text" className='text-4xl font-bold opacity-0 -top-10'>
            Fale Conosco
          </h1>

          <p className='text-center leading-relaxed subtext text-lg opacity-0'>
            Estamos aqui para ajudar! Se você tiver qualquer dúvida, sugestão ou precisar de mais informações sobre nossos serviços, por favor, não hesite em nos contatar. Nossa equipe está pronta para fornecer a assistência que você precisa e responder a todas as suas perguntas com rapidez e eficiência.
          </p>

          <div className='text-scx-text'>
            <MagicButton title={'Entre em contato'} icon={<Arrow />} position={'right'} />
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Contato;
