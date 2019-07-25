/* 
This is a number to word converter @numToWord which takes in a number and returns that number in words.

For example:

Input: 111, output One Hundred Eleven
Input: 4032, output four thousand thirty two
Input: 87413, output eighty seven thousand four hundred thirteen
Input 45.2, output forty five point two

Another function @wordToNumber does the exact opposite:

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

function teenThousandMaker(fourth){
  let teen = '';
  switch(fourth){
    case '':
      teen = 'ten thousand ';
      break;
    case 'one thousand ':
      teen = 'eleven thousand ';
      break;
    case 'two thousand ':
      teen = 'twelve thousand';
      break;
    case 'three ':
      teen = 'thirteen thousand';
      break;
    case 'four ':
      teen = 'fourteen thousand';
      break;
    case 'five ':
      teen = 'fifteen thousand';
      break;
    case 'six thousand ':
      teen = 'sixteen thousand ';
      break;
    case 'seven ':
      teen = 'seventeen thousand';
      break;
    case 'eight ':
      teen = 'eighteen thousand';
      break;
    case 'nine ':
      teen = 'nineteen thousand';
      break;
  }
  return teen;
}

function numberToWord(number){
  let answerString = '';
  let afterDecimal = [];

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
  afterDecimal = afterDecimal.map((char)=>numSwitcher(char, 0));

  // check for instances of teens in the thousands
  if (word.length > 4 && word[4] === 'ten '){
    const teenLang = teenThousandMaker(word[3]);
    console.log(word);
    console.log(teenLang);
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

// for the second part, there is a word bank object
// and check words against key value to speed translation
// and allow for validation of input later
const wordBank = {
  "oh": 0,
  "zero": 0,
  "one": 1,
  "two": 2,
  "three": 3,
  "four": 4,
  "five": 5,
  "six": 6,
  "seven": 7,
  "eight": 8,
  "nine": 9,
  "ten": 10,
  "eleven": 11,
  "twelve": 12,
  "thirteen": 13,
  "fourteen": 14,
  "fifteen": 15,
  "sixteen": 16,
  "seventeen": 17,
  "eighteen": 18,
  "nineteen": 19,
  "twenty": 20,
  "thirty": 30,
  "forty": 40,
  "fifty": 50,
  "sixty": 60,
  "seventy": 70,
  "eighty": 80,
  "ninety": 90,
  "hundred": 100,
  "thousand": 1000,
};

function addNumber(number, i = 0, total = 0){
  console.log(`i is ${i}`);
  console.log(`number is ${number}`);
  if (number.length > 1){
    console.log('number length is greater than one');
    if ( i >= number.length ) {
      console.log('there are no more');
      return total;
    } else   
    if (number[i] > total && total !== 0) {
      total *= number[i];
      i++;
      return addNumber(number, i, total);
    } else
    // if this is the last number in the array
    if (!number[i+1]){
      console.log('this is the last one');
      total += number[i];
      return total;
    } else
    // if this number is smaller than the next
    if ( number[i] < number[i+1] ){
      console.log('this number is smaller than the next');
      total += (number[i]*number[i+1]);
      i+=2;
      return addNumber(number, i, total);
    } else
    // if this number is larger than the next
    console.log(number[i]);
    console.log(number[i+1]);
    if (number[i] > number[i+1]){
      console.log('this number is larger than the next');
      total += (number[i]+number[i+1]);
      i+=2;
      return addNumber(number, i, total);
    };
    return total;

  // if this is the only number in the array
  } else return number;
}

function wordToNumber(word){
  let number = [];
  word = word.split(' ');
  console.log(`word is ${word}`);
  for (words in word){
    number.push(wordBank[word[words]]);
  }

  return addNumber(number);
}

// console.log(numberToWord(13));
// console.log(numberToWord(411));
// console.log(numberToWord(9876));
// console.log(numberToWord(12019));
// console.log(numberToWord(516402));
// console.log(numberToWord(652049));
// console.log(numberToWord(4.3));
// console.log(numberToWord(42.19));
// console.log(numberToWord(3.1415926535));
// console.log(numberToWord(210000));

console.log(wordToNumber('one'));
console.log(wordToNumber('fifty five'));
console.log(wordToNumber('one hundred'));
console.log(wordToNumber('two hundred ten'));
console.log(wordToNumber('one thousand nine hundred seventy four'));
console.log(wordToNumber('one hundred thousand'));