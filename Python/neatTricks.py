'''

@description : Tricks to help working with python.

General mish mash of concepts

'''

import itertools
    


''' Just like the JSX syntax use the && as a ternary'''

def testValue(value):
    return 'The value is ' + (value < 100 and 'Well over 100' or 'Just under 100')

testValue(1000)  #You know whats coming




''' Easy to generate lists and '''
listR = [range(5)]

print listR      # [0,1,2,3,4]




''' Sequence unpacking '''

string = 'www.testingpython.com'

each = string.split('.')

#each --> [wwww, testingpython, com]

#unpack list values into seperate variabales
start,mid,end = each


''' List comprehensions '''

#original way of doing things
output = []
for value in range(10):
    if value > 5:
        output.append(value)

#output = [6,7,8,9]

#using list comprehension
output = [  str(value) for value in range(10) if value > 5]




'''Generator expressions '''
gen = (value for value in range(10) if value > 5)

print gen.next()    # 6
print gen.next()    # 7



''' Set Comprehensions'''

setComp = { str(value) for value in range(10) if value > 5}

print setComp   # set(['9', '8', '7', '6'])



''' Dictionary Comprehensions '''

dictComp = { 'number {}'.format(value): str(value) for value in range(10) if value > 5 }

print dictComp  # {'number 9': '9', 'number 8': '8', 'number 7': '7', 'number 6': '6'}



