import readlineSync from 'readline-sync'
import { getUserName } from './utils/getUserName.js'

const ROUNDS_COUNT = 3

const app = (gameDescription, generateRound) => {
  console.log('Welcome to the Brain Games!')

  const name = getUserName()

  console.log(`Hello, ${name}!`)
  console.log(gameDescription)

  for (let i = 0; i < ROUNDS_COUNT; i++) {
    const { question, correctAnswer } = generateRound()

    console.log(`Question: ${question}`)
    const answer = readlineSync.question('Your answer: ')

    if (answer !== correctAnswer.toString()) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }

    console.log('Correct!')
  }

  console.log(`Congratulations, ${name}!`)
}

export default app
