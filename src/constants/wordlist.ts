import { CONFIG } from './config'

export const JOKES = [
  {solution: 'CORNY', question:'What do you call a farm that makes bad jokes?', pre:'', post:''},
  {solution: 'STICK', question:'What’s brown and sticky?', pre:'A', post:''},
  {solution: 'GUMMY', question:'What is a little bear with no teeth called?', pre:'A', post:'bear'},
  {solution: 'NEIGH', question:'How did the horse vote?', pre:'', post:''},
  {solution: 'KITTY', question:'What did the winner get at the humane society poker fundraiser?', pre:'The', post:''},
  {solution: 'PAUSE', question:'How does a cat stop a Netflix show?', pre:'With', post:''},
  {solution: 'NASTY', question:'What do you call a disgusting beverage served to a famous rapper?', pre:'', post:''},
  {solution: 'HARRY', question:'What do you call a wizard who uses a baldness reversal charm?', pre:'', post:''},
  {solution: 'BAYOU', question:'What do you say to someone leaving for New Orleans?', pre:'', post:''},
  {solution: 'POKER', question:'How do you wake up Lady Gaga?', pre:'', post:'face'},
  {solution: 'ELOPE', question:'Why couldn’t the muskmelon get married quickly?', pre:'It can’t', post:''},
  {solution: 'ALIKE', question:'What do you call two social media posts that each have one upvote?', pre:'', post:''},
  {solution: 'EERIE', question:'What do you call a ghost story about the Great Lakes?', pre:'', post:''},
  {solution: 'ARSON', question:'What did the parents say when they noticed their boy burning an abandoned building?', pre:'That’s', post:''},
  {solution: 'AWARD', question:'What do you give an excellent hospital that wants to expand?', pre:'', post:''},
  {solution: 'REBAR', question:'What do you call it when you become a building code lawyer a second time?', pre:'', post:''},
  {solution: 'AMAZE', question:'What was the farmer hoping their bigger and better corn Labyrinth would do?', pre:'', post:''},
  {solution: 'EXCEL', question:'What’s the best you can hope to do in a Microsoft products course?', pre:'', post:''},
  {solution: 'ARRAY', question:'What do you call a bunch of neatly arranged light waves?', pre:'', post:''},
  {solution: 'FORTY', question:'Why have two score mugs?', pre:'', post:''},
  {solution: 'MOUSE', question:'It’s a cat’s favorite part of a computer.', pre:'The', post:''},
  {solution: 'NOVEL', question:'How was the new book?', pre:'', post:''},
  {solution: 'URINE', question:'What do you tell someone who passes the peeing-based hazing ritual?', pre:'', post:''},
  {solution: 'SCENT', question:'What do you call a smelly penny?', pre:'', post:''},
  {solution: 'MANGO', question:'How do you encourage a fellow peeling a tropical fruit?', pre:'', post:''},
  {solution: 'SALTY', question:'How did the restaurant patron feel about their food being over seasoned?', pre:'', post:''},
  {solution: 'CHARD', question:'Which greens taste best when burnt?', pre:'', post:''},
  {solution: 'SWEET', question:'What did the hotel guest say when they found out they got upgraded to the nicest room?', pre:'', post:''},
  {solution: 'ODDER', question:'What do you call a weird aquatic mammal?', pre:'', post:''},
  {solution: 'FUNKY', question:'What do you need one to open a goofy but enjoyable lock.', pre:'A', post:''}
]

export const WORDS = JOKES.map(joke => joke.solution).flat()

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
