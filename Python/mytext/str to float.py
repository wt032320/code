from functools import reduce
def fn(x,y):
	return x * 10 + y
def str2float(s):
	n = s.index('.')#index()方法用于检索出列表中某一元素第一次出现的位置
	s1 = list(map(int,[x for x in s[:n]]))#列表切片
	s2 = list(map(int,[x for x in s[n+1:]]))
	return reduce(fn,s1)+reduce(fn,s2)/(10**len(s2))#乘幂
print(str2float('123.456'))