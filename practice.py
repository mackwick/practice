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
    