from insect import Insect
class Ant(Insect):
	"""The class is created for ants"""
	def __init__(self,backbone,exoskeleton,*body,leg,eyes,tentacle,width,shape,antennae):
		Insect.__init__(self,backbone,exoskeleton,*body,leg,eyes,tentacle)#初始化继承的属性
		self.__width = width
		self.__shape = shape
		self.__antennae = antennae
	def set_width(self,width):
		self.__width = width
	def set_shape(self,shape):
		self.__shape = shape
	def set_antennae(self,antennae):
		self.__antennae = antennae
	def get_width(self):
		return self.__width
	def get_shape(self):
		return self.__shape
	def get_antennae(self):
		return self.__antennae
prod = Ant()
print(prod.get_backbune())
print(tuple(prod.get_body()))
prod.set_width('narrow')
prod.set_shape('humped')
print(prod.get_width())
print(prod.get_shape())
