const titleConversion = require('./index.js').titleConversion

const testingWords = [
  'GIGATON',
  'GUARDIANS OF THE GALAXY / O.S.T.',
  'WHEN WE ALL FALL ASLEEP WHERE DO WE GO',
  'THRILLER (PICTURE DISC)',
  'GOOD KID: M.A.A.D CITY',
  'LED ZEPPELIN IV',
  'MUSIC FOR NINE POSTCARDS',
  'BERWARDHALLEN, STOCKHOLM OCTOBER 3RD 1989',
  'READY OR NOT',
  'DEVIL IS BACK',
  'GOTHENBURG 1969',
  'AEROSMITH',
  'I LOVE ROCK N ROLL',
  'WE GET BY',
  'PROXIMA - O.S.T.',
  'O BROTHER WHERE ART THOU / O.S.T.',
  'LIVE AT THIRD MAN RECORDS',
  'KILLING IS MY BUSINESS & BUSINESS IS GOOD: FINAL',
  'YES SIR I WILL',
  'III',
  '80S TV CLASSICS: MUSIC FROM THE TRANSFORMERS',
  'BROWN SABBATH VOL. 2',
  'ROCK N ROLL HIGH SCHOOL - O.S.T.',
  'TO CY & LEE: INSTRUMENTALS 1',
  "ONCE MORE 'ROUND THE SUN",
  'KEEP AMERICA GREAT!',
  'HEARTTHROB',
  'LOVE & THEFT',
  'ON DARK HORSES',
  'WHITE LIGHT/WHITE HEAT',
  "ALL THAT YOU CAN'T LEAVE BEHIND",
  '13',
  'MOULIN ROUGE: THE MUSICAL / O.B.C.R.',
  'LEGACY! LEGACY! (PINK VINYL)',
  'U.K.',
  "SQUEEZIN' AND BLOWIN': GREAT VICTOR MASTERS 98-01",
  'BACK TO BLACK',
  'CHRONICLE: THE 20 GREATEST HITS',
  'MADE IN THE A.M.',
  'THE LOVES OF YOUR LIFE',
  'PICK OF DESTINY',
  'BEST OF R.E.M. AT THE BBC',
  'IN THE JUNGLE GROOVE',
  'AIA: ALIEN OBSERVER',
  'MAGPIE & THE DANDELION',
  'TO THE 5 BOROUGHS',
  'TO ALL THE GIRLS'
]

const testingResults = [
  'Gigaton',
  'Guardians of the Galaxy / O.S.T.',
  'When We All Fall Asleep Where Do We Go',
  'Thriller (Picture Disc)',
  'Good Kid: M.A.A.D City',
  'Led Zeppelin IV',
  'Music For Nine Postcards',
  'Berwardhallen, Stockholm October 3rd 1989',
  'Ready Or Not',
  'Devil Is Back',
  'Gothenburg 1969',
  'Aerosmith',
  'I Love Rock N Roll',
  'We Get By',
  'Proxima - O.S.T.',
  'O Brother Where Art Thou / O.S.T.',
  'Live At Third Man Records',
  'Killing Is My Business & Business Is Good: Final',
  'Yes Sir I Will',
  'III',
  '80s Tv Classics: Music from the Transformers',
  'Brown Sabbath Vol. 2',
  'Rock N Roll High School - O.S.T.',
  'To Cy & Lee: Instrumentals 1',
  "Once More 'Round the Sun",
  'Keep America Great!',
  'Heartthrob',
  'Love & Theft',
  'On Dark Horses',
  'White Light/White Heat',
  "All That You Can't Leave Behind",
  '13',
  'Moulin Rouge: the Musical / O.B.C.R.',
  'Legacy! Legacy! (Pink Vinyl)',
  'U.K.',
  "Squeezin' And Blowin': Great Victor Masters 98-01",
  'Back to Black',
  'Chronicle: the 20 Greatest Hits',
  'Made In the A.M.',
  'The Loves of Your Life',
  'Pick of Destiny',
  'Best of R.E.M. At the Bbc',
  'In the Jungle Groove',
  'Aia: Alien Observer',
  'Magpie & the Dandelion',
  'To the 5 Boroughs',
  'To All the Girls'
]

const totalCases = testingWords.length
let passedCases = 0
let failedCases = 0

for (let i = 0; i < testingWords.length; i++) {
  const testingWord = testingWords[i]
  const expectedResult = testingResults[i]
  const actualResult = titleConversion(testingWord)

  if (expectedResult === actualResult) {
    passedCases++
  } else {
    console.log('*************************************************')
    console.log('FAILED')
    console.log(`Expected: ${expectedResult}\n for ${testingWord}\n but got: ${actualResult}`)
    console.log('*************************************************')
    failedCases++
  }
}

console.log(`Total cases = ${totalCases}`)
console.log(`Total passed cases = ${passedCases}`)
console.log(`Total failed cases = ${failedCases}`)
