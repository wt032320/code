class Product1(object):
	def __init__(self, description = 'new product',price = 0,inventory = 0):
		self.__description = description
		self.__price = price
		self.__inventory = inventory
	def __str__(self):
		return '{0} - price: ${1:.2f}, inventory: {2:d}'.format(self.__description,
		self.__price,self.__inventory)
	
	def set_description(self,desc):
		self.__description = desc
	def get_description(self):
		return self.__description

	def set_price(self,price):
		self.__price = price
	def get_price(self):
		return self.__price

	def set_inventory(self,inventory):
		self.__inventory = inventory
	def get_inventory(self):
		return self.__inventory
	description = property(get_description,set_description)
	price = property(get_price,set_price)
	inventory = property(get_inventory,set_inventory)
	def buy_Product(self,amount):
		self.__inventory = self.__inventory - amount
	def __del__(self):
		print("---Product1 对象已被回收----")