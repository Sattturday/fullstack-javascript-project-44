import app from '../index.js'
import { getRandomNumber } from '../utils/getRandomNumber.js'

const gameDescription = 'What number is missing in the progression?'

const generateProgression = (length, start, step) => {
  const progression = []
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step)
  }
  return progression
}

const generateRound = () => {
  const length = getRandomNumber(6) + 5
  const start = getRandomNumber(50)
  const step = getRandomNumber(10) + 1

  const progression = generateProgression(length, start, step)
  const hiddenIndex = getRandomNumber(length)
  const correctAnswer = progression[hiddenIndex]

  const questionArray = progression.map((num, index) => (index === hiddenIndex ? '..' : num))
  const question = questionArray.join(' ')

  return { question, correctAnswer }
}

export default () => app(gameDescription, generateRound)
