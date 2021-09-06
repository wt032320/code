class Product(object):
	"""The Product Class creates an instance of a product""" #文档字符串
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
    #property()方法会为属性创建一个组合了setter和getter方法以及析构函数和文档字符串的方法，Python
    #会根据在代码中如何使用property()方法来调用合适的方法。
    #只要为属性定义了property()方法，就可以使用property()方法来设置或获取某个单个的属性
	description = property(get_description,set_description)
	price = property(get_price,set_price)
	inventory = property(get_inventory,set_inventory)
prod1 = Product()
print(prod1.__doc__)#用于查看一个类的文档串
prod1.set_description('carrot')
prod1.set_price(1.00)
prod1.set_inventory(10)
print("{0} - price: ${1:.2f}, inventory: {2:d}".format(
	prod1.get_description(),prod1.get_price(),prod1.get_inventory()))
prod1.price = 2.32
print("the new price is",prod1.price)