'use client';

import {useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import Image from 'next/image';
import {ChevronDown, Gem, Mail, Map, ScrollText, Shield, Swords, X} from 'lucide-react';
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

const icons = [ScrollText, Swords, Map, Shield, Gem, Mail];

export function HomePage({data}: {locale: Locale; data: SiteData}) {
  const [filter, setFilter] = useState('all');
  const [lightbox, setLightbox] = useState<string | null>(null);
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
          <AnimatePresence mode="popLayout">
            {filteredCampaigns.map((campaign) => (
              <CampaignCard key={campaign.id} campaign={campaign} />
            ))}
          </AnimatePresence>
        </motion.div>
      </AnimatedSection>

      <AnimatedSection className="py-20">
        <SectionTitle title={data.timelineTitle} />
        <div className="section-shell mt-12 grid gap-4">
          {data.timeline.map((item, index) => (
            <motion.div
              key={item}
              initial={{opacity: 0, x: index % 2 ? 44 : -44}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true}}
              transition={{duration: 0.55, delay: index * 0.04}}
              className="grid items-center gap-4 md:grid-cols-[1fr_60px_1fr]"
            >
              <div className={index % 2 ? 'hidden md:block' : 'md:text-right'}>
                {index % 2 === 0 && <TimelineCard index={index} item={item} />}
              </div>
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-gold/50 bg-ember font-heading text-gold">
                {index + 1}
              </div>
              <div>{index % 2 === 1 && <TimelineCard index={index} item={item} />}</div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20">
        <div className="section-shell">
          <DiceRoller data={data} />
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20">
        <SectionTitle title={data.galleryTitle} />
        <div className="section-shell mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {data.gallery.map((item, index) => (
            <button
              key={item}
              onClick={() => setLightbox(item)}
              className="mb-5 block w-full break-inside-avoid overflow-hidden clip-fantasy border border-gold/25 bg-ember text-left shadow-glow"
            >
              <div
                className="h-56 transition duration-500 hover:scale-105"
                style={{
                  background:
                    index % 2
                      ? 'linear-gradient(135deg, rgba(124,58,237,.28), rgba(10,9,16,.9)), radial-gradient(circle at 50% 40%, rgba(232,214,176,.18), transparent 32%)'
                      : 'linear-gradient(135deg, rgba(200,155,60,.24), rgba(36,26,18,.92)), radial-gradient(circle at 42% 38%, rgba(139,46,46,.26), transparent 30%)'
                }}
              />
              <p className="p-4 font-heading text-xl text-bone">{item}</p>
            </button>
          ))}
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
        <div className="section-shell mt-10 grid gap-5 lg:grid-cols-3">
          {data.pricing.map(([title, desc, price], index) => (
            <FantasyCard key={title} className={index === 1 ? 'border-gold bg-gold/10' : ''}>
              <h3 className="font-heading text-3xl text-bone">{title}</h3>
              <p className="mt-4 min-h-24 text-sm leading-6 text-ash">{desc}</p>
              <p className="mt-7 font-heading text-4xl text-gold">{price}</p>
              <MagicButton href="#contact" className="mt-7 w-full">
                {data.cta}
              </MagicButton>
            </FantasyCard>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20">
        <SectionTitle title={data.faqTitle} />
        <div className="section-shell mt-10 grid gap-4 md:grid-cols-2">
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
          <p className="text-sm text-ash">© 2026 Alexander Starkov</p>
        </div>
      </footer>

      {lightbox && (
        <div className="fixed inset-0 z-[90] grid place-items-center bg-night/90 p-5 backdrop-blur-md" onClick={() => setLightbox(null)}>
          <div className="relative w-full max-w-3xl clip-fantasy border border-gold/40 bg-ember p-6 shadow-arcane">
            <button className="absolute right-4 top-4 text-gold" onClick={() => setLightbox(null)} aria-label="Close">
              <X className="h-6 w-6" />
            </button>
            <div className="h-[48vh] bg-radial-rune map-texture" />
            <p className="mt-5 font-heading text-3xl text-bone">{lightbox}</p>
          </div>
        </div>
      )}
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
      <div className="section-shell relative z-10 grid items-center gap-10 py-16 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
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
        <div className="relative min-h-[360px] lg:min-h-[420px]">
          <motion.div
            animate={{y: [0, -12, 0], rotate: [0, 1, 0]}}
            transition={{duration: 6, repeat: Infinity, ease: 'easeInOut'}}
            className="absolute left-4 top-4 h-36 w-36 clip-fantasy border border-gold/35 bg-umber/80 shadow-glow"
          />
          <motion.div
            animate={{y: [0, 16, 0], rotate: [0, -1.5, 0]}}
            transition={{duration: 7, repeat: Infinity, ease: 'easeInOut'}}
            className="absolute bottom-10 right-6 h-44 w-44 rounded-full border border-arcane/45 bg-radial-rune shadow-arcane"
          />
          <div className="absolute inset-8 clip-fantasy border border-gold/25 bg-ember/55 p-8 shadow-glow backdrop-blur-sm">
            <div className="h-full map-texture">
              <div className="grid h-full place-items-center text-center">
                <div>
                  <p className="font-heading text-5xl text-gold">d20</p>
                  <div className="rune-divider my-5" />
                  <p className="text-sm uppercase text-parchment">STARK DUNGEONS</p>
                </div>
              </div>
            </div>
          </div>
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

function TimelineCard({item}: {index: number; item: string}) {
  return (
    <div className="clip-fantasy border border-gold/25 bg-ember/70 p-5">
      <p className="font-heading text-2xl text-bone">{item}</p>
    </div>
  );
}
