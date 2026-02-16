import { ui, defaultLang, type Lang } from "./ui";

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function getLocalizedPath(path: string, lang: Lang): string {
  if (lang === defaultLang) {
    return path;
  }
  // Remove leading /de/ if present, then prepend /de
  const cleanPath = path.replace(/^\/de\/?/, "/");
  return `/de${cleanPath === "/" ? "" : cleanPath}`;
}

export function getAlternateLang(lang: Lang): Lang {
  return lang === "en" ? "de" : "en";
}
