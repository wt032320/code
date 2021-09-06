from functools import reduce
def ride(x,y):
	return x * y
def prod(L):
	return reduce(ride,L)
L1=[1,3,4,5,7]
print(prod(L1))
