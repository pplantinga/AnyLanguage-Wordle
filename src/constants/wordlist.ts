import { CONFIG } from './config'

export const JOKES = [
  {solution: 'ABCDE', question:'Joke text 1', pre:'Pre 1', post:'post 1.'},
  {solution: 'FGHIJ', question:'Joke text 2', pre:'Pre 2', post:'post 2.'},
  {solution: 'KLMNO', question:'Joke text 3', pre:'Pre 3', post:'post 3.'},
]

export const WORDS = JOKES.map(joke => joke.answer).flat()

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
