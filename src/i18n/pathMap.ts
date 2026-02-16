/**
 * Maps EN paths to DE paths for the language switcher.
 * Add entries here when page slugs differ between languages.
 */
const pathMap: Record<string, string> = {
  "/": "/de",
  "/about": "/de/about",
  "/coaching": "/de/coaching",
  "/services": "/de/services",
  "/projects": "/de/projects",
  "/blog": "/de/blog",
  "/adventures": "/de/adventures",
  "/contact": "/de/contact",
};

/** Reverse map for DE → EN lookup */
const reverseMap: Record<string, string> = Object.fromEntries(
  Object.entries(pathMap).map(([en, de]) => [de, en]),
);

export function getLocalizedPathFromMap(
  currentPath: string,
  targetLang: "en" | "de",
): string {
  const cleanPath = currentPath.replace(/\/$/, "") || "/";

  if (targetLang === "de") {
    // EN → DE: look up in pathMap, or prepend /de
    return pathMap[cleanPath] ?? `/de${cleanPath}`;
  }

  // DE → EN: look up in reverseMap, or strip /de prefix
  const stripped = cleanPath.replace(/^\/de/, "");
  return reverseMap[cleanPath] ?? (stripped || "/");
}
