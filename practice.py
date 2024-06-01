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