class Product1(object):
	def __init__(self, description = 'new product',price = 0,inventory = 0):
		self.__description = description
		self.__price = price
		self.__inventory = inventory
	def __str__(self):
		return '{0} - price: ${1:.2f}, inventory: {2:d}'.format(self.__description,
		self.__price,self.__inventory)
	def __del__(self):
		print("---Product1 对象已被回收----")
prod2 = Product1('banana',1.50,30)
print(prod2)
del(prod2)