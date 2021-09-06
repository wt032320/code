def createCounter():
	s = 0               #s = [0]   list作为外层函的局部变量不需要声明
	def counter():
		nonlocal s      # nonlocal 关键字用于声明外层的局部变量，global 用来声明全局变量
		s = s + 1       #s[0] = s[0] + 1
		return s        #return s[0]
	return counter
a = createCounter()
print([a(),a(),a(),a()])