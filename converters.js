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
    }
    if (text !== '') {
      switch ( index ) {
        case 0:
        break;
        case 2:
        text += 'hundred ';
        break;
        case 3:
        text += 'thousand ';
        break;
        case 5:
        text += 'hundred ';
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
        text = 'ninety ';
        break;
    }
  }
  return text;
};

function pointMaker(number){
  return number += ' point ';
}

function teenMaker(second){
  let teen = '';
  switch(second){
    case '':
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

function teenThousandMaker(second){
  let teen = '';
  switch(second){
    case ' thousand ':
      teen = 'ten ';
      break;
    case 'one thousand ':
      teen = 'eleven thousand ';
      break;
    case 'two thousand ':
      teen = 'twelve thousand';
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
    case 'six thousand ':
      teen = 'sixteen thousand ';
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
  let afterDecimal = '';

  // stringify number and turn into an array
  number = number.toString().split('');
  
  // reverse order to determine place value
  let word = number.reverse();

  // check for decimal
  if (word.includes('.')){
    let location = word.indexOf('.');
    afterDecimal = word.slice(0,location).reverse();
    word = word.slice(location+1);
  }
 
  // convert string number to text number
  word = word.map((char, i)=>numSwitcher(char, i));
  afterDecimal = afterDecimal.map((char, i)=>numSwitcher(char, i));

  // check for instances of teens in the thousands
  if (word.length > 4 && word[4] === 'ten '){
    const teenLang = teenThousandMaker(word[3]);
    word.splice(3, 2, teenLang);
    length = word.length;
  };

  // check for instances of teens
  if (word.length > 1 && word[1] === 'ten '){
    const teenLang = teenMaker(word[0]);
    word = word.slice(2);
    word.unshift(teenLang);
    length = word.length;
  };

  // reverse order to normal ltr and join
  answerString = word.reverse().join('');  
  afterDecimal = afterDecimal.join('');
  
  if (afterDecimal.length > 0){
    return `${answerString}point ${afterDecimal}`;
  } else return answerString;
};

function wordToNumber(word){


  return number;
};

console.log(numberToWord(13));
console.log(numberToWord(411));
console.log(numberToWord(9876));
console.log(numberToWord(12019));
console.log(numberToWord(516402));
console.log(numberToWord(652049));
console.log(numberToWord(4.3));
console.log(numberToWord(42.19));
console.log(numberToWord(3.1415926535));

