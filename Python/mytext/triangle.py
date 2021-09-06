import math
a = int(input('please input a number '))
b = int(input('please input a number '))
c = int(input('please input a number '))
if a+b>c and a+c>b and b+c>a:
   perimeter=a+b+c
   print('the perimeter is ',perimeter)
   pi=perimeter/2
   area=math.sqrt(pi*(pi-a)*(pi-b)*(pi-c))
   print('the area is',area)
