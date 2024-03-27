export const languages = {
  en: 'English',
  es: 'Spanish',
};

export const defaultLang = 'en';

export const UI_NAV_KEYS = {
  projects: "nav.projects",
  about: "nav.about",
  contact: "nav.contact"
} as const

export const ui = {
  en: {
    'nav.projects': 'Projects',
    'nav.about': 'About me',
    'nav.contact': 'Contact',
  },
  es: {
    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre mí',  
    'nav.contact': 'Contacto',
  },
} as const;