'use client';

import {useState} from 'react';
import Link from 'next/link';
import {Menu, X} from 'lucide-react';
import type {SiteData} from '@/data/site-data';
import {LanguageSwitcher} from '@/components/language-switcher';
import {MagicButton} from '@/components/magic-button';

export function Header({data}: {data: SiteData}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold/10 bg-night/55 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between gap-5">
        <Link href={data.locale === 'ru' ? '/' : '/en'} className="font-heading text-xl font-bold text-bone">
          STARK <span className="text-gold">DUNGEONS</span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {data.nav.map((item, index) => (
            <a key={item} href={`#${data.navIds[index]}`} className="text-sm text-ash transition hover:text-gold">
              {item}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher data={data} />
          <MagicButton href="#contact">{data.cta}</MagicButton>
        </div>
        <button
          className="gold-border grid h-11 w-11 place-items-center bg-night/60 text-bone lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Open menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 top-20 z-40 bg-night/95 p-6 backdrop-blur-xl lg:hidden">
          <div className="particle-field relative flex h-full flex-col justify-between overflow-hidden clip-fantasy border border-gold/25 p-7">
            <nav className="relative z-10 flex flex-col gap-5">
              {data.nav.map((item, index) => (
                <a
                  key={item}
                  href={`#${data.navIds[index]}`}
                  onClick={() => setOpen(false)}
                  className="font-heading text-3xl text-bone transition hover:text-gold"
                >
                  {item}
                </a>
              ))}
            </nav>
            <div className="relative z-10 flex flex-wrap gap-3">
              <LanguageSwitcher data={data} />
              <MagicButton href="#contact" onClick={() => setOpen(false)}>
                {data.cta}
              </MagicButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
