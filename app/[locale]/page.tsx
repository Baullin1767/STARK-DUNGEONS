import {getTranslations, setRequestLocale} from 'next-intl/server';
import type {Metadata} from 'next';
import {HomePage} from '@/components/home-page';
import {getSiteData} from '@/data/site-data';

type PageProps = {
  params: Promise<{locale: 'ru' | 'en'}>;
};

export async function generateMetadata({params}: PageProps): Promise<Metadata> {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations({locale, namespace: 'seo'});
  const path = locale === 'ru' ? '/' : '/en';

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: path,
      languages: {
        ru: '/',
        en: '/en'
      }
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
      locale: locale === 'ru' ? 'ru_RU' : 'en_US',
      url: path,
      images: ['/images/alexander.jpg']
    }
  };
}

export default async function Page({params}: PageProps) {
  const {locale} = await params;
  setRequestLocale(locale);
  return <HomePage locale={locale} data={getSiteData(locale)} />;
}
