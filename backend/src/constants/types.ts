export interface WordMeaning {
  word: string;
  meaning: string;
}

export interface Hadith {
  id: string;
  title: string;
  hadeeth: string;
  attribution: string;
  grade: string;
  explanation: string;
  hints: string[];
  categories: string[];
  translations: string[];
  words_meanings: WordMeaning[];
  reference: string;
}

export interface Category {
  id: string;
  title: string;
  hadeeths_count: string;
  parent_id: string | null;
}
