import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({requestLocale}) => {
  const locale = await requestLocale;
  const safeLocale = locale === 'en' ? 'en' : 'ru';

  return {
    locale: safeLocale,
    messages: (await import(`../messages/${safeLocale}.json`)).default
  };
});
