a=input()
b_list=[int(x) for x in a.split()]
n=len(b_list)
for i in range(n):
	s=3.14*b_list[i]**2
	print(s)