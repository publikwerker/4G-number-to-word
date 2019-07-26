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

def wordBank(word):
  switcher = {
    "point": '.',
    "zero": 0,
    "oh": 0,
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
  }
  return switcher.get(word)


def wordToNumber(word):
  word = word.split()
  number = map(wordBank, word)
  previous = -1
  total = 0
  for num in number:
    # if the list has only one item
    if len(number) == 1:
      return num
    if previous == -1:
      previous = num
      continue
    if num > previous:
      total += (num*previous)
      previous=-1
      continue
    if num < previous:
      total+=(num+previous)
      previous=-1
      continue
  if previous != -1:
    total+=previous  

  return total

print(wordToNumber('three'))
print(wordToNumber('nineteen'))
print(wordToNumber('two hundred ten'))
print(wordToNumber('five hundred sixty seven'))
print(wordToNumber("one thousand seven hundred seventy six"))