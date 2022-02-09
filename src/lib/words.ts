import { JOKES, WORDS } from '../constants/wordlist'
import { VALIDGUESSES } from '../constants/validGuesses'

export const isWordInWordList = (word: string) => {
  return WORDS.includes(word) || VALIDGUESSES.includes(word)
}

export const isWinningWord = (word: string) => {
  return solution === word
}

export const getWordOfDay = () => {
// February 6, 2022 Game Epoch
const epochMs = new Date('February 6, 2022 00:00:00').valueOf()
const now = Date.now()
const msInDay = 86400000
const index = Math.floor((now - epochMs) / msInDay)
const nextday = (index + 1) * msInDay + epochMs
const joke = JOKES[index % JOKES.length]

  return {
    solution: joke.solution,
    question: joke.question,
    pre: joke.pre,
    post: joke.post,
    solutionIndex: index,
    tomorrow: nextday,
  }
  
}

export const { solution, question, pre, post, solutionIndex, tomorrow } = getWordOfDay()
