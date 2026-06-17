'use client';

import {useRef} from 'react';
import {motion, useScroll, useTransform} from 'framer-motion';
import Image from 'next/image';
import type {SiteData} from '@/data/site-data';

type WorldLuxData = SiteData['worldLux'];

const runes = ['LUX', 'ASTRA', 'LIMBO', 'OBELISK', 'CITY', 'DRAGON'];

export function WorldOfLux({data}: {data: WorldLuxData}) {
  const sectionRef = useRef<HTMLElement>(null);
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-7%', '7%']);
  const lightX = useTransform(scrollYProgress, [0, 1], ['-18%', '18%']);

  return (
    <motion.section
      id="world-lux"
      ref={sectionRef}
      className="particle-field relative scroll-mt-28 overflow-hidden py-24"
      initial={{opacity: 0, y: 56}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, margin: '-140px'}}
      transition={{duration: 0.85, ease: [0.22, 1, 0.36, 1]}}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_50%,rgba(124,58,237,0.18),transparent_30rem),radial-gradient(circle_at_82%_36%,rgba(200,155,60,0.15),transparent_28rem)]" />
      <div className="absolute inset-0 map-texture opacity-35" />
      <div className="fog-layer" />
      <motion.div
        className="pointer-events-none absolute -inset-x-24 top-1/4 h-56 rotate-[-8deg] bg-gradient-to-r from-transparent via-gold/10 to-transparent blur-2xl"
        style={{x: lightX}}
      />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {runes.map((rune, index) => (
          <motion.span
            key={rune}
            className="absolute font-heading text-xs uppercase tracking-[0.42em] text-gold/10 drop-shadow-[0_0_18px_rgba(124,58,237,0.32)] md:text-sm"
            style={{
              left: `${8 + index * 15}%`,
              top: `${18 + (index % 3) * 24}%`
            }}
            animate={{opacity: [0.08, 0.34, 0.08], y: [0, -18, 0], rotate: [0, 8, 0]}}
            transition={{duration: 8 + index, repeat: Infinity, ease: 'easeInOut', delay: index * 0.45}}
          >
            {rune}
          </motion.span>
        ))}
      </div>

      <div className="section-shell relative z-10 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <motion.div
          className="order-2 lg:order-1"
          initial={{opacity: 0, x: -34}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true, margin: '-120px'}}
          transition={{duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1]}}
        >
          <div className="rune-divider mb-6 max-w-sm" />
          <h2 className="font-heading text-4xl text-bone drop-shadow-[0_0_24px_rgba(200,155,60,0.18)] md:text-6xl">
            {data.title}
          </h2>
          <div className="mt-7 space-y-5 text-base leading-8 text-ash md:text-lg">
            {data.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="order-1 lg:order-2"
          initial={{opacity: 0, x: 34, scale: 0.97}}
          whileInView={{opacity: 1, x: 0, scale: 1}}
          viewport={{once: true, margin: '-120px'}}
          transition={{duration: 0.85, delay: 0.06, ease: [0.22, 1, 0.36, 1]}}
        >
          <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-gold/30 bg-ember shadow-[0_0_56px_rgba(200,155,60,0.22),0_0_90px_rgba(124,58,237,0.18)] md:min-h-[460px]">
            <motion.div className="absolute -inset-y-10 inset-x-0" style={{y: imageY}}>
              <Image
                src={data.image}
                alt={data.title}
                fill
                sizes="(min-width: 1024px) 54vw, 100vw"
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-night/55 via-transparent to-night/10" />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-bone/10" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/10 to-arcane/20 mix-blend-screen"
              animate={{opacity: [0.18, 0.34, 0.18]}}
              transition={{duration: 5.5, repeat: Infinity, ease: 'easeInOut'}}
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
