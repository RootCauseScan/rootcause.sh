export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
  details?: string;
}

export interface Stat {
  value: string;
  label: string;
  description?: string;
}

export interface RuleFormat {
  name: string;
  description: string;
  code: string;
  example?: string;
}

export interface InstallMethod {
  name: string;
  command: string;
  description?: string;
}

export interface Language {
  code: 'es' | 'en';
  name: string;
  flag: string;
}

export interface LanguageContextType {
  language: 'es' | 'en';
  setLanguage: (lang: 'es' | 'en') => void;
  t: (key: string) => any;
}