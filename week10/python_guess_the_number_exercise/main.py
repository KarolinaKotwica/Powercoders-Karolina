import random

randomNumber = int(random.randint(0,100))

while True:
  guessString = input("Guess a number..")
  if guessString == '':
    continue
  guess = int(guessString)
  if randomNumber == guess:
    print(f"You guessed the number! The number is {randomNumber}")
    break
  elif randomNumber > guess:
    print("Your number is too small")
    
  elif randomNumber < guess:
    print("Your number is too big")
    
  else:
    print("Some Error")  