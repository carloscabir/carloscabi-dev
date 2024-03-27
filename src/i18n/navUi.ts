export const languages = {
  en: 'English',
  es: 'Spanish',
};

export const defaultLang = 'en';

export const UI_NAV_KEYS = {
  projects: 'nav.projects',
  about: 'nav.about',
  contact: 'nav.contact'
} as const

export const UI_THEME_MENU_KEYS = {
  light: 'theme.light',
  dark: 'theme.dark',
  system: 'theme.system'
} as const

export const ui = {
  en: {
    [UI_NAV_KEYS.projects]: 'Projects',
    [UI_NAV_KEYS.about]: 'About me',
    [UI_NAV_KEYS.contact]: 'Contact',
    [UI_THEME_MENU_KEYS.light]: 'Light',
    [UI_THEME_MENU_KEYS.dark]: 'Dark',
    [UI_THEME_MENU_KEYS.system]: 'System',
  },
  es: {
    [UI_NAV_KEYS.projects]: 'Proyectos',
    [UI_NAV_KEYS.about]: 'Sobre mí',  
    [UI_NAV_KEYS.contact]: 'Contacto',
    [UI_THEME_MENU_KEYS.light]: 'Claro',
    [UI_THEME_MENU_KEYS.dark]: 'Oscuro',
    [UI_THEME_MENU_KEYS.system]: 'Sistema',
  },
} as const;