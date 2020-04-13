const alphabetLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const numbers = '1234567890'.split('')
const reservedWords = 'a an from of on the to'.split(' ')

const titleConversion = (inputTitleString) => {
  const wordsArray = inputTitleString.split(' ')
  const formattedTitle = formatWords(wordsArray).join(' ')
  return formattedTitle
}

const processReservedWord = (currentWord, index) => {
  if (index !== 0) {
    return currentWord.toLowerCase()
  } else {
    return currentWord.charAt(0) + currentWord.slice(1).toLowerCase()
  }
}

// Find first alphabet index
const fetchFirstAlphabetIndex = (word) => {
  for (let i = 0; i < word.length; i++) {
    if (alphabetLetters.indexOf(word[i]) !== -1) {
      if (i > 0 && numbers.indexOf(word[i - 1]) !== -1) return i - 1
      return i
    }
  }
}

const processRegularText = (firstAlphabetIndex, currentWord) => {
  if (firstAlphabetIndex === 0) {
    return currentWord.charAt(0) + currentWord.slice(1).toLowerCase()
  } else {
    return currentWord.slice(0, firstAlphabetIndex + 1) + currentWord.slice(firstAlphabetIndex + 1).toLowerCase()
  }
}

const processWordsWithSlash = (translatedWord) => {
  const splitWords = translatedWord.split('/')
  for (let j = 0; j < splitWords.length; j++) {
    splitWords[j] = splitWords[j].charAt(0).toUpperCase() + splitWords[j].slice(1)
  }
  return splitWords.join('/')
}

const formatWords = (inputArray) => {
  for (let index = 0; index < inputArray.length; index++) {
    const currentWord = inputArray[index]
    if ((isAcronym(currentWord))) {
      continue
    } else {
      // Currentword is a reserved word
      if (reservedWords.indexOf(currentWord.toLowerCase()) !== -1) {
        inputArray[index] = processReservedWord(currentWord, index)
      } else if (isRomanNumeral(currentWord)) {
        continue
      } else {
        let translatedWord = currentWord
        if (currentWord.length > 1) {
          const firstAlphabetIndex = fetchFirstAlphabetIndex(currentWord)
          translatedWord = processRegularText(firstAlphabetIndex, currentWord)
        }
        if (translatedWord.indexOf('/') !== -1) translatedWord = processWordsWithSlash(translatedWord)
        inputArray[index] = translatedWord
      }
    }
  }
  return inputArray
}

const isAcronym = (word) => {
  // Word should be started by a letter
  // Every letter should be seperated by one '.'
  // Letters should be at even index and '.' should be at odd index

  const wordLetters = word.split('')
  for (let index = 0; index < wordLetters.length; index++) {
    const currentLetter = wordLetters[index]
    if (index % 2 == 0 && alphabetLetters.indexOf(currentLetter) === -1) {
      return false
    } else if (index % 2 == 1 && currentLetter !== '.') {
      return false
    }
  }
  return true
}

const isRomanNumeral = (word) => {
  const romanNumeralRegex = /(^(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$)/
  const regExp = new RegExp(romanNumeralRegex)
  return word.match(regExp)
}

module.exports = {
  titleConversion
}
