# Coding test:
# In Python, Write a number to word converter which takes in a number and returns that number in words.

# For example:

# Input: 111, output One Hundred Eleven
# Input: 4032, output four thousand thirty two
# Input: 87413, output eighty seven thousand four hundred thirteen
# Input 45.2, output forty five point two

# Write another method which does the exact opposite:

# Input: Ten Thousand Four Hundred Eighty Two, Output: 14082
# Input: Zero point Nine, Output 0.9 

def numSwitcher(char):
  index = char[0]
  num = char[1]
  text = ' '
  if (index != 1 and index != 4):
    if (num):
      switcher = {
        '1': "one ",
        '2': 'two ',
        '3': 'three ',
        '4': 'four ',
        '5': 'five ',
        '6': 'six ',
        '7': 'seven ',
        '8': 'eight ',
        '9': 'nine ',
      }
    text = (switcher.get(num, " "))

    if (text != ' '):
      if (index):
        switcher2 = {
          2: 'hundred ',
          3: 'thousand ',
          5: 'hundred ',
        }  
        text = text + switcher2.get(index, " ")
  else:
    switcher = {
      '1': 'ten ',
      '2': 'twenty ',
      '3': 'thirty ',
      '4': 'forty ',
      '5': 'fifty ',
      '6': 'sixty ',
      '7': 'seventy ',
      '8': 'eighty ',
      '9': 'ninety ',
    }
    text = switcher.get(num, "")
  return text

def decimalMaker(num):
  switcher4 = {
    '1': 'one ',
    '2': 'two ',
    '3': 'three ',
    '4': 'four ',
    '5': 'five ',
    '6': 'six ',
    '7': 'seven ',
    '8': 'eight ',
    '9': 'nine ',
  }
  return switcher4.get(num, ' ')


def pointMaker(number):
  return number + ' point '

def teenMaker(second):
  switcher = {
    '': 'ten ',
    'one ': 'eleven ',
    'two ': 'twelve ',
    'three ': 'thirteen ',
    'four ': 'fourteen ',
    'five ': 'fifteen ',
    'six ': 'sixteen ',
    'seven ': 'seventeen ',
    'eight ': 'eighteen ',
    'nine ': 'nineteen ',
  }
  return switcher.get(second, "")


def teenThousandMaker(fourth):
  switcher3 = {
    ' ': 'ten thousand',
    'one thousand ': 'eleven thousand ',
    'two thousand ': 'twelve thousand',
    'three thousand': 'thirteen thousand',
    'four thousand': 'fourteen thousand',
    'five thousand': 'fifteen thousand',
    'six thousand ': 'sixteen thousand ',
    'seven thousand': 'seventeen thousand',
    'eight thousand': 'eighteen thousand',
    'nine thousand': 'nineteen thousand',
  }
  return switcher3.get(fourth, "")

def numberToWord(number):
  afterDecimal = ''

  # stringify number and turn into an array
  number = list(str(number))
  
  # reverse order to determine place value
  number.reverse()

  # check for decimal
  if "." in number:
    location = number.index('.')+1
    afterDecimal = number[slice(0,location,1)]
    afterDecimal.reverse()
    number = number[slice(location, len(number), 1)]
 
  # convert string number to text number
  word = list(map(numSwitcher, enumerate(number)))
  afterDecimalText = map(decimalMaker, afterDecimal)
 
  # check for instances of teens in the thousands
  if (len(word) > 4 and word[4] == 'ten '):
    teenLang = teenThousandMaker(word[3])
    word.pop(4)
    word.pop(3)
    word.insert(3, teenLang)

  # check for instances of teens
  if (len(word) > 1 and word[1] == 'ten '):
    teenLang = teenMaker(word[0])
    word = word[2:len(word)]
    word.insert(0, teenLang)

  # reverse order to normal ltr and join
  word.reverse()
  answerString = "".join(word)  
  if ( len(afterDecimalText) > 0):
    afterDecimalText = "".join(afterDecimalText)
  
  if (len(afterDecimalText) > 0):
    return answerString + 'point' + afterDecimalText
  else: return answerString


# def wordToNumber(word):


  # return number

print(numberToWord(13))
print(numberToWord(411))
print(numberToWord(9876))
print(numberToWord(10000))
print(numberToWord(12019))
print(numberToWord(516402))
print(numberToWord(4.3))
print(numberToWord(42.19))
print(numberToWord(3.1415926535))