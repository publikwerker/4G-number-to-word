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



def wordToNumber(word):
  number = word.split()

  return number


print(wordToNumber('five'))