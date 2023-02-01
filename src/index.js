const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let letters = expr.split(/(.{10})/).filter(x => x.length === 10)
    let lettersWithoutZeros = []
    // let morseArr = []
    let resulArr = []

    for (let i = 0; i < letters.length; i++) {
        lettersWithoutZeros.push(Number(letters[i]).toString());
    }

    for (let i = 0; i < lettersWithoutZeros.length; i++) {
        let letterNums = lettersWithoutZeros[i].split(/(.{2})/).filter(x => x.length === 2)

        let morseLetter = ''



        for (let j = 0; j < letterNums.length; j++) {
            if (letterNums[j] === "10") {
                morseLetter += '.'
            } else if (letterNums[j] === "11") {
                morseLetter += '-'
            } else {
                morseLetter += ' '
            }
        }

        resulArr.push(MORSE_TABLE[morseLetter] || ' ');


    }

    return resulArr.join('')
}

module.exports = {
    decode
}