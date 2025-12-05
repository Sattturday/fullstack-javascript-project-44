import app from '../index.js'
import { getRandomNumber } from '../utils/getRandomNumber.js'

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const isPrime = (n) => {
  if (n < 2) return false
  if (n === 2) return true
  if (n % 2 === 0) return false

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false
  }

  return true
}

const generateRound = () => {
  const number = getRandomNumber(99) + 2
  const correctAnswer = isPrime(number) ? 'yes' : 'no'

  return { question: number.toString(), correctAnswer }
}

export default () => app(gameDescription, generateRound)
