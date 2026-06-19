'use client';

import {useState} from 'react';
import {motion} from 'framer-motion';
import Image from 'next/image';
import {ChevronDown, Gem, Mail, Map, ScrollText, Shield, Swords} from 'lucide-react';
import type {Locale, SiteData} from '@/data/site-data';
import {AnimatedSection} from '@/components/animated-section';
import {BookingForm} from '@/components/booking-form';
import {CampaignCard} from '@/components/campaign-card';
import {DiceRoller} from '@/components/dice-roller';
import {FantasyCard} from '@/components/fantasy-card';
import {Header} from '@/components/header';
import {MagicButton} from '@/components/magic-button';
import {PortraitFrame} from '@/components/portrait-frame';
import {ScrollProgress} from '@/components/scroll-progress';
import {WorldOfLux} from '@/components/sections/world-of-lux';

const icons = [ScrollText, Swords, Map, Shield, Gem, Mail];

export function HomePage({data}: {locale: Locale; data: SiteData}) {
  const [filter, setFilter] = useState('all');
  const filteredCampaigns = data.campaigns.filter((campaign) => filter === 'all' || campaign.tags.includes(filter));

  return (
    <main className="fantasy-bg min-h-screen overflow-hidden">
      <ScrollProgress />
      <Header data={data} />
      <Hero data={data} />

      <AnimatedSection id="about" className="relative py-24">
        <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <PortraitFrame />
          <div>
            <p className="font-heading text-sm uppercase text-gold">{data.profile.role}</p>
            <h2 className="mt-3 font-heading text-4xl text-bone md:text-6xl">{data.profile.title}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ash">{data.profile.intro}</p>
            <FantasyCard className="mt-8">
              <h3 className="font-heading text-2xl text-parchment">{data.profile.specTitle}</h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {data.profile.specs.map((spec) => (
                  <p key={spec} className="border-l border-gold/50 pl-3 text-sm text-bone">
                    {spec}
                  </p>
                ))}
              </div>
            </FantasyCard>
            <div className="mt-5 flex flex-wrap gap-3">
              {data.profile.stats.map((stat) => (
                <span key={stat} className="gold-border bg-night/45 px-3 py-2 text-xs uppercase text-ash">
                  {stat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="formats" className="py-20">
        <SectionTitle title={data.servicesTitle} />
        <div className="section-shell mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {data.services.map(([title, desc, duration, players], index) => {
            const Icon = icons[index % icons.length];
            return (
              <FantasyCard key={title} className="group transition duration-300 hover:-translate-y-2 hover:border-gold">
                <Icon className="h-8 w-8 text-gold" />
                <h3 className="mt-5 font-heading text-2xl text-bone">{title}</h3>
                <p className="mt-3 min-h-24 text-sm leading-6 text-ash">{desc}</p>
                <div className="mt-5 flex justify-between border-t border-gold/15 pt-4 text-xs uppercase text-parchment">
                  <span>{duration}</span>
                  <span>{players}</span>
                </div>
                <a href="#contact" className="mt-5 inline-block text-sm font-semibold text-gold hover:text-parchment">
                  {data.serviceCta}
                </a>
              </FantasyCard>
            );
          })}
        </div>
      </AnimatedSection>

      <AnimatedSection id="campaigns" className="py-20">
        <SectionTitle title={data.campaignsTitle} />
        <div className="section-shell mt-8 flex flex-wrap justify-center gap-3">
          {data.filters.map(([id, label]) => (
            <button
              key={id}
              onClick={() => setFilter(id)}
              className={`gold-border min-h-10 px-4 text-sm transition ${
                filter === id ? 'bg-gold text-night' : 'bg-night/45 text-ash hover:border-gold hover:text-bone'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <motion.div layout className="section-shell mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredCampaigns.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </motion.div>
      </AnimatedSection>

      <AnimatedSection className="py-20">
        <SectionTitle title={data.officialAdventures.title} />
        <p className="section-shell mt-5 max-w-4xl text-center text-base leading-7 text-ash">
          {data.officialAdventures.subtitle}
        </p>
        <div className="section-shell mt-10 grid gap-5 md:grid-cols-3">
          {data.officialAdventures.items.map(([title, description]) => (
            <FantasyCard key={title}>
              <h3 className="font-heading text-2xl text-bone">{title}</h3>
              <p className="mt-4 text-sm leading-6 text-ash">{description}</p>
            </FantasyCard>
          ))}
        </div>
      </AnimatedSection>

      <WorldOfLux data={data.worldLux} />

      <AnimatedSection className="py-20">
        <div className="section-shell">
          <DiceRoller data={data} />
        </div>
      </AnimatedSection>

      <AnimatedSection id="reviews" className="py-20">
        <SectionTitle title={data.reviewsTitle} />
        <div className="section-shell mt-10 grid gap-5 md:grid-cols-3">
          {data.reviews.map(([name, quote]) => (
            <FantasyCard key={name}>
              <p className="text-lg leading-8 text-parchment">“{quote}”</p>
              <p className="mt-5 font-heading text-gold">{name}</p>
            </FantasyCard>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection id="pricing" className="py-20">
        <SectionTitle title={data.pricingTitle} />
        <p className="section-shell mt-4 text-center text-base text-ash">{data.pricingSubtitle}</p>
        <div className="section-shell mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {data.pricing.map(([title, desc, price], index) => (
            <FantasyCard key={title} className={index === 3 ? 'border-gold bg-gold/10' : ''}>
              <h3 className="font-heading text-3xl text-bone">{title}</h3>
              <p className="mt-4 min-h-24 text-sm leading-6 text-ash">{desc}</p>
              <p className="mt-7 flex flex-wrap items-baseline gap-x-2 gap-y-1 font-heading text-3xl text-gold 2xl:text-4xl">
                {price.split('·').map((part, partIndex) => (
                  <span key={part} className="whitespace-nowrap">
                    {partIndex > 0 && <span aria-hidden="true">· </span>}
                    {part.trim()}
                  </span>
                ))}
              </p>
              <MagicButton href="#contact" className="mt-7 w-full">
                {data.cta}
              </MagicButton>
            </FantasyCard>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20">
        <SectionTitle title={data.faqTitle} />
        <div className="section-shell mt-10 grid items-start gap-4 md:grid-cols-2">
          {data.faq.map(([question, answer]) => (
            <details key={question} className="group gold-border bg-ember/65 p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-xl text-bone">
                {question}
                <ChevronDown className="h-5 w-5 text-gold transition group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-sm leading-6 text-ash">{answer}</p>
            </details>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection id="contact" className="py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="font-heading text-4xl text-bone md:text-6xl">{data.booking.title}</h2>
            <p className="mt-5 text-lg leading-8 text-ash">{data.booking.subtitle}</p>
            <div className="rune-divider mt-8" />
          </div>
          <FantasyCard>
            <BookingForm data={data} />
          </FantasyCard>
        </div>
      </AnimatedSection>

      <footer className="border-t border-gold/15 py-10">
        <div className="section-shell flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-heading text-2xl text-bone">
              STARK <span className="text-gold">DUNGEONS</span>
            </p>
            <p className="mt-2 text-sm text-ash">{data.footer}</p>
          </div>
          <p className="text-sm text-ash">© 2026 Alexandr Starkov</p>
        </div>
      </footer>

    </main>
  );
}

function Hero({data}: {data: SiteData}) {
  return (
    <section className="particle-field relative flex min-h-[88vh] items-center overflow-hidden pt-24">
      <Image
        src="/images/hero-table.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-[0.48]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-night via-night/72 to-night/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-night via-transparent to-night/20" />
      <div className="fog-layer" />
      <motion.div
        className="absolute inset-0 opacity-35"
        animate={{scale: [1, 1.05, 1], x: [0, -12, 0]}}
        transition={{duration: 18, repeat: Infinity, ease: 'easeInOut'}}
      >
        <div className="h-full w-full map-texture" />
      </motion.div>
      <div className="section-shell relative z-10 py-16">
        <div className="max-w-4xl">
          <motion.h1
            initial={{opacity: 0, y: 32}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            className="max-w-4xl font-heading text-4xl leading-tight text-bone drop-shadow-[0_0_22px_rgba(200,155,60,0.18)] md:text-6xl xl:text-7xl"
          >
            {data.hero.title}
          </motion.h1>
          <motion.p
            initial={{opacity: 0, y: 24}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8, delay: 0.14}}
            className="mt-7 max-w-2xl text-lg leading-8 text-ash md:text-xl"
          >
            {data.hero.subtitle}
          </motion.p>
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8, delay: 0.26}}
            className="mt-9 flex flex-wrap gap-4"
          >
            <MagicButton href="#contact">{data.hero.primary}</MagicButton>
            <MagicButton href="#campaigns" variant="secondary">
              {data.hero.secondary}
            </MagicButton>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-night to-transparent" />
    </section>
  );
}

function SectionTitle({title}: {title: string}) {
  return (
    <div className="section-shell text-center">
      <div className="rune-divider mx-auto mb-6 max-w-md" />
      <h2 className="font-heading text-4xl text-bone md:text-6xl">{title}</h2>
    </div>
  );
}
