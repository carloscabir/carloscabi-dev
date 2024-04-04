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

export const UI_LANG_MENU_KEYS = {
  en: 'lang.en',
  es: 'lang.es'
}

export const ui = {
  en: {
    [UI_NAV_KEYS.projects]: 'Projects',
    [UI_NAV_KEYS.about]: 'About me',
    [UI_NAV_KEYS.contact]: 'Contact',
    [UI_THEME_MENU_KEYS.light]: 'Light',
    [UI_THEME_MENU_KEYS.dark]: 'Dark',
    [UI_THEME_MENU_KEYS.system]: 'System',
    [UI_LANG_MENU_KEYS.en]: 'English',
    [UI_LANG_MENU_KEYS.es]: 'Spanish',
  },
  es: {
    [UI_NAV_KEYS.projects]: 'Proyectos',
    [UI_NAV_KEYS.about]: 'Sobre mí',  
    [UI_NAV_KEYS.contact]: 'Contacto',
    [UI_THEME_MENU_KEYS.light]: 'Claro',
    [UI_THEME_MENU_KEYS.dark]: 'Oscuro',
    [UI_THEME_MENU_KEYS.system]: 'Sistema',
    [UI_LANG_MENU_KEYS.en]: 'Inglés',
    [UI_LANG_MENU_KEYS.es]: 'Español',
  },
} as const;