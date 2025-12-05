import readlineSync from 'readline-sync'
import { greetUser } from '../cli.js'

const isEven = num => num % 2 === 0

export const playEvenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  const name = greetUser()

  let correctCount = 0

  while (correctCount < 3) {
    const number = Math.floor(Math.random() * 100)
    console.log(`Question: ${number}`)

    const answer = readlineSync.question('Your answer: ')

    const correctAnswer = isEven(number) ? 'yes' : 'no'

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }

    console.log('Correct!')
    correctCount += 1
  }

  console.log(`Congratulations, ${name}!`)
}
