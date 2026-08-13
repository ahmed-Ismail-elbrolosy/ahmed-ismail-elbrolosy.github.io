export function sitePath(path = '') {
  const base = import.meta.env.BASE_URL;
  const normalized = path.replace(/^\/+|\/+$/g, '');

  return normalized ? `${base}${normalized}/` : base;
}

export function assetPath(path: string) {
  const base = import.meta.env.BASE_URL;
  return `${base}${path.replace(/^\/+/, '')}`;
}

export function homeSectionPath(section: string, currentPath?: string) {
  const hash = `#${section}`;
  const normalizedPath = currentPath?.replace(/\/$/, '');
  const homePath = sitePath().replace(/\/$/, '');

  return !normalizedPath || normalizedPath === homePath ? hash : `${sitePath()}${hash}`;
}
