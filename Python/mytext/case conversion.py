def normalize(name):
	return name.capitalize()#capitalize()方法用于将一个字符串的第一个字母变为大写，其余变为小写
L1 = ['adam', 'LISA', 'barT']
print(list(map(normalize,L1)))
