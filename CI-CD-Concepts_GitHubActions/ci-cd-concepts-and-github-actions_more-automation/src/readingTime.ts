import { countWords } from "./countWords";

const WORDS_PER_MINUTE = 200;

export function readingTime(text: string): string {
  const minutes = Math.max(1, Math.ceil(countWords(text) / WORDS_PER_MINUTE));
  return `${minutes} min`;
}
