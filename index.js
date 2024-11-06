const letters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
]

const symbols = [
  '~',
  '`',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '-',
  '+',
  '=',
  '{',
  '[',
  '}',
  ']',
  ',',
  '|',
  ':',
  ';',
  '<',
  '>',
  '.',
  '?',
  '/',
]

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

const generatePasswordsBtn = document.querySelector('.generate-passwords')
const passwordOneEl = document.querySelector('.password-1')
const passwordTwoEl = document.querySelector('.password-2')
const copyPwdOneEL = document.querySelector('.copy-pw-1')
const copyPwdTwoEL = document.querySelector('.copy-pw-2')
const tooltipOne = document.getElementById('tooltip-1')
const tooltipTwo = document.getElementById('tooltip-2')
const passwordLengthEl = document.getElementById('password-length')
const numbersCheckboxEl = document.getElementById('toggle-numbers')
const symbolsCheckboxEl = document.getElementById('toggle-symbols')

const getRandomNum = (range = 1) => Math.floor(Math.random() * range)

let randomPasswordOne = ''
let randomPasswordTwo = ''

const generatePasswords = (passwordLength = 6) => {
  const characters = [...letters]

  if (numbersCheckboxEl.checked) {
    characters.push(...numbers)
  }

  if (symbolsCheckboxEl.checked) {
    characters.push(...symbols)
  }

  randomPasswordOne = ''
  randomPasswordTwo = ''

  for (let i = 0; i < passwordLength; i++) {
    randomPasswordOne += characters[getRandomNum(characters.length)]
    randomPasswordTwo += characters[getRandomNum(characters.length)]
  }
}

generatePasswordsBtn.addEventListener('click', () => {
  const passwordLength = passwordLengthEl.value
  generatePasswords(passwordLength)
  passwordOneEl.textContent = randomPasswordOne
  passwordTwoEl.textContent = randomPasswordTwo
})

copyPwdOneEL.addEventListener('click', () => {
  navigator.clipboard.writeText(randomPasswordOne)
  tooltipOne.textContent = 'Copied: ' + randomPasswordOne
})

copyPwdTwoEL.addEventListener('click', () => {
  navigator.clipboard.writeText(randomPasswordTwo)
  tooltipTwo.textContent = 'Copied: ' + randomPasswordTwo
})

copyPwdOneEL.addEventListener('mouseout', () => {
  tooltipOne.textContent = 'Copy to clipboard'
})

copyPwdTwoEL.addEventListener('mouseout', () => {
  tooltipTwo.textContent = 'Copy to clipboard'
})
