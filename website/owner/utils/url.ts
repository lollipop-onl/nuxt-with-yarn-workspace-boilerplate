import { PAGES } from '@/const';

/**
 * ページのURLを取得する
 * @param key ページのパス
 * @param params パスパラメータ
 */
export const url = (key: keyof typeof PAGES, params: Record<string, string | number | boolean> = {}) => {
  const { [key]: originalUrl } = PAGES;

  if (!originalUrl) {
    return '';
  }

  return originalUrl
    .split('/')
    .map((chunk) => chunk.replace(/^_(.+)$/, (matched, p1) => (params[p1] != null ? `${params[p1]}` : matched)))
    .join('/')
    .replace(/\/+/g, '/');
};
