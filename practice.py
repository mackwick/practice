#grocery_list = ["one", "two", "three"]
#print(grocery_list)

#Define a Python dictionary named where_my_things_arecontaining a few items; where the keysare things you have, and the valueis the location you keep those things.
#Write a forloop that iterates over the items in the dictionary and prints each one as My [thing] is kept [location].

# where_my_things_are = {"mind": "money", "money": "mind", "face": "head"}

# for key,val in where_my_things_are.items():
#     print(f"Got my {key} on my {val}")

#Why won't the following work in Python?
	# menu = {
	# 	hamburger: 4.99,
	# 	french_fries: 1.99,
	# 	taco: 2.99
	# }
#keys need to be in ""

#What is a way to add items to a list in Python?
#append, extend, insert

#What is a way to remove an item from the front of a list in Python?
#pop(0), remove("value"), or del(0)

#Write a python function named sum_tothat accepts a single integer, n, and returns the sum of the integers from 1 to n.
# def sum_to(n):
#     if n == 0:
#     	return n
#     else:
#         prev_n = sum_to(n-1)
#         result = prev_n + n
#         return result
        
# print(sum_to(2))
    
#What are the first few steps of creating a new python/django package?
# python -m venv venv
# source ./venv/bin/activate
# pip install django
# django startproject <name>
# cd <name>
# django-admin startapp <section name>
    

# In python, how would you print "Mack" using this dictionary:
# myself = {"name": "Mack", "age": 35}

# print(myself["name"])

### In Python - create a variable "new_num" where the variable is the input in response to "give me a number: "
### Write an if statement that first checks if the number is divisible by 5
### if true, print "div by 5"
### if not, check if its divisible 3
### if true, print "div by 3"
### if false, "not div by 3 or 5"

# new_num = int(input("give me a number: "))

# if (new_num % 5 == 0):
#     print("div by 5")
# elif (new_num % 3 == 0):
#     print("div by 3")
# else:
#     print("not div by 3 or 5")

# Translate JS to Python

# function reverseString(str){
# return str.split("").reverse().join("")
# }

# console.log(reverseString("Hello World")) // "dlroW olleH"

# def reverseString(str):
#     reversed = [*str]
#     reversed.reverse()
#     return "".join(reversed)
# print(reverseString("Hello World"))

# Translate JS to Python

# function reverseString(str){
# return str.split("").reverse().join("")
# }

# console.log(reverseString("Hello World")) // "dlroW olleH"


# Define a Python dictionary named where_my_things_arecontaining a few items; where the keysare things you have, and the valueis the location you keep those things.
# Write a forloop that iterates over the items in the dictionary and prints each one as My [thing] is kept [location].

# where_my_things_are = {"mind": "money", "money": "mind"}

# for key, val in where_my_things_are.items():
#     print(f"got my {key} on my {val}")


#Translate JS to Python

# function randomNumber(low, max){
# while (true){
# const randomNum = Math.floor(Math.random() * max)

# if(randomNum >= low && randomNum <= max){
# return randomNum
# }
# }
# }

# console.log(randomNumber(10,20)) //random number between 10 and 20

# def random_number(min, max):
#     compare = True
#     while(compare == True):
#         import math
#         import random
#         randomNum = math.floor(random.random()*max)
#         if (randomNum >= min and randomNum <= max):
#             return randomNum
#         else:
#             compare = False
        
# print(random_number(10,20))

# Write a python function named sum_tothat accepts a single integer, n, and returns the sum of the integers from 1 to n.

# def sum_to(n):
#     sum = 0
#     i = 1
#     while(i<=n):
#         sum = sum + i
#         i = i + 1
#     print(sum)
    
# sum_to(10)

# Use python filter to create a new list of just the even numbers
# filt_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# filt_two = filter(lambda x: x%2 == 0, filt_list)

# print(list(filt_two))

# Create a dictionary named `home_town` containing the keys of `city`, `state` and `population`.
# Print a string with this format:
# "I was born in city, state - population of population"

# home_town = {'city': 'Rton', 'state': 'NC', 'population': 67000}

# print(f"I was born in {home_town['city']}, {home_town['state']} - population of {home_town['population']}")

# Iterate over the key: value pairs in `home_town` and print a string for each item, for example:
# "city = Arcadia"
# "state = California"
# "population = 58000"

# for key, val in home_town.items():
#     print(f"{key} = {val}")

### In Python - create a variable "new_num" where the variable is the input in response to "give me a number: "
### Write an if statement that first checks if the number is divisible by 5
### if true, print "div by 5"
### if not, check if its divisible 3
### if true, print "div by 3"
### if false, "not div by 3 or 5"

# new_num = int(input("give me a number: "))

# if (new_num % 5==0):
#     print("div by 5")
# elif (new_num % 3==0):
#     print("div by 3")
# else:
#     print("not div by 3 or 5")

# Define a Python dictionary named where_my_things_arecontaining a few items; where the keysare things you have, and the valueis the location you keep those things.
# Write a forloop that iterates over the items in the dictionary and prints each one as My [thing] is kept [location].

# where_my_things_are = {'coffee mug': 'desk', 'dog': 'lap', 'candle': 'work altar'}

# for key, val in where_my_things_are.items():
#     print(f"My {key} is on my {val}")

# students = ['mackwick', 'danny', 'timmy', 'tazzy', 'hojoony']
# foods = ('tofu', 'cereal', 'quaso', 'cheese', 'wine')

##Using the list and tuple above
# Create an empty list named `cohort`.
# Using a `for` loop, add one dictionary to the `cohort` list for each student name. Each dictionary should have this shape:
# {
# 'student': 'Tina',
# 'fav_food': 'Cheeseburger'
# }
# Iterate over `cohort` printing out each element.

# cohort = []

# for i, student in enumerate(students):
#     cohort.append({'student': student, 'fav_food': foods[i]})

# print(cohort)

# Iterate over the key: value pairs in `home_town` and print a string for each item, for example:
# "city = Arcadia"
# "state = California"
# "population = 58000"

# home_town = {
# 'city': 'Rullfton',
# 'state': 'NC',
# 'population': 67000
# }

# for key, val in home_town.items():
#     print(f"{key} = {val}")

# Use python filter to create a new list of just the even numbers
# filt_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# new_list = filter(lambda x: x % 2 == 0, filt_list)
# print(list(new_list))

# Translate JS to Python

# function randomNumber(low, max){
# while (true){
# const randomNum = Math.floor(Math.random() * max)

# if(randomNum >= low && randomNum <= max){
# return randomNum
# }
# }
# }

# console.log(randomNumber(10,20)) //random number between 10 and 20

# def random_num(min, max):
#     between = True
#     while (between == True):
#         import math
#         import random
#         rando_num = math.floor(random.random() * max)
#         if (rando_num >= min and rando_num <= max):
#             return rando_num
#         else:
#             between = False
            
# print(random_num(10,20))

# students = ['mackwick', 'danny', 'timmy', 'tazzy', 'hojoony']
# foods = ('tofu', 'cereal', 'quaso', 'cheese', 'wine')

##Using the list and tuple above
# Create an empty list named `cohort`.
# Using a `for` loop, add one dictionary to the `cohort` list for each student name. Each dictionary should have this shape:
# {
# 'student': 'Tina',
# 'fav_food': 'Cheeseburger'
# }
# Iterate over `cohort` printing out each element.

# cohort = []

# for i, student in enumerate(students):
#     cohort.append({"student": {student}, "fav_food": {foods[i]}})
    
# for co in enumerate(cohort):
#     print(f"{co}")
    
# Use python filter to create a new list of just the even numbers
# filt_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# new_list = filter(lambda x: x % 2 == 0, filt_list )
# print(list(new_list))

# Iterate over the key: value pairs in `home_town` and print a string for each item, for example:
# "city = Arcadia"
# "state = California"
# "population = 58000"

# home_town = {
# 'city': 'Rullfton',
# 'state': 'NC',
# 'population': 67000
# }

# for key, val in home_town.items():
#     print(f'{key} = {val}')

# students = ['mackwick', 'danny', 'timmy', 'tazzy', 'hojoony']
# foods = ('tofu', 'cereal', 'quaso', 'cheese', 'wine')

# ##Using the list and tuple above
# # Create an empty list named `cohort`.
# # Using a `for` loop, add one dictionary to the `cohort` list for each student name. Each dictionary should have this shape:
# # {
# # 'student': 'Tina',
# # 'fav_food': 'Cheeseburger'
# # }
# # Iterate over `cohort` printing out each element.

# cohort = []

# for i, student in enumerate(students):
#     cohort.append({'student': student, 'fave_food': foods[i]})
    
# print(list(cohort))

# Translate JS to Python

# function randomNumber(low, max){
# while (true){
# const randomNum = Math.floor(Math.random() * max)

# if(randomNum >= low && randomNum <= max){
# return randomNum
# }
# }
# }

# console.log(randomNumber(10,20)) //random number between 10 and 20
# def random_number(min, max):
#     compare = True
#     while(compare == True):
#         import math
#         import random
#         num = math.floor(random.random() * max)
#         if(num >= min and num <= max):
#             print(num)
#         else:
#             compare = False
#             return False
            
# print(random_number(10,20))

### In Python - create a variable "new_num" where the variable is the input in response to "give me a number: "
### Write an if statement that first checks if the number is divisible by 5
### if true, print "div by 5"
### if not, check if its divisible 3
### if true, print "div by 3"
### if false, "not div by 3 or 5"

# new_num = int(input("give me a number:"))

# if (new_num % 5 == 0):
#     print("div by 5")
# elif (new_num % 3 == 0):
#     print("div by 3")
# else:
#     print("not div 5 or 3")

#Use python filter to create a new list of just the even numbers
# filt_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# new_list = filter(lambda x: x%2 == 0, filt_list)

# print(list(new_list))

# In python, how would you print "Mack" using this dictionary:
# myself = {"name": "Mack", "age": 35}

# print(myself["name"])

# Create a dictionary named `home_town` containing the keys of `city`, `state` and `population`.
# Print a string with this format:
# "I was born in city, state - population of population"

# home_town = {'city': 'rton', 'state': 'nc', 'population': 67000}

# print(f"I was born in {home_town['city']}, {home_town['state']} - population of {home_town['population']}")