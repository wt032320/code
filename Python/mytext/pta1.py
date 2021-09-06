import random
x=int(input())
n=int(input())
m=int(input())
a_list=[]
for i in range(97,123):
    a_list.append(chr(i))
for i in range(65,91):
    a_list.append(chr(i))
for i in range(48,58):
    a_list.append(chr(i))
random.seed(x)
for i in range(0,n):
    for i in range(0,m):
        print(random.choice(a_list),end='')
    print()
