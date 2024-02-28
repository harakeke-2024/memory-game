interface Cards {
  text: string
}

interface Games {
  image: string
  cards: Cards[]
}

export type GameData = Record<string, Games>

const data: GameData = {
  React: {
    image: 'react.jpg',
    cards: [
      { text: 'Boundaries' },
      { text: 'Reliability ' },
      { text: 'Accountability ' },
      { text: 'Vault' },
      { text: 'Integrity' },
      { text: 'Non Judgement' },
      { text: 'Generosity ' },
    ],
  },
  Human: {
    image: 'human-skills.jpg',
    cards: [
      { text: 'Boundaries' },
      { text: 'Reliability ' },
      { text: 'Accountability ' },
      { text: 'Vault' },
      { text: 'Integrity' },
      { text: 'Non Judgement' },
      { text: 'Generosity ' },
    ],
  },
}

export default data
