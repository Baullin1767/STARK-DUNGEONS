import Link from 'next/link';
import type {SiteData} from '@/data/site-data';

export function LanguageSwitcher({data}: {data: SiteData}) {
  return (
    <Link
      href={data.altHref}
      className="inline-flex h-10 items-center gap-2 gold-border bg-night/45 px-3 text-xs font-bold uppercase tracking-normal text-parchment transition hover:border-gold hover:text-bone"
      aria-label="Switch language"
    >
      <span className={data.locale === 'ru' ? 'text-gold' : 'text-ash'}>RU</span>
      <span className="h-4 w-px bg-gold/35" />
      <span className={data.locale === 'en' ? 'text-gold' : 'text-ash'}>EN</span>
    </Link>
  );
}
