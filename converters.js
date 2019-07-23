/* 
Coding test:
In Python, Write a number to word converter which takes in a number and returns that number in words.

For example:

Input: 111, output One Hundred Eleven
Input: 4032, output four thousand thirty two
Input: 87413, output eighty seven thousand four hundred thirteen
Input 45.2, output forty five point two

Write another method which does the exact opposite:

Input: Ten Thousand Four Hundred Eighty Two, Output: 14082
Input: Zero point Nine, Output 0.9 */

function numSwitcher(char, index){
  let text = '';
    if (index !== 1 && index !== 4){
      switch (char){
      case '1':
        text  += 'one ';
        break;
      case '2': 
        text += 'two ';
        break;
      case '3':
        text = 'three ';
        break;
      case '4':
        text = 'four ';
        break;
      case '5':
        text ='five ';
        break;
      case '6':
        text = 'six ';
        break;
      case '7':
        text = 'seven ';
        break;
      case '8':
        text = 'eight ';
        break;
      case '9':
        text = 'nine ';
        break;
      case '0':
        text = 'oh ';
        break;
    }
    if (text !== 'oh ') {
      switch ( index ) {
        case 0:
        break;
        case 2:
        text += 'hundred ';
        break;
        case 3:
        text += 'thousand ';
        break;
      }
    }
  } else {
    switch(char){
      case '1':
        text  += 'ten ';
        break;
      case '2': 
        text += 'twenty ';
        break;
      case '3':
        text = 'thirty ';
        break;
      case '4':
        text = 'forty ';
        break;
      case '5':
        text ='fifty ';
        break;
      case '6':
        text = 'sixty ';
        break;
      case '7':
        text = 'seventy ';
        break;
      case '8':
        text = 'eighty ';
        break;
      case '9':
        text = 'niney ';
        break;
    }
  }
  return text;
};

function teenMaker(first, second){
  let teen = '';
  switch(second){
    case 'oh ':
      teen = 'ten ';
      break;
    case 'one ':
      teen = 'eleven ';
      break;
    case 'two ':
      teen = 'twelve ';
      break;
    case 'three ':
      teen = 'thirteen ';
      break;
    case 'four ':
      teen = 'fourteen ';
      break;
    case 'five ':
      teen = 'fifteen ';
      break;
    case 'six ':
      teen = 'sixteen ';
      break;
    case 'seven ':
      teen = 'seventeen ';
      break;
    case 'eight ':
      teen = 'eighteen ';
      break;
    case 'nine ':
      teen = 'nineteen ';
      break;
  }
  return teen;
}

// capture number
// convert to string
// split string into chars
// convert text to number
// concat
// return 
function numberToWord(number){
  let answerString = '';
  number = number.toString().split('');
  let length = number.length;
  let word = [];

  // reverse order to determine place value
  for (let i = 0; i<length; i++){
    word.push(number.pop());
  };

  // convert string number to text number
  word = word.map((char, i)=>numSwitcher(char, i));

  // check for instances of teens
  if (word.length > 1 && word[1] === 'ten '){
    const teenLang = teenMaker(word[1],word[0]);
    word = word.slice(2);
    word.unshift(teenLang);
    length = word.length;
  }

  // reverse order to normal ltr
  for (let i = 0; i < length; i++){
    answerString += word.pop();
  };
  return answerString;
};

function wordToNumber(word){


  return number;
};

console.log(numberToWord(123));

console.log(numberToWord(13));
console.log(numberToWord(419));