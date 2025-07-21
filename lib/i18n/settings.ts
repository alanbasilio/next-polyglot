export const fallbackLng = 'en';
export const languages = ['en', 'pt'];
export const defaultNS = 'common';

export const getOptions = (lng = fallbackLng, ns = defaultNS) => {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
};
