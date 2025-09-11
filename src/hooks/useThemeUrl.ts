import { useTheme } from '../contexts/ThemeContext';

export const useThemeUrl = () => {
  const { theme } = useTheme();
  
  const addThemeToUrl = (url: string): string => {
    try {
      const urlObj = new URL(url);
      urlObj.searchParams.set('theme', theme);
      return urlObj.toString();
    } catch {
      // Si no es una URL válida, devolver tal como está
      return url;
    }
  };
  
  return { addThemeToUrl };
};
