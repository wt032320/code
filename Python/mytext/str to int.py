from functools import reduce
def fn(x,y):
	return x * 10 + y
def char2num(s):
	s1 = list(map(int,[x for x in s[::]]))
	return reduce(fn,s1)
print(char2num('12345'))
