L = ['Hello','Boy',18,'City',None]
print([s.lower() for s in L if isinstance(s,str)])#isinstance()方法用于判断一个变量是不是字符串