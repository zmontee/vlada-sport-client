import { BASE_URL } from "@/lib/axios";

export const pluralize = (count: number, words: string[]) => {
  const cases = [2, 0, 1, 1, 1, 2];
  return `${count} ${words[count % 100 > 4 && count % 100 < 20 ? 2 : cases[Math.min(count % 10, 5)]]}`;
};

export const getCDNUrl = (url: string) =>
  `${BASE_URL}${url.startsWith("/") ? "" : "/"}${url}`;
